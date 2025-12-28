import Link from "next/link";
import React from "react";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";

const services = [
  {
    id: 1,
    title: "Winshine App Integration",
    description: "Access all financial tools and insights in one seamless app.",
    image:
      "https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Winshine app interface",
  },
  {
    id: 2,
    title: "1 to 1 with Experts",
    description:
      "Get personalized advice from seasoned financial professionals.",
    image:
      "https://images.pexels.com/photos/6829536/pexels-photo-6829536.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Expert financial consultation",
  },
  {
    id: 3,
    title: "Trading at Fingertips",
    description: "Experience fast, intuitive, and secure online trading.",
    image:
      "https://images.pexels.com/photos/5715852/pexels-photo-5715852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Digital trading dashboard",
  },
  {
    id: 4,
    title: "Real-Time Trading Calls",
    description: "Receive timely, expert-backed trading recommendations.",
    image:
      "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Live trading updates on mobile",
  },
  {
    id: 5,
    title: "Margin Trading Facility",
    description: "Leverage your capital to enhance trading potential.",
    image:
      "https://images.pexels.com/photos/6802048/pexels-photo-6802048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Graph showing margin trading growth",
  },
  {
    id: 6,
    title: "Financial Literacy Programs",
    description: "Learn key financial concepts through expert-led sessions.",
    image:
      "https://images.pexels.com/photos/15096572/pexels-photo-15096572/free-photo-of-brainstorming-during-presentation.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Workshop on financial education",
  },
  {
    id: 7,
    title: "Value Added Services",
    description: "Enjoy exclusive add-ons that enrich your investment journey.",
    image:
      "https://images.pexels.com/photos/6476579/pexels-photo-6476579.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Premium financial services",
  },
  {
    id: 8,
    title: "Complete Investment Universe",
    description: "Diversify with access to a wide range of investment options.",
    image:
      "https://images.pexels.com/photos/5715854/pexels-photo-5715854.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Global investment portfolio",
  },
];

const ServiceCard = ({ title, description, image, alt }) => {
  return (
    <div
      id="service"
      className="group relative overflow-hidden h-64 md:h-72 rounded-lg shadow-lg"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
        aria-label={alt}
      />

      <div className="absolute flex items-center justify-end inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

      <div className="absolute inset-0 p-6 flex-col  text-white flex justify-end items-start bg-gradient-to-t from-black/90 via-black/50 to-black/10 opacity-70" >
        <div>
          <h3 className="text-lg md:text-xl 2xl:text-xl font-medium mb-2">
            {title}
          </h3>
          {/* <p className="text-sm lg:text-lg text-gray-300 mb-4">{description}</p> */}
        </div>

        {/* <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
          <button className="bg-transparent cursor-pointer border border-white text-white text-sm px-4 py-2 hover:bg-white hover:text-black transition-colors">
            ENQUIRE NOW
          </button>
        </div>  */}
      </div>
    </div>
  );
};

function ClientPrivileges2() {
  return (
    <div className="bg-white">
      <div className="s_wrapper ">
        {/* Centered Header Section */}
        <div className="text-center mb-12">
          <h2 className="mb-4 text-2xl md:text-4xl lg:text-5xl font-medium lg:mb-4 text-[#040404]">
            <SkewFadeInWords text="Exclusive Client Privileges" />
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Tailored benefits and exclusive offers to enhance your finances
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              alt={service.alt}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="gradient-button text-[#ffffff] px-4 py-2 rounded-xl font-semibold "
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ClientPrivileges2;
