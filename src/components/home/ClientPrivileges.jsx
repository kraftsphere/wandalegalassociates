import Link from "next/link";
import React from "react";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";
import { CheckCircle } from "lucide-react";
// import { a } from "framer-motion/dist/types.d-B50aGbjN";

function ClientPrivileges() {
  return (
    <div className='bg-[#f775890f]'>
      <div className='s_wrapper'>
        <div className='mx-auto'>
          <div className='flex flex-col lg:flex-row items-center md:gap-8 gap-4'>
            {/* Mobile Heading */}
            <h2 className='sr-only lg:hidden'>
              About W and A Legal Associates
            </h2>
            <div className='lg:hidden text-2xl md:text-4xl font-medium text-[#040404]'>
              <SkewFadeInWords text='About W and A Legal Associates' />
            </div>
            {/* Mobile Heading */}
            {/* <h2 className='mb-1 lg:hidden text-2xl -mt-4 md:text-4xl font-medium text-[#040404]'>
              <SkewFadeInWords text='Since 1997 ' />
            </h2> */}

            {/* Image Section */}
            <div className='relative lg:w-1/2 w-full flex gap-[4%]'>
              <div className='w-[48%] rounded-lg overflow-hidden shadow-md md:h-[400px] mt-6 md:mt-8'>
                <img
                  src='/images/home/homeabout1.jpeg'
                  alt='Legal Services'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='w-[48%] rounded-lg overflow-hidden shadow-md block md:h-[400px] mb-6'>
                <img
                  src='/images/home/homeabout2.jpeg'
                  alt='Law Consultation'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* Content Section */}
            <div className='lg:w-1/2 md:mt-0'>
              <h2 className='sr-only hidden lg:block'>
                About W and A Legal Associates
              </h2>
              <div className='hidden lg:block text-2xl md:text-4xl font-medium mb-4 text-[#040404]'>
                <SkewFadeInWords text='About W and A Legal Associates' />
              </div>
              <p className='text-gray-700 max-w-2xl mx-auto mb-6 text-justify md:text-start'>
                W & A Legal Associates is a Mumbai-based full-service law firm
                with a legacy since 1997, built on a strong foundation of
                integrity, social responsibility, and client-focused advocacy.
                The firm delivers clear, practical, and result-oriented legal
                solutions across diverse legal areas, combining legal expertise
                with a deep understanding of each client’s unique concerns. With
                decades of experience and a modern multidisciplinary approach,
                we provide hands-on legal guidance, transparent communication,
                and effective representation, ensuring confidentiality,
                accountability, and the protection of our clients’ rights with
                professionalism and trust.
              </p>
              {/* <p className='text-gray-700 max-w-2xl mx-auto mb-6 text-justify md:text-start'>
                Our practice is built on a hands-on, end-to-end approach,
                ensuring every matter receives focused attention and clear legal
                guidance at every stage. Serving clients across Mumbai, Thane,
                and Navi Mumbai, and supported by a strong nationwide
                professional network, we handle matters with confidentiality,
                accountability, and timely action—aiming not only for effective
                dispute resolution but also for long-term legal security and
                client confidence.
              </p> */}

              {/* Features List */}
              {/* <div className='flex flex-col mb-14 md:flex-row md:gap-4 text-black'>
                <div className='md:w-1/2'>
                  <ul>
                    {[
                      {
                        name: "Civil & Property Disputes",
                        id: "/services#civil-and-property-disputes",
                      },
                      {
                        name: "Criminal Law & Defense",
                        id: "/services#criminal-law-and-defense",
                      },
                      {
                        name: "Family & Divorce Law",
                        id: "/services#family-and-divorce-law",
                      },
                      {
                        name: "Property Consultation & Registration",
                        id: "/services#property-consultation-and-registration",
                      },
                      {
                        name: "Stamp Duty and Registration",
                        id: "/services#stamp-duty-and-registration",
                      },
                    ].map((item, idx) => (
                      <a href={item.id} key={idx}>
                        <li className='flex gap-2 items-start mt-4 2xl:mt-6'>
                          <CheckCircle className='min-w-4 mt-1.5 h-4 w-4 ml-2 text-[#ae2c2f] fill-white' />
                          <p className="relative font-semibold text-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#ae2c2f] after:transition-all after:duration-300 hover:after:w-full">
                            {item.name}
                          </p>
                        </li>
                      </a>
                    ))}
                  </ul>
                </div>
                <div className='md:w-1/2'>
                  <ul>
                    {[
                      {
                        name: "Arbitration & Mediation",
                        id: "/services#arbitration-and-mediation",
                      },
                      {
                        name: "Legal Documentation & Drafting",
                        id: "/services#legal-documentation-and-drafting",
                      },
                      {
                        name: "Trusts, Societies & NGO Legal Support",
                        id: "/services#trusts-Societies-and-ngo-legal-support",
                      },
                      {
                        name: "Corporate & Startup Legal Advisory",
                        id: "/services#corporate-and-startup-legal-advisory",
                      },
                      {
                        name: "Testamentary & Estate Planning",
                        id: "/services#testamentary-and-estate-planning",
                      },
                    ].map((item, idx) => (
                      <a href={item.id} key={idx}>
                        <li className='flex gap-2 items-start mt-4 2xl:mt-6'>
                          <CheckCircle className='min-w-4 mt-1.5 h-4 w-4 ml-2 text-[#ae2c2f] fill-white' />
                          <p className="relative font-semibold text-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#ae2c2f] after:transition-all after:duration-300 hover:after:w-full">
                            {item.name}
                          </p>
                        </li>
                      </a>
                    ))}
                  </ul>
                </div>
              </div> */}

              {/* CTA Button */}
              <Link href='/about-us'>
                <button className='gradient-button text-white px-4 py-2 rounded-xl !ml-0 mt-8 font-semibold '>
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPrivileges;
