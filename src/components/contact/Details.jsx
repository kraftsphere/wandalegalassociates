import React from "react";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
const Details = () => {
  return (
    <div className='text-[#040404] md:mt-5'>
      <h2 className='sr-only'>Get in Touch</h2>
      <div className='text-2xl md:text-4xl lg:text-5xl font-medium mb-4 lg:mb-4'>
        <SkewFadeInWords text='Get in Touch' />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='mb-2 sm:text-[20px] flex gap-3 sm:gap-5 xl:w-[70%]'>
          <span>
            <IoLocationOutline className='gradient-button text-white text-[36px] p-2 rounded-lg ' />
          </span>{" "}
          <span className=''>
            {" "}
            <a
              href='https://maps.app.goo.gl/iYZZuicyeyyurYUH8'
              target='_blank'
              rel='noopener noreferrer'
            >
              Office No 107 - 109, Panchsheel Building, Rizvi Builders, Opp Bus
              Depot, Depot, L.B.S. Marg Road, Kurla West, Mumbai 400070
            </a>
          </span>
        </p>
        <p className='mb-2 sm:text-[20px] flex gap-3 sm:gap-5 items-center'>
          <span>
            <LuPhone className='gradient-button text-white text-[36px] p-2 rounded-lg ' />
          </span>{" "}
          <div>
            <Link href='tel:+91 9867799450 ' className='border-r pr-1'>
              <span className='mt-1'>+91 9867799450 </span>
            </Link>{" "}
            <Link href='tel:+91 9820010809' className='ml-2'>
              <span className='mt-1'>+91 9820010809</span>
            </Link>{" "}
            <br />
            {/* <Link href='tel:022 35939918 '>
              <span className='mt-1'>022 35939918 </span>
            </Link> */}
          </div>
        </p>
        <p className='sm:text-[20px] flex gap-3 sm:gap-5'>
          <span>
            <MdOutlineMail className='gradient-button text-white text-[36px] p-2 rounded-lg ' />
          </span>
          <Link href='mailto:wandalegalassociates@gmail.com'>
            <span className='mt-1'>wandalegalassociates@gmail.com</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Details;
