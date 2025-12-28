import React from "react";
import { FaLinkedin } from "react-icons/fa";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";

const FoundingLegacy = () => {
  return (
    <section className='py-16 px-6 lg:px-20 bg-[#f9f3f1]'>
      <div className=' max-w-[1400px] md:w-[80%] mx-auto'>
        <div className='mb-8'>
          <h2 className='mb-4 text-2xl mx-auto text-center md:text-4xl font-medium text-[#040404]'>
            <SkewFadeInWords text='Our Founding Legacy' />
          </h2>
          <p className='mt-2 max-w-2xl mx-auto text-center text-sm text-gray-600'>
            Trusted legal leadership built over two generations — from courtroom
            expertise to modern legal strategy.
          </p>
        </div>

        {/* Row 1: Wasim */}
        <div className='flex flex-col lg:flex-row items-center mb-20'>
          {/* Image */}
          <div className='w-full lg:w-[25%] mb-6 lg:mb-0'>
            <img
              src='https://sps.widyatama.ac.id/wp-content/uploads/2020/08/dummy-profile-pic-male1.jpg'
              alt='Wasim Khan'
              className='rounded-xl w-full h-auto object-cover shadow-md'
            />
          </div>

          {/* Content */}
          <div className='lg:ml-10 w-full lg:w-[70%]'>
            <div className='flex items-center space-x-2 mb-2'>
              <h3 className='text-xl font-semibold text-gray-800'>
                Wasim Khan
              </h3>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-700 hover:text-blue-800'
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <p className='text-gray-600 text-sm leading-relaxed'>
              With over 30 years of experience in litigation and advisory roles,
              Wasim Khan is a veteran of the legal profession. From handling
              high-profile civil disputes to offering strategic criminal
              defense, his career has been built on trust, ethical clarity, and
              excellence.
              <br />
              <br />
              Known for his calm presence and deep domain knowledge, he has
              mentored many in the legal field while continually advocating for
              fairness in every case he takes on. His legacy is the foundation
              upon which the firm's reputation stands today.
            </p>
          </div>
        </div>

        {/* Row 2: Asim */}
        <div className='flex flex-col lg:flex-row-reverse items-center'>
          {/* Image */}
          <div className='w-full lg:w-[25%] mb-6 lg:mb-0'>
            <img
              src='https://sps.widyatama.ac.id/wp-content/uploads/2020/08/dummy-profile-pic-male1.jpg'
              alt='Anas Khan'
              className='rounded-xl w-full h-auto object-cover shadow-md'
            />
          </div>

          {/* Content */}
          <div className='lg:mr-10 w-full lg:w-[70%]'>
            <div className='flex items-center space-x-2 mb-2'>
              <h3 className='text-xl font-semibold text-gray-800'>Anas Khan</h3>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-700 hover:text-blue-800'
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Anas Khan represents the new generation of legal minds—tech-savvy,
              globally aware, and relentlessly client-focused. With a strong
              background in corporate law, digital compliance, and startup legal
              structuring, he brings agility and innovation to every engagement.
              <br />
              <br />
              He is also passionate about making legal services more transparent
              and accessible through digital platforms and automation. Anas's
              work is not just about solving problems—it's about reimagining how
              legal support can empower businesses and individuals alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingLegacy;
