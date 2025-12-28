"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { legalServices } from "@/components/service/ServiceMaster";

/* =======================
   SERVICES DATA
======================= */
const SERVICES = legalServices.map((service) => ({
  label: service.title,
  href: `/services#${service.id}`,
}));

const Navbar = () => {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [investmentDropdownOpen, setInvestmentDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const investmentTimeoutRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  /* =======================
     RESPONSIVE CHECK
  ======================= */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* =======================
     SCROLL EFFECT
  ======================= */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =======================
     SERVICES DROPDOWN OPEN/CLOSE
  ======================= */
  const showInvestmentDropdown = () => {
    clearTimeout(investmentTimeoutRef.current);
    setInvestmentDropdownOpen(true);
  };

  const hideInvestmentDropdownWithDelay = () => {
    investmentTimeoutRef.current = setTimeout(() => {
      setInvestmentDropdownOpen(false);
    }, 400);
  };

  const toggleInvestmentDropdownMobile = () => {
    setInvestmentDropdownOpen((prev) => !prev);
  };

  /* =======================
     PREVENT VIEWPORT OVERFLOW
  ======================= */
  useEffect(() => {
    if (!investmentDropdownOpen || !servicesDropdownRef.current) return;

    const dropdown = servicesDropdownRef.current;
    const rect = dropdown.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    let shiftX = 0;

    if (rect.right > viewportWidth - 0) {
      shiftX = viewportWidth - rect.right - 12;
    }

    if (rect.left > 12) {
      shiftX = 0 - rect.left;
    }

    dropdown.style.transform = `translateX(${shiftX}px)`;
  }, [investmentDropdownOpen]);

  useEffect(() => {
    if (investmentDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [investmentDropdownOpen]);
  const handleDropdownWheel = (e) => {
    const el = servicesDropdownRef.current;
    if (!el) return;

    // Dropdown is scrollable ONLY when content overflows
    const canScroll = el.scrollHeight > el.clientHeight;
    if (!canScroll) return;

    const isScrollingDown = e.deltaY > 0;
    const isAtTop = el.scrollTop === 0;
    const isAtBottom =
      Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;

    // Stop background scroll ONLY when dropdown can consume scroll
    if ((isScrollingDown && !isAtBottom) || (!isScrollingDown && !isAtTop)) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      className={`navbar-wrapper hidden lg:block border-b drop-shadow-sm ${
        scrolled ? "scrolled-up" : ""
      }`}
    >
      <nav className={`navbar ${scrolled ? "!py-3" : "!py-5"}`}>
        <div className='w-[97%] lg:max-w-[1400px] flex justify-end items-center relative max-w-full'>
          {/* LOGO */}
          <div className={`logo pl-4 ${scrolled ? "logo-small" : ""}`}>
            <Link href='/'>
              <Image
                src='https://res.cloudinary.com/ddo593vrk/image/upload/v1766850918/a_xmxqz2.png'
                height={100}
                width={270}
                alt='Winshine Logo'
                className='max-w-[80%] ml-1 md:ml-0 lg:max-w-[160px] xl:max-w-[170px]'
              />
            </Link>
          </div>

          {/* NAV LINKS */}
          <div
            className={`${scrolled ? "top-16" : "top-18"} ${
              menuOpen
                ? "translate-y-0 mt-2 lg:translate-y-0 bg-white"
                : "translate-y-[-700px] lg:translate-y-0"
            } transition duration-400 items-center gap-[20px] absolute -z-10 lg:z-10 lg:!static lg:flex w-full lg:w-fit p-4 lg:p-0 rounded-xl drop-shadow-2xl lg:drop-shadow-none`}
          >
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-3 xl:gap-6 2xl:gap-8'>
              <Link
                href='/'
                className={`text-[#101435] text-[16px] lg:text-[14px] xl:text-[16px] ${
                  pathname === "/" ? "font-semibold" : "font-[500]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href='/about-us'
                className={`text-[#101435] text-[16px] lg:text-[14px] xl:text-[16px] ${
                  pathname === "/about-us" ? "font-semibold" : "font-[500]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>

              {/* SERVICES DROPDOWN */}
              <div
                className='relative'
                onMouseEnter={!isMobile ? showInvestmentDropdown : undefined}
                onMouseLeave={
                  !isMobile ? hideInvestmentDropdownWithDelay : undefined
                }
              >
                <Link href='/services'>
                  <p
                    className={`text-[#101435] text-[16px] cursor-pointer ${
                      pathname.includes("/services")
                        ? "font-semibold"
                        : "font-[500]"
                    }`}
                    onClick={
                      isMobile ? toggleInvestmentDropdownMobile : undefined
                    }
                  >
                    Services
                  </p>
                </Link>

                <AnimatePresence>
                  {investmentDropdownOpen && (
                    <motion.div
                      ref={servicesDropdownRef}
                      onWheel={handleDropdownWheel}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className='
  absolute lg:right-[-50%] mt-4
  bg-white text-black rounded-xl
  navbar-dropdown-shadow z-10
  w-[580px] p-4

  max-h-[calc(100vh-180px)]
  overflow-y-auto
  overscroll-contain
'
                    >
                      <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
                        {SERVICES.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className='px-4 py-2 hover:bg-[#101435] hover:text-white rounded-md transition-all'
                            onClick={() => {
                              setMenuOpen(false);
                              setInvestmentDropdownOpen(false);
                            }}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA */}
            <Link href='/contact'>
              <button className='cursor-pointer gradient-button-rd text-white px-4 py-2 rounded-xl font-semibold'>
                Contact Us
              </button>
            </Link>
          </div>

          {/* MOBILE ICON */}
          <div
            className='items-center gap-[30px] lg:hidden py-1 pr-1'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className='text-black h-8' />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
