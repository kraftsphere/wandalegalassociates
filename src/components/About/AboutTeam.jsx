import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa6";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";
// import LazyLoad from "react-lazyload";

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Subahu Sanghvi",
      role: "Managing Partner",
      img: "/images/about/subahu sanghvi.JPG",
      email: "",
      linkedin:
        "https://www.linkedin.com/in/subahu-sanghvi-aba141185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Saumya Sanghvi",
      role: "Partner (Business Development)",
      img: "/images/about/saumya.jpg",
      email: "",
      linkedin:
        "https://www.linkedin.com/in/saumyasanghvi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Saloni Mehta",
      role: "Insurance Head",
      img: "/images/about/saloni mehta.JPG",
      email: "",
      linkedin:
        "https://www.linkedin.com/in/saloni-sanghvi-8874771a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <section className="bg-white">
      <div className="s_wrapper">
        <div className="text-center md:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-2 lg:mb-4 text-black">
            <SkewFadeInWords text="Meet Our Experts" />
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-[992px] lg:gap-16 mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-[260px]"
            >
              <div className="relative w-full max-h-[260px] md:h-[260px] h-[180px] overflow-hidden rounded-xl shadow-md shadow-gray-400">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
                {member.linkedin && (
                  <a
                    href={`${member.linkedin}`}
                    target="_blank"
                    className="absolute bottom-3 left-3 bg-[#0077b5] p-1 rounded text-white hover:bg-[#0f6bca] transition duration-300"
                  >
                    <FaLinkedinIn className="" />
                  </a>
                )}
              </div>
              <div className="flex flex-col justify-between md:items-start w-full mt-2">
                <div className="flex items-start flex-col">
                  <p className="md:text-base text-sm font-semibold text-black">
                    {member.name}
                  </p>
                  <p className="font-normal md:text-sm text-xs text-[#808080]">
                    {member.role}
                  </p>
                </div>
                <div className="flex gap-2 mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
 