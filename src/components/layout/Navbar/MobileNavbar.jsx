"use client";
import { useEffect, useState, useRef } from "react";

import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import "./Navbar.scss";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleDropdownWheel = (e) => {
    const el = e.currentTarget; // ← Use THIS instead of servicesDropdownRef
    if (!el) return;

    const canScroll = el.scrollHeight > el.clientHeight;
    if (!canScroll) return;

    const isScrollingDown = e.deltaY > 0;
    const isAtTop = el.scrollTop === 0;
    const isAtBottom =
      Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;

    // Prevent parent scroll ONLY when dropdown can't scroll further
    if ((isScrollingDown && !isAtBottom) || (!isScrollingDown && !isAtTop)) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const navigationItems = [
    {
      id: "home",
      label: "Home",
      href: "/",
    },
    {
      id: "about",
      label: "About Us",
      href: "/about-us",
    },
    {
      id: "services",
      label: "Services",
      // href: "/services",
      children: [
        {
          id: "civil-commercial-property-disputes",
          label: "Civil, Commercial & Property Disputes",
          href: "/services#civil-commercial-property-disputes",
        },
        {
          id: "real-estate-redevelopment-conveyance",
          label: "Real Estate, Redevelopment & Conveyance Matters",
          href: "/services#real-estate-redevelopment-conveyance",
        },
        {
          id: "property-consultation-due-diligence",
          label: "Property Consultation, Title Due Diligence & Registration",
          href: "/services#property-consultation-due-diligence",
        },
        {
          id: "stamp-duty-valuation-registration",
          label: "Stamp Duty, Valuation & Registration Matters",
          href: "/services#stamp-duty-valuation-registration",
        },
        {
          id: "legal-documentation-drafting",
          label: "Legal Documentation & Drafting",
          href: "/services#legal-documentation-drafting",
        },
        {
          id: "criminal-law-white-collar",
          label: "Criminal Law, Defense & White-Collar Crimes",
          href: "/services#criminal-law-white-collar",
        },
        {
          id: "cyber-crime-digital-offences",
          label: "Cyber Crime & Digital Offences",
          href: "/services#cyber-crime-digital-offences",
        },
        {
          id: "family-matrimonial-laws",
          label: "Family, Matrimonial & Personal Laws",
          href: "/services#family-matrimonial-laws",
        },
        {
          id: "muslim-personal-law",
          label: "Muslim Personal Law, Inheritance & Succession Matters",
          href: "/services#muslim-personal-law",
        },
        {
          id: "testamentary-estate-planning",
          label: "Testamentary & Estate Planning",
          href: "/services#testamentary-estate-planning",
        },
        {
          id: "trusts-societies-wakf",
          label: "Trusts, Societies, Wakf & Religious Institution Matters",
          href: "/services#trusts-societies-wakf",
        },
        {
          id: "corporate-startup-advisory",
          label: "Corporate, Startup & Business Legal Advisory",
          href: "/services#corporate-startup-advisory",
        },
        {
          id: "arbitration-mediation-adr",
          label: "Arbitration, Mediation & Alternative Dispute Resolution",
          href: "/services#arbitration-mediation-adr",
        },
        {
          id: "consumer-protection-recovery",
          label: "Consumer Protection & Recovery Matters",
          href: "/services#consumer-protection-recovery",
        },
        {
          id: "government-revenue-authorities",
          label: "Government, Revenue & Local Authority Matters",
          href: "/services#government-revenue-authorities",
        },
      ],
    },
    {
      id: "contact",
      label: "Contact Us",
      href: "/contact",
    },
  ];

  const handleScroll = () => {
    setScrolled(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavItem = (item, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[item.id];

    return (
      <motion.div
        key={item.id}
        className='w-full'
        variants={{
          hidden: { opacity: 0, x: 20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 25,
            },
          },
        }}
      >
        {item.href ? (
          <motion.a
            className={`flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors duration-200 cursor-pointer ${
              level > 0 ? `pl-${4 + level * 4} ml-2` : ""
            }`}
            whileHover={{
              backgroundColor: "rgb(243 244 246)",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (hasChildren) {
                toggleExpanded(item.id);
              } else if (item.href) {
                setIsOpen(false);
              }
            }}
            href={item.href}
          >
            <div className='flex items-center space-x-3'>
              <span
                className={`text-gray-800 ${
                  level > 0 ? "text-sm" : "text-base"
                } font-medium`}
              >
                {item.label}
              </span>
            </div>
            {hasChildren && (
              <div className='flex-shrink-0'>
                {isExpanded ? (
                  <ChevronDown className='w-4 h-4 text-gray-500' />
                ) : (
                  <ChevronRight className='w-4 h-4 text-gray-500' />
                )}
              </div>
            )}
          </motion.a>
        ) : (
          <motion.div
            className={`flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors duration-200 cursor-pointer ${
              level > 0 ? `pl-${4 + level * 4} ml-2` : ""
            }`}
            whileHover={{
              backgroundColor: "rgb(243 244 246)",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (hasChildren) {
                toggleExpanded(item.id);
              } else if (item.href) {
                setIsOpen(false);
              }
            }}
          >
            <div className='flex items-center space-x-3'>
              <span
                className={`text-gray-800 ${
                  level > 0 ? "text-sm" : "text-base"
                } font-medium`}
              >
                {item.label}
              </span>
            </div>
            {hasChildren && (
              <div className='flex-shrink-0'>
                {isExpanded ? (
                  <ChevronDown className='w-4 h-4 text-gray-500' />
                ) : (
                  <ChevronRight className='w-4 h-4 text-gray-500' />
                )}
              </div>
            )}
          </motion.div>
        )}
        <AnimatePresence>
          {hasChildren && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              onWheel={handleDropdownWheel}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: { duration: 0.3, ease: "easeInOut" },
                  opacity: { duration: 0.2, delay: 0.1 },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.3, ease: "easeInOut" },
                  opacity: { duration: 0.1 },
                },
              }}
              className='bg-gray-200 max-h-[50vh] overflow-y-scroll overflow-x-hidden'
            >
              <motion.div
                initial='hidden'
                animate='visible'
                exit='hidden'
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.03,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                {item.children.map((child, childIndex) =>
                  renderNavItem(child, level + 1, childIndex)
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div
      className={`navbar-wrapper  lg:hidden border-b  ${
        scrolled ? "scrolled-up" : ""
      }`}
    >
      <div className='relative'>
        {/* Header */}
        <header className='border-b border-gray-200'>
          <nav
            className={`navbar flex items-center justify-between px-4 py-3 ${
              scrolled ? "!py-3" : "!py-5"
            }`}
          >
            <div className='w-[97%] flex justify-between items-center max-w-full'>
              <div className={`max-w-fit ${scrolled ? "" : ""}`}>
                <Link href='/' className='transition-all !max-w-fit'>
                  <Image
                    src='/images/logo/wandawhitelogo.png'
                    height={200}
                    width={270}
                    alt='W and A Legal Associates'
                    className='max-h-[40px] w-max object-contain transition-all duration-300'
                  />
                </Link>
              </div>

              {/* Mobile menu button */}
              <motion.button
                onClick={toggleMenu}
                className='p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200'
                aria-label='Toggle menu'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className='w-6 h-6 relative z-[99]' />
                  ) : (
                    <Menu className='w-6 h-6' />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </nav>
        </header>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='fixed z-50'
            >
              {/* Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.3,
                }}
                className={`${
                  scrolled ? "top-[85px] h-[max]" : "top-[110px] h-[max]]"
                } fixed left-[50%] translate-x-[-50%] rounded-2xl w-[95%] bg-white shadow-2xl flex flex-col`}
              >
                {/* Menu Items - Scrollable Area */}
                <nav className='flex-1 overflow-y-auto min-h-0'>
                  <motion.div
                    className='py-2'
                    initial='hidden'
                    animate='visible'
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {navigationItems.map((item, index) =>
                      renderNavItem(item, 0, index)
                    )}
                  </motion.div>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileNavbar;
