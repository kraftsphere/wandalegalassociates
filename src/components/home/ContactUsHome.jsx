import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUsHome = () => {
  return (
    <section className='bg-[#f775890f] py-16 px-6 lg:px-20'>
      <div className='max-w-[1400px] mx-auto'>
        <h2 className='text-3xl md:text-4xl font-semibold text-center text-[#111] mb-4'>
          Contact Us
        </h2>
        <p className='text-center text-gray-600 mb-12 text-sm md:text-base max-w-2xl mx-auto'>
          Reach out to us for expert legal counsel in civil, criminal,
          corporate, and digital law. We’re here to support you with clarity,
          strategy, and dedication.
        </p>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Contact Info Card */}
          <div className='bg-white rounded-xl shadow-md p-6 flex-1 space-y-6'>
            {/* Phone */}
            <div className='flex items-start gap-4'>
              <div className='bg-[#fff7f8] p-2 rounded-full'>
                <Phone className='text-[#b53d53] w-5 h-5' />
              </div>
              <div>
                <h4 className='text-md font-semibold text-gray-800 mb-1'>
                  Phone
                </h4>
                <p className='text-sm text-gray-700 leading-relaxed'>
                  <a href='tel:+919867799450'>+91 9867799450</a>
                  <br />
                  <a href='tel:+919820010809'>+91 9820010809</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className='flex items-start gap-4'>
              <div className='bg-[#fff7f8] p-2 rounded-full'>
                <Mail className='text-[#b53d53] w-5 h-5' />
              </div>
              <div>
                <h4 className='text-md font-semibold text-gray-800 mb-1'>
                  Email
                </h4>
                <a
                  href='mailto:wandalegalassociates@gmail.com'
                  className='text-sm text-gray-700 leading-relaxed'
                >
                  wandalegalassociates@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className='flex items-start gap-4'>
              <div className='bg-[#fff7f8] p-2 rounded-full'>
                <MapPin className='text-[#b53d53] w-5 h-5' />
              </div>
              <div>
                <h4 className='text-md font-semibold text-gray-800 mb-1'>
                  Office
                </h4>
                <p className='text-sm text-gray-700 leading-relaxed'>
                  <a
                    href='https://maps.app.goo.gl/iYZZuicyeyyurYUH8'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Office No 107 - 109, Panchsheel Building, Rizvi Builders,
                    Opp Bus Depot, <br className='md:hidden' /> L.B.S. Marg
                    Road, Kurla West, Mumbai 400070
                  </a>
                </p>
              </div>
            </div>

            <a
              href='/contact'
              className='gradient-button-rd w-max text-[#ffffff] px-4 py-2 rounded-xl select-none !ml-0 xl:!ml-4 !mt-4 md:!mt-0 font-semibold cursor-pointer'
            >
              Book a Consultation
            </a>
          </div>

          {/* Google Map */}
          <div className='rounded-xl overflow-hidden shadow-md flex-1 min-h-[400px]'>
            <iframe
              title='Khan Legal Office Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15068.01530215171!2d72.96127915759278!3d19.20502514077965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91a5af7e3d1%3A0x85c0bb1d99d3e16c!2sLaw%20Office!5e0!3m2!1sen!2sin!4v1655562641916!5m2!1sen!2sin'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              className='h-[400px]'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHome;
