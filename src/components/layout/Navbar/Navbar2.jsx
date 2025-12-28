"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [investmentDropdownOpen, setInvestmentDropdownOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const hideTimeoutRef = useRef(null);
  const investmentTimeoutRef = useRef(null);
  const businessTimeoutRef = useRef(null);
  const pathname = usePathname();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    setScrolled(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Calculator Dropdown
  const showDropdown = () => {
    clearTimeout(hideTimeoutRef.current);
    setIsDropdownVisible(true);
    setBusinessDropdownOpen(false);
    setInvestmentDropdownOpen(false);
  };

  const hideDropdownWithDelay = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 200);
  };

  // Investment Dropdown
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
    setInvestmentDropdownOpen((prev) => {
      if (!prev) {
        setBusinessDropdownOpen(false), setIsDropdownVisible(false);
      } // close other
      return !prev;
    });
  };

  // Business Opportunity Dropdown
  const showBusinessDropdown = () => {
    clearTimeout(businessTimeoutRef.current);
    setBusinessDropdownOpen(true);
  };

  const hideBusinessDropdownWithDelay = () => {
    businessTimeoutRef.current = setTimeout(() => {
      setBusinessDropdownOpen(false);
    }, 400);
  };

  const toggleBusinessDropdownMobile = () => {
    setBusinessDropdownOpen((prev) => {
      if (!prev) {
        setInvestmentDropdownOpen(false), setIsDropdownVisible(false);
      } // close other
      return !prev;
    });
  };

  return (
    <div
      className={`navbar-wrapper border-b drop-shadow-sm ${
        scrolled ? "scrolled-up" : ""
      }`}
    >
      <nav className={`navbar ${scrolled ? "!py-4" : "!py-7"}`}>
        <div className='w-[97%] lg:max-w-[1400px] flex justify-end items-center relative max-w-full'>
          <div
            className={`logo pl-4 ${scrolled ? "logo-small" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <Link href='/' className='transition-all'>
              <Image
                src='https://res.cloudinary.com/dmrtnrmvv/image/upload/v1751748162/horizontallogo_842833_nsjv0u.png'
                height={120}
                width={270}
                alt='Winshine Logo'
                className='max-w-[80%] ml-1 md:ml-0 lg:max-w-[220px] xl:max-w-[270px]'
              />
            </Link>
          </div>

          <div
            className={`${scrolled ? "top-16" : "top-18"} ${
              menuOpen
                ? "translate-y-0 mt-2 lg:translate-y-0 bg-white"
                : "translate-y-[-700px] lg:translate-y-0"
            } transition duration-400 items-center gap-[20px] absolute -z-10 lg:z-10 lg:!static lg:flex w-full lg:w-fit p-4 lg:p-0 rounded-xl drop-shadow-2xl lg:drop-shadow-none`}
          >
            <div className='flex flex-col lg:flex-row gap-4 lg:gap-3 xl:gap-8'>
              <Link
                href='/'
                className={`text-[#101435] transition-all text-[16px] lg:text-[14px] xl:text-[16px] lg:hidden select-none ${
                  pathname === "/" ? "font-semibold" : "font-[500]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href='/about-us'
                className={`text-[#101435] transition-all text-[16px] lg:text-[14px] xl:text-[16px] select-none ${
                  pathname === "/about-us" ? "font-semibold" : "font-[500]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href='/services'
                className={`text-[#101435]  transition-all text-[16px] lg:text-[14px] xl:text-[16px] select-none ${
                  pathname === "/services" ? "font-semibold" : "font-[500]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>

              {/* Investment Dropdown */}
              <div
                className='relative'
                onMouseEnter={!isMobile ? showInvestmentDropdown : undefined}
                onMouseLeave={
                  !isMobile ? hideInvestmentDropdownWithDelay : undefined
                }
              >
                <p
                  className={`text-[#101435] transition-all text-[16px] cursor-pointer select-none ${
                    pathname.includes("/investment")
                      ? "font-semibold"
                      : "font-[500]"
                  }`}
                  onClick={
                    isMobile ? toggleInvestmentDropdownMobile : undefined
                  }
                >
                  Investment
                </p>
                <AnimatePresence>
                  {investmentDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className='absolute lg:left-[50%] lg:translate-x-[-50%] mt-4 flex flex-col bg-white text-black rounded-xl overflow-hidden navbar-dropdown-shadow  z-10 min-w-[220px] py-2 w-full lg:w-auto'
                    >
                      <Link
                        href='/investment/traditional-investment'
                        className='px-4 py-2 hover:bg-[#101435] select-none hover:text-white'
                        onClick={() => {
                          setMenuOpen(false);
                          setInvestmentDropdownOpen(false);
                        }}
                      >
                        Traditional Investments
                      </Link>
                      <Link
                        href='/investment/new-age-investment'
                        className='px-4 py-2 hover:bg-[#101435] select-none hover:text-white'
                        onClick={() => {
                          setMenuOpen(false);
                          setInvestmentDropdownOpen(false);
                        }}
                      >
                        New-Age Investment
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href='/insurance'
                className={`text-[#101435] transition-all select-none text-[16px] lg:text-[14px] xl:text-[16px] ${
                  pathname === "/insurance" ? "font-semibold" : "font-[500]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Insurance
              </Link>

              {/* Calculators Dropdown */}
              {/* <div
                className="relative"
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdownWithDelay}
              >
                <p
                  className={`text-[#101435] transition-all select-none text-[16px] lg:text-[14px] xl:text-[16px] cursor-pointer ${
                    pathname.includes("/calculator")
                      ? "font-semibold"
                      : "font-[500]"
                  }`}
                >
                  Calculators
                </p>
                <AnimatePresence>
                  {isDropdownVisible && (
                    <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="absolute lg:left-[50%] lg:translate-x-[-50%] mt-4 flex flex-col bg-white text-black rounded-xl overflow-hidden navbar-dropdown-shadow  z-10 min-w-[220px] py-2 w-full lg:w-auto"
                    >
                      <Link
                        href="/calculator/sip-calculator"
                        className="px-4 py-2 hover:bg-[#101435] select-none hover:text-white"
                        onClick={() => {
                          setMenuOpen(false);
                          setIsDropdownVisible(false);
                        }}
                      >
                        SIP
                      </Link>
                      <Link
                        href="/calculator/retirement-calculator"
                        className="px-4 py-2 hover:bg-[#101435] select-none hover:text-white"
                        onClick={() => {
                          setMenuOpen(false);
                          setIsDropdownVisible(false);
                        }}
                      >
                        Retirement
                      </Link>
                      <Link
                        href="/calculator/emi-calculator"
                        className="px-4 py-2 hover:bg-[#101435] select-none hover:text-white"
                        onClick={() => {
                          setMenuOpen(false);
                          setIsDropdownVisible(false);
                        }}
                      >
                        EMI
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}

              {/* Business Opportunity Dropdown */}
              <div
                className='relative'
                onMouseEnter={!isMobile ? showBusinessDropdown : undefined}
                onMouseLeave={
                  !isMobile ? hideBusinessDropdownWithDelay : undefined
                }
              >
                <p
                  className={`text-[#101435] transition-all text-[16px] lg:text-[14px] xl:text-[16px] cursor-pointer select-none ${
                    pathname.includes("/business-opportunity")
                      ? "font-semibold"
                      : "font-[500]"
                  }`}
                  onClick={isMobile ? toggleBusinessDropdownMobile : undefined}
                >
                  Business Opportunity
                </p>
                <AnimatePresence>
                  {businessDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className='absolute lg:left-[50%] lg:translate-x-[-50%] mt-4 flex flex-col bg-white text-black rounded-xl overflow-hidden navbar-dropdown-shadow  z-10 min-w-[220px] py-2 w-full lg:w-auto'
                    >
                      <Link
                        href='/business-opportunity/business-associate'
                        className='px-4 py-2 hover:bg-[#101435] select-none hover:text-white'
                        onClick={() => {
                          setMenuOpen(false);
                          setBusinessDropdownOpen(false);
                        }}
                      >
                        For Business Associate
                      </Link>
                      <Link
                        href='/business-opportunity/employer'
                        className='px-4 py-2 hover:bg-[#101435] select-none hover:text-white'
                        onClick={() => {
                          setMenuOpen(false);
                          setBusinessDropdownOpen(false);
                        }}
                      >
                        For Employer
                      </Link>
                      <Link
                        href='/business-opportunity/private-client'
                        className='px-4 py-2 hover:bg-[#101435] select-none hover:text-white'
                        onClick={() => {
                          setMenuOpen(false);
                          setBusinessDropdownOpen(false);
                        }}
                      >
                        For Private Client
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <Link
              href='/contact'
              className={`text-[#101435] transition-all select-none text-[16px] lg:text-[14px] xl:text-[16px] ${
                pathname === "/contact" ? "font-semibold" : "font-[500]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href='https://winshine.wealthmagic.in/'
              target='_blank'
              onClick={() => setMenuOpen(false)}
            >
              <button className='gradient-button text-[#ffffff] px-4 py-2 rounded-xl select-none !ml-0 xl:!ml-4 !mt-4 md:!mt-0 font-semibold'>
                Client Login
              </button>
            </Link>
          </div>

          <div
            className='items-center gap-[30px] lg:hidden py-1 pr-1 md:pr-0'
            onClick={handleMenuToggle}
          >
            <span>
              <Menu className='text-black lg:text-[#a91e22] h-8' />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
