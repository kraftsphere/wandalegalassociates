"use client";

import { useState, useRef, useEffect } from "react";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";

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
    src: "/images/about/gallery/v1.mp4",
    width: "col-span-1 sm:col-span-1 md:col-span-1",
    height: "h-44 sm:h-48 md:h-full",
  },
  {
    type: "video",
    src: "/images/about/gallery/v2.mp4",
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
    src: "/images/about/gallery/v3.mp4",
    width: "col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2",
    height: "h-52 sm:h-64 md:h-full",
  },
];

export default function WinshineGallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const videoRefs = useRef({});

  const openPopup = (item, index) => {
    setSelectedItem({ ...item, index });

    // Pause all videos in gallery
    Object.values(videoRefs.current).forEach((video) => {
      if (video) video.pause();
    });
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  const handleVideoRef = (index, ref) => {
    videoRefs.current[index] = ref;
  };

  return (
    <div className="bg-white p-3 sm:p-4 md:p-6">
      <div className="s_wrapper mx-auto">
        <div className="text-center md:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-2 lg:mb-4 text-black text-center">
            <SkewFadeInWords text="Winshine Visuals" />
          </h2>
        </div>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 auto-rows-min">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`${item.width} ${item.height} cursor-pointer group overflow-hidden rounded-lg lg:max-h-[320px] shadow-lg bg-white transition-transform duration-200 active:scale-95 `}
              onClick={() => openPopup(item, index)}
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
                   playsInline
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                />
              )}
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        {/* {selectedItem && (
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
                  src={selectedItem.src || "/placeholder.svg"}
                  alt="Popup content"
                  className="w-fit mx-auto max-h-[85vh] sm:max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  autoPlay
                  loop
                  className="w-fit mx-auto max-h-[85vh] sm:max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />
              )}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
