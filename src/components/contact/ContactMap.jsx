import React from "react";

const ContactMap = () => {
  return (
    <div className='bg-white'>
      <div className='s_wrapper flex flex-col md:flex-row justify-between gap-8 !pt-0'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11215.240767790388!2d72.87988394292856!3d19.074004050418168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80de07a728499635%3A0x7b2f3c64e4767480!2sW%20and%20A%20Legal%20Associates!5e0!3m2!1sen!2sin!4v1767216783126!5m2!1sen!2sin'
          width='600'
          height='360'
          style={{ border: "0px" }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full rounded-4xl'
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
