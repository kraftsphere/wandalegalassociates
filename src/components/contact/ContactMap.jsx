import React from "react";

const ContactMap = () => {
  return (
    <div className='bg-white'>
      <div className='s_wrapper flex flex-col md:flex-row justify-between gap-8 !pt-0'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5204098532186!2d72.92195137513741!3d19.128684282086784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7003d5edb17%3A0xb40d48d514041c5a!2sW%20%26%20A%20Legal%20associates!5e0!3m2!1sen!2sin!4v1752338476506!5m2!1sen!2sin'
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
