"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SkewFadeInWords from "@/components/ui/animation/SkewFadeInWords";
import Image from "next/image";

const faqList = [
  {
    question: "What are your Business hours?",
    answer: "Monday to Friday 9am-6pm | Saturday 11am-3pm",
  },
  {
    question: "Can you advise on retirement planning and pensions?",
    answer:
      "Yes. To get started, try our free tool or get in touch with us via whatsapp.",
  },
  {
    question: "Which asset class provides the highest returns?",
    answer:
      "Historically, Equity returns have beaten all other traditional asset classes averaging 17.2% compounded annually in the past 20 years. To put things in perspective, using the rule of 72, equity investments have doubled investment value I every 4 years and 2 months.",
  },
  {
    question: "What makes your firm unique in the industry?",
    answer:
      "Click here to learn why you are better off with Winshine Financial Services as your trusted partner.",
  },
];

const HomeFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="w-full bg-white text-black ">
        <div className="s_wrapper">
          <div className="mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:basis-[50%] overflow-hidden rounded-r-4xl md:max-h-[300px]">
              <div className="w-full max-h-full  overflow-hidden my-auto relative">
                <Image
                  src="https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="FAQ"
                  width={400}
                  height={400}
                  className="w-full h-full"
                />
                <div className="!absolute w-full h-full bg-black/20 z-[20] flex justify-center items-center top-0 left-0">
                  <h3 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl">FAQ'S</h3>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-left md:basis-[50%] md:pt-4">
              {faqList.map((faq, index) => (
                <div
                  key={index}
                  className={`border-b pb-4 border-gray-300 ${
                    index === 0 ? "border-t pt-4" : "border-b"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left text-lg font-medium cursor-pointer flex justify-between items-center"
                  >
                    {faq.question}
                    <span className="ml-4 text-xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="mt-3 text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeFaq;
