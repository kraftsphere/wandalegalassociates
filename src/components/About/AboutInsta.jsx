"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./instaSlider.css";
import Script from "next/script";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords"; 

const InstagramPostSlider = () => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  // Common settings for both sliders
  const commonSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    prevArrow: (
      <div className="slick-arrow slick-prev insta-arrow">
        <div className="arrow-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="20"
            height="20"
          >
            <defs>
              <linearGradient
                id="instaGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#405de6" />
                <stop offset="25%" stopColor="#833ab4" />
                <stop offset="50%" stopColor="#c13584" />
                <stop offset="75%" stopColor="#e1306c" />
                <stop offset="100%" stopColor="#fd1d1d" />
              </linearGradient>
            </defs>
            <path
              fill="url(#instaGradient)"
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </div>
      </div>
    ),
    nextArrow: (
      <div className="slick-arrow slick-next insta-arrow">
        <div className="arrow-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="20"
            height="20"
          >
            <defs>
              <linearGradient
                id="instaGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#405de6" />
                <stop offset="25%" stopColor="#833ab4" />
                <stop offset="50%" stopColor="#c13584" />
                <stop offset="75%" stopColor="#e1306c" />
                <stop offset="100%" stopColor="#fd1d1d" />
              </linearGradient>
            </defs>
            <path
              fill="url(#instaGradient)"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </div>
      </div>
    ),
  };

  // Post slider settings
  const postSettings = {
    ...commonSettings,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // xl screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "40px",
        },
      },
    ],
  };

  // Reel slider settings - optimized for different aspect ratio
  const reelSettings = {
    ...commonSettings,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // xl screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "400px",
        },
      },
    ],
  };

  // Instagram post data
  const instaPosts = [
    {
      id: 1,
      url: "https://www.instagram.com/p/DLB15DfxE9k/",
      title: "Post 1",
      placeholder: "images/about/insta/instapost2.webp", // Replace with actual placeholder
    },
    {
      id: 2,
      url: "https://www.instagram.com/p/DK8zWDYR2Aa/",
      title: "Post 2",
      placeholder: "images/about/insta/instapost3.webp", // Replace with actual placeholder
    },
    {
      id: 3,
      url: "https://www.instagram.com/p/DKyZIdCRI6I/",
      title: "Post 3",
      placeholder: "images/about/insta/instapost1.webp", // Replace with actual placeholder
    },
    {
      id: 4,
      url: "https://www.instagram.com/p/DKmOaLAznO0",
      title: "Post 4",
      placeholder: "images/about/insta/instapost4.webp", // Replace with actual placeholder
    },
    {
      id: 5,
      url: "https://www.instagram.com/p/DKWLP76I_Dt/",
      title: "Post 5",
      placeholder: "images/about/insta/instapost5.webp", // Replace with actual placeholder
    },
    {
      id: 6,
      url: "https://www.instagram.com/p/DKTp_ECvviW/",
      title: "Post 6",
      placeholder: "images/about/insta/instapost6.webp", // Replace with actual placeholder
    },
    {
      id: 7,
      url: "https://www.instagram.com/p/DKRBpoOh_5y/",
      title: "Post 7",
      placeholder: "images/about/insta/instapost7.webp", // Replace with actual placeholder
    },
    {
      id: 8,
      url: "https://www.instagram.com/p/DKOWBJpu53r/",
      title: "Post 8",
      placeholder: "images/about/insta/instapost8.webp", // Replace with actual placeholder
    },
    {
      id: 9,
      url: "https://www.instagram.com/p/DKJTQEDs1IH/",
      title: "Post 9",
      placeholder: "images/about/insta/instapost9.webp", // Replace with actual placeholder
    },
    {
      id: 10,
      url: "https://www.instagram.com/p/DJeJynzMuxe/",
      title: "Post 10",
      placeholder: "images/about/insta/instapost10.webp", // Replace with actual placeholder
    },
  ];

  // Instagram reel data - Update with real reel URLs
  const instaReels = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DLHCRCxNZAv/",
      title: "Reel 0",
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DK3iuiyRhPL/",
      title: "Reel 1",
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DKtdZu2RUFL/",
      title: "Reel 2",
    },
    {
      id: 4,
      url: "https://www.instagram.com/reel/DKMnSjoTpnM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "Reel 3",
    },
    {
      id: 5,
      url: "https://www.instagram.com/reel/DJeZHY2zcYZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "Reel 4",
    },
    {
      id: 6,
      url: "https://www.instagram.com/reel/DI6A7CmsdMf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      title: "Reel 5",
    },
  ];

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        }}
      />

      <div className="bg-white p-3 sm:p-4 md:p-6">
        <div className="s_wrapper mx-auto pt-0 max-w-7xl">
          <div className="text-center md:mb-2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-2 text-black text-center">
              <SkewFadeInWords text="Instagram Reels" />
            </h2>
          </div>

          {/* Insta Posts */}
          {/* <div className="instagram-slider-container">
            <div className="instagram-slider">
              <Slider {...postSettings}>
                {instaPosts.map((post) => (
                  <div key={post.id} className="px-2">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative"
                      >
                        <div className="aspect-w-1 aspect-h-1">
                          <img
                            src={post.placeholder}
                            alt={post.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50">
                          <svg
                            className="w-12 h-12 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </div>
                      </a>
                      <div className="p-4">
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 hover:text-orange-500"
                        >
                          View on Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div> */}

          {/* Insta Reels */}
          <div className="instagram-reels-slider-container px-4 sm:px-6">
            <div className="instagram-reels-slider relative">
              <div className="absolute w-full h-12 bg-white top-0 z-99 sm:h-20"></div>
              <div className="absolute  w-full h-10 sm:h-16 md:20 bg-white bottom-0 z-9"></div>
              <Slider {...reelSettings}>
                {instaReels.map((reel) => (
                  <div key={reel.id} className="px-2">
                    <div className="relative  rounded-lg overflow-hidden transition-shadow duration-300">
                      <div className="relative pb-[153.78%] sm:pb-[195%] md:pb-[149%]">
                        {" "}
                        {/* 16:9 aspect ratio */}
                        <blockquote
                          className="instagram-media absolute top-0 left-0 w-full h-full"
                          data-instgrm-permalink={reel.url}
                          data-instgrm-version="14"
                          style={{
                            background: "#FFF",
                            border: 0,
                            borderRadius: "3px",
                            boxShadow:
                              "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                            margin: "1px",
                            maxWidth: "100%",
                            minWidth: "200%",
                            padding: 0,
                          }}
                        >
                          <div style={{ padding: "16px" }}>
                            <a
                              href={reel.url}
                              style={{
                                background: "#FFFFFF",
                                lineHeight: 0,
                                padding: "0 0",
                                textAlign: "center",
                                textDecoration: "none",
                                width: "100%",
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View on Instagram
                            </a>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Follow Us */}
          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/winshine_financial_services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
            >
              Follow Us
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        <style jsx>{`
          .instagram-slider-container,
          .instagram-reels-slider-container {
            position: relative;
            padding: 0 30px;
          }

          .instagram-slider,
          .instagram-reels-slider {
            position: relative;
          }

          .slick-slide {
            padding: 0 10px;
          }

          .slick-list {
            margin: 0 -10px;
          }

          .slick-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            width: 40px;
            height: 40px;
            display: flex !important;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }

          .slick-arrow:hover {
            background: rgba(255, 255, 255, 1);
            transform: translateY(-50%) scale(1.1);
          }

          .slick-prev {
            left: -15px;
          }

          .slick-next {
            right: -15px;
          }

          @media (max-width: 1024px) {
            .instagram-slider-container,
            .instagram-reels-slider-container {
              padding: 0 20px;
            }

            .slick-prev {
              left: -10px;
            }

            .slick-next {
              right: -10px;
            }
          }

          @media (max-width: 640px) {
            .instagram-slider-container,
            .instagram-reels-slider-container {
              padding: 0 10px;
            }

            .slick-arrow {
              width: 30px;
              height: 30px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default InstagramPostSlider;
