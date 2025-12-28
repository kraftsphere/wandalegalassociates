import React from "react";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";
import Image from "next/image";
import Link from "next/link";

const HomeCalculator = () => {
  const calculatorTypes = [
    {
      title: "SIP Calculator",
      icon: "/images/home/calculator2.png",
      gradient: "from-[#e70b00] to-[#e73900]/50",
      link: "/calculator/sip-calculator",
    },
    {
      title: "Retirement Calculator",
      icon: "/images/home/retirement2.png",
      gradient: "from-[#e70b00] to-[#e73900]/50",
      link: "/calculator/retirement-calculator",
    },
    {
      title: "EMI Calculator",
      icon: "/images/home/accounting2.png",
      gradient: "from-[#e73900]/50 to-[#e70b00]",
      link: "/calculator/emi-calculator",
    },
  ];

  return (
    <section className="bg-[#F9F3F1] overflow-hidden">
      <div className="s_wrapper relative ">
        <div className="absolute -bottom-4 lg:-right-40 -right-3">
          <img src="/images/calculator-svgrepo-com.svg" alt="Check Calculators" className="opacity-10 w-40 -rotate-45" />
        </div>
        <h2 className="mb-4 text-2xl md:text-4xl lg:text-5xl font-medium text-center lg:mb-8 text-[#040404]">
          <SkewFadeInWords text="Check Calculators" />
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center ">
          {calculatorTypes.map((el, index) => (
            <div
              className={`relative flex-1 min-w-[260px] bg-white  flex-col  rounded-2xl text-[#040404] transition-all duration-300 border border-gray-300 cmn-shadow cursor-pointer `}
              key={index}
            >
              <div className="text-3xl flex flex-row gap-6 items-center p-5">
                {/* <Image
                  src={el.icon}
                  height={100}
                  width={100}
                  alt="Fee"
                  className={`${
                    index === 0 || index === 2 ? "bg-[#e73900]" : "bg-[#e70b00]"
                  } mx-auto p-5 rounded-[20px]`} 
                /> */}
                <Image
                  src={el.icon}
                  height={80}
                  width={80}
                  alt="Fee"
                  className={` mx-auto p-1`}
                />
                <div
                  className={`w-full text-start flex flex-col items-start text-[#040404]`}
                >
                  <p className="text-lg font-semibold">{el.title}</p>
                  <Link href={el.link}>
                    <button className="gradient-button text-[#ffffff] px-3 py-1.5 !mt-4 rounded-xl font-medium text-base hover:shadow-2xl">
                      Calculate Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex flex-wrap gap-6 justify-center">
          {calculatorTypes.map((el, index) => (
              <div
                className={`relative flex-1 min-w-[260px] bg-white  flex-col  rounded-2xl text-[#040404] transition-all duration-300 border border-gray-300 cmn-shadow cursor-pointer `}
                key={index}
              >
                <div className="text-3xl flex flex-col gap-6 items-start pt-5  ">
                  <Image
                    src={el.icon}
                    height={100}
                    width={100}
                    alt="Fee"
                    className={`${
                      index === 0 || index === 2
                        ? "bg-[#e73900]"
                        : "bg-[#e70b00]"
                    } mx-auto p-5 rounded-[20px]`}
                  />
                  <div
                    className={`w-full text-center rounded-bl-[20px] rounded-br-[20px] pb-5 h-full pt-4 text-[#040404]`}
                  >
                    <p className="text-2xl font-semibold">{el.title}</p>
                  <Link href={el.link}>
                    <button className="gradient-button text-[#ffffff] px-3 py-1.5 !mt-4 rounded-xl mx-auto font-medium text-base hover:shadow-2xl">
                      Calculate Now
                    </button>
                  </Link>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <BadgeCheck className="w-5 h-5 text-white/70" />
                </div>
              </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default HomeCalculator;
// import React from "react";
// import SkewFadeInWords from "../ui/animation/SkewFadeInWords";
// import Image from "next/image";
// import Link from "next/link";
// 
// const HomeCalculator = () => {
//   const calculatorTypes = [
//     {
//       title: "SIP Calculator",
//       icon: "/images/home/calculator2.png",
//       gradient: "from-[#e70b00] to-[#e73900]/50",
//       link: "/calculator/sip-calculator",
//     },
//     {
//       title: "Retirement Calculator",
//       icon: "/images/home/retirement2.png",
//       gradient: "from-[#e70b00] to-[#e73900]/50",
//       link: "/calculator/retirement-calculator",
//     },
//     {
//       title: "EMI Calculator",
//       icon: "/images/home/accounting2.png",
//       gradient: "from-[#e73900]/50 to-[#e70b00]",
//       link: "/calculator/emi-calculator",
//     },
//   ];

//   // Filter out SIP Calculator
//   const filteredCalculators = calculatorTypes.filter(
//     (calc) => calc.title !== "SIP Calculator"
//   );

//   return (
//     <section className="bg-[#F9F3F1] overflow-hidden">
//       <div className="s_wrapper relative ">
//         <div className="absolute -bottom-4 lg:-right-40 -right-3">
//           <img
//             src="/images/calculator-svgrepo-com.svg"
//             alt="Check Calculators"
//             className="opacity-10 w-40 -rotate-45"
//           />
//         </div>
//         <h2 className="mb-4 text-2xl md:text-4xl lg:text-5xl font-medium text-center lg:mb-8 text-[#040404]">
//           <SkewFadeInWords text="Check Calculators" />
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
//           {filteredCalculators.map((el, index) => (
//             <div
//               className="bg-white rounded-2xl border border-gray-300 cmn-shadow cursor-pointer flex flex-col text-[#040404] transition-all duration-300 p-5"
//               key={index}
//             >
//               <div className="flex flex-row gap-6 items-center">
//                 <Image
//                   src={el.icon}
//                   height={80}
//                   width={80}
//                   alt={el.title}
//                   className="mx-auto p-1"
//                 />
//                 <div className="w-full text-start flex flex-col items-start">
//                   <p className="text-lg font-semibold">{el.title}</p>
//                   <Link href={el.link}>
//                     <button className="gradient-button text-white px-3 py-1.5 mt-4 rounded-xl font-medium text-base hover:shadow-2xl">
//                       Calculate Now
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeCalculator;
