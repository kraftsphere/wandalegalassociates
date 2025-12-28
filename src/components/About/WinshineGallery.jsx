"use client";

import { useState, useRef, useEffect } from "react";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay } from "react-icons/fa";
import { LuMaximize } from "react-icons/lu";
import "./WinshineGallery.css";

const mediaItems = [
  {
    type: "image",
    src: "/images/about/gallery/A7302015.jpg",
    width: "col-span-1 sm:col-span-1 md:col-span-1",
    height: "h-48 sm:h-56 md:h-full",
  },
  {
    type: "image",
    src: "/images/about/gallery/A7301944.jpg",
    width: "col-span-1 sm:col-span-2 md:col-span-2",
    height: "h-56 sm:h-64 md:h-80",
  },
  {
    type: "image",
    src: "/images/about/gallery/A7302063.jpg",
    height: "h-52 sm:h-64 md:h-full",
  },
  {
    type: "video",
    src: "/video/vdo-1.mp4",
    width: "col-span-1 sm:col-span-1 md:col-span-1",
    height: "h-44 sm:h-48 md:h-full",
  },
  {
    type: "video",
    src: "/video/vdo-2.mp4",
    width: "col-span-1 sm:col-span-2 md:col-span-2",
    height: "h-48 sm:h-56 md:h-full",
  },
  {
    type: "image",
    src: "/images/about/gallery/A7302072.jpg",
    width: "col-span-1 sm:col-span-1 md:col-span-1",
    height: "h-56 sm:h-72 md:h-full",
  },
  {
    type: "video",
    src: "/video/vdo-3.mp4",
    width: "col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2",
    height: "h-52 sm:h-64 md:h-full",
  },
];

export default function WinshineGallery() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef({});
  const textSliderRef = useRef(null);
  const imageSliderRef = useRef(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent =
        window.navigator.userAgent || window.navigator.vendor || window.opera;
      const isIOSDevice =
        /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
      setIsIOS(isIOSDevice);
    }
  }, []);

  // Detect if screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openPopup = (item, index) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  const handleVideoRef = (index, ref) => {
    if (ref) {
      videoRefs.current[index] = ref;

      // On mobile, autoplay video
      if (window.innerWidth < 768) {
        const playPromise = ref.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn("Video autoplay blocked:", err);
          });
        }
      }
    }
  };

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 bottom-1 transform -translate-y-1/2 z-[9] bg-white/80 shadow-md p-2 rounded-full hover:bg-gray-200"
    >
      <svg
        className="w-5 h-5 text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );

  const textSliderSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    // autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    arrows: true,
    beforeChange: (_, next) => setActiveSlide(next),
    appendDots: (dots) => (
      <div>
        <ul className="flex mt-4 justify-center">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 rounded-full bg-[#101435] opacity-50"></div>
    ),
  };

  return (
    <div className="bg-white p-3 sm:p-4 md:p-6">
      <div className="s_wrapper mx-auto pt-0">
        <div className="text-center md:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-2 lg:mb-4 text-black text-center">
            <SkewFadeInWords text="Meet Our Core Team" />
          </h2>
        </div>
        {/* Gallery Grid */}
        <div className="md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 auto-rows-min hidden ">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`${item.width} ${item.height} cursor-pointer group overflow-hidden rounded-lg lg:max-h-[400px] lg:min-h-full shadow-lg bg-white transition-transform duration-200 active:scale-95 `}
            >
              {item.type === "image" ? (
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <video
                  ref={(ref) => handleVideoRef(index, ref)}
                  src={item.src}
                  muted
                  loop
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Slider - visible below md */}
        <div className="block md:hidden mt-4 lg:mt-8">
          <Slider {...textSliderSettings}>
            {mediaItems.map((item, index) => (
              <div
                key={index}
                className={`${item.height} max-w-[98%] mx-auto cursor-pointer min-h-[450px] sm:min-h-[500px] group overflow-hidden rounded-lg bg-white transition-transform duration-200 active:scale-95 relative`}
                // onClick={() => openPopup(item, index)}
                onClick={(e) => e.stopPropagation()}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Gallery item ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <>
                    <video
                      ref={(ref) => handleVideoRef(index, ref)}
                      src={item.src}
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[999] bg-[#00000050] w-12 h-12 rounded-full flex justify-center items-center">
                      <LuMaximize className="text-white" size={22} />
                    </div> */}
                  </>
                )}
              </div>
            ))}
          </Slider>
        </div>
        {/* Popup Modal - only on mobile */}
        {/* {selectedItem &&
          (isMobile && !(isIOS && selectedItem.type === "video") ? (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] p-2 sm:p-4"
              onClick={closePopup}
            >
              <div
                className="relative w-full max-w-4xl max-h-full animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closePopup}
                  className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 p-2 cursor-pointer"
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {selectedItem.type === "image" ? (
                  <img
                    src={selectedItem.src}
                    alt="Popup content"
                    className="w-fit mx-auto max-h-[80vh] sm:max-h-[70vh] object-contain rounded-lg shadow-2xl"
                  />
                ) : (
                  <video
                    src={selectedItem.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-fit mx-auto max-h-[80vh] sm:max-h-[70vh] object-contain rounded-lg shadow-2xl"
                  />
                )}
              </div>
            </div>
          ) : null)} */}
      </div>
    </div>
  );
}
