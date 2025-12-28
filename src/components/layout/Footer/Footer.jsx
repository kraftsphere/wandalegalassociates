"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-[#101435] text-white font-sans'>
      {/* Floating Buttons */}
      <div className='fixed right-8 bottom-8 z-50 flex flex-col gap-4'>
        <Link href='https://wa.me/+919867799450' target='_blank'>
          <div className='gradient-button-rd p-3 rounded-full shadow'>
            <FaWhatsapp size={20} />
          </div>
        </Link>
        <Link href='tel:+919867799450'>
          <div className='gradient-button-rd p-3 rounded-full shadow'>
            <IoMdCall size={20} />
          </div>
        </Link>
      </div>

      <div className='s_wrapper px-6 py-12 mx-auto !pb-6'>
        {/* ================= ROW 1 ================= */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {/* Column 1 - Logo */}
          <div className='flex flex-col items-start gap-4'>
            <Image
              src='/images/logo/wandablack-bg.png'
              width={200}
              height={70}
              alt='W and A Legal Associates'
              className='object-contain max-h-[100px] h-full w-auto ml-0'
            />

            <div className='flex  gap-4 mt-2  '>
              <Link
                href='https://www.instagram.com/wandalegalassociates'
                target='_blank'
              >
                <FaInstagram size={22} />
              </Link>
              <Link
                href='https://www.facebook.com/share/16jkCaTDkj/?mibextid=wwXIfr'
                target='_blank'
              >
                <FaFacebookF size={22} />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <p className='font-semibold mb-4'>Quick Links</p>
            <div className='flex flex-col gap-2 text-sm'>
              <Link href='/'>Home</Link>
              <Link href='/about-us'>About Us</Link>
              <Link href='/contact'>Contact Us</Link>
              <Link href='/terms-and-conditions'>Terms & Conditions</Link>
              <Link href='/privacy-policy'>Privacy Policy</Link>
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <p className='font-semibold mb-4'>Contact</p>
            <div className='flex flex-col gap-2 text-sm'>
              <div className='grid grid-cols-12 items-start md:gap-x-7'>
                <Phone className='col-span-1 w-5 h-5' />
                <div className='col-span-10'>
                  <a href='tel:+919867799450'>+91 9867799450</a>
                  <a href='tel:+919820010809'>+91 9820010809</a>
                </div>
              </div>
              <div className='grid grid-cols-12 items-start md:gap-x-7'>
                <Mail className=' col-span-1 w-5 h-5' />
                <div className='col-span-10'>
                  <a
                    href='mailto:wandalegalassociates@gmail.com'
                    className='text-sm  leading-relaxed'
                  >
                    wandalegalassociates@gmail.com
                  </a>
                </div>
              </div>
              <div className='grid grid-cols-12 items-start md:gap-x-7'>
                <MapPin className=' col-span-1 w-5 h-5' />
                <div className='col-span-10'>
                  <a
                    href='https://maps.app.goo.gl/am1U8objJUpg3fEHA'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <p className='text-sm leading-relaxed'>
                      107 Pancsheel Building Rizvi Builders, Opp Kurla West
                      Depot,
                      <br className='md:hidden' />
                      LBS Marg Road Kurla West Mumbai 400070
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        <div className='mt-14'>
          <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 text-sm'>
            {/* Services Column 1 */}
            <div>
              <p className='font-semibold mb-4'>Services</p>
              <div className='flex flex-col gap-2'>
                <Link href='/services#civil-commercial-property-disputes'>
                  Civil, Commercial & Property Disputes
                </Link>
                <Link href='/services#real-estate-redevelopment-conveyance'>
                  Real Estate & Redevelopment
                </Link>
                <Link href='/services#property-consultation-due-diligence'>
                  Property Consultation & Due Diligence
                </Link>
                <Link href='/services#stamp-duty-valuation-registration'>
                  Stamp Duty & Registration
                </Link>
                <Link href='/services#legal-documentation-drafting'>
                  Legal Documentation & Drafting
                </Link>
              </div>
            </div>

            {/* Services Column 2 */}
            <div className='mt-3 md:mt-0'>
              <p className='font-semibold hidden md:block mb-4 invisible'>
                Services
              </p>
              <div className='flex flex-col gap-2'>
                <Link href='/services#criminal-law-white-collar'>
                  Criminal Law & White Collar Crimes
                </Link>
                <Link href='/services#cyber-crime-digital-offences'>
                  Cyber Crime & Digital Offences
                </Link>
                <Link href='/services#family-matrimonial-laws'>
                  Family & Matrimonial Laws
                </Link>
                <Link href='/services#muslim-personal-law'>
                  Muslim Personal Law
                </Link>
                <Link href='/services#testamentary-estate-planning'>
                  Testamentary & Estate Planning
                </Link>
              </div>
            </div>

            {/* Services Column 3 */}
            <div className='mt-3 md:mt-0'>
              <p className='font-semibold hidden md:block mb-4 invisible'>
                Services
              </p>
              <div className='flex flex-col gap-2'>
                <Link href='/services#trusts-societies-wakf'>
                  Trusts, Societies & Wakf Matters
                </Link>
                <Link href='/services#corporate-startup-advisory'>
                  Corporate & Startup Advisory
                </Link>
                <Link href='/services#arbitration-mediation-adr'>
                  Arbitration & Mediation
                </Link>
                <Link href='/services#consumer-protection-recovery'>
                  Consumer Protection & Recovery
                </Link>
                <Link href='/services#government-revenue-authorities'>
                  Government & Revenue Matters
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <hr className='!mt-10 mb-5 border-white/20' />

        <div className='text-center text-sm flex flex-col md:flex-row justify-center gap-1'>
          <p>
            © {new Date().getFullYear()}{" "}
            <Link href='/' className='gradient-text-rd'>
              W and A Legal Associates
            </Link>
            . <br className='sm:hidden' /> All Rights Reserved.
          </p>
          <p>
            By{" "}
            <Link
              href='https://www.kraftsphere.com'
              target='_blank'
              className='gradient-text-rd'
            >
              KraftSphere
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
