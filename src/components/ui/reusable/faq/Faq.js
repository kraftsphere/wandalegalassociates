"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SkewFadeInWords from "../../animation/SkewFadeInWords";

const Faq = ({
  title = "Frequently Asked Questions",
  description = "Have doubts? We're here to help. Explore common questions below or reach out to us directly.",
  items = [],
  showViewMore = true,
  viewMoreLink = "/faqs",
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-black ">
      <div className="s_wrapper">
        <div className="mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:basis-[50%]">
            <div className="md:w-3/4">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium lg:mb-4">
                <SkewFadeInWords text={title} />
              </h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>

          <div className="space-y-6 text-left md:basis-[50%]">
            {items.map((faq, index) => (
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

            {showViewMore && (
              <div className="mt-12">
                <a
                  href={viewMoreLink}
                  className="gradient-button px-4 font-semibold py-2 rounded-xl text-white w-max !ml-0"
                >
                  View More
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
