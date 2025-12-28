import Image from "next/image";
import React from "react";
import SkewFadeInWords from "@/components/ui/animation/SkewFadeInWords";

const ServiceCard = ({
  id,
  title,
  description,
  subServices,
  image,
  imageRightSide = false,
}) => {
  return (
    <section
      id={id}
      className={`${imageRightSide ? "bg-[#fff7f8]" : "bg-white"} py-12`}
    >
      <div className='s_wrapper'>
        <div
          className={`flex flex-col gap-8 ${
            imageRightSide ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Image */}
          <div className='w-full md:w-[40%]'>
            <Image
              src={image}
              alt={title}
              width={450}
              height={450}
              className='rounded-md w-full h-auto object-cover'
            />
          </div>

          {/* Content */}
          <div className='w-full md:w-[60%] flex flex-col justify-center'>
            <h2 className='sr-only'>{title}</h2>
            <div className='text-2xl md:text-4xl font-medium mb-4 text-[#040404]'>
              <SkewFadeInWords text={title} />
            </div>

            <p className='text-[#333] mb-4'>{description}</p>

            {/* Sub Services */}
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#333]'>
              {subServices.map((item, index) => (
                <li key={index} className='flex gap-2 items-start'>
                  <span className='mt-[6px] h-1.5 w-1.5 bg-[#b53d53] rounded-full'></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
