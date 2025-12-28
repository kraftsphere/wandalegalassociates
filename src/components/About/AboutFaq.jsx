"use client";
//
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";

const faqList = [
  {
    question: "What legal services do you provide?",
    answer:
      "We handle a wide range of matters including civil and criminal litigation, corporate law, property disputes, family & matrimonial law, and contract drafting.",
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can call, email, or message us on WhatsApp to book a consultation. We also welcome walk-in visits during business hours.",
  },
  {
    question: "Do you offer legal advice for startups or small businesses?",
    answer:
      "Yes, we specialize in startup advisory, helping with company structuring, contracts, and regulatory compliance.",
  },
  {
    question: "Will my information remain confidential?",
    answer:
      "Absolutely. Client confidentiality is a top priority, and all information shared with us remains strictly private.",
  },
  {
    question: "Do you take urgent or last-minute cases?",
    answer:
      "Yes, subject to availability, we handle urgent legal matters and can assist with time-sensitive filings.",
  },
  {
    question: "How much do you charge for legal consultations?",
    answer:
      "Consultation fees vary based on the nature of the case, but we ensure our pricing is transparent and reasonable.",
  },
];

const AboutFaq = () => {
  const [openIndex, setOpenIndex] = useState(``);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      {/* <Faq  items={faqList}/> */}
      <section className='w-full bg-white text-black '>
        <div className='s_wrapper'>
          <div className='text-center mb-8'>
            <h2 className='sr-only'>Frequently Asked Questions</h2>
            <div className='mb-4 text-2xl md:text-4xl mx-auto text-center font-medium text-[#040404]'>
              <SkewFadeInWords text='Frequently Asked Questions' />
            </div>
            {/* <p className="text-gray-600">
              Have doubts? We're here to help. Explore common questions below or
              reach out to us directly.
            </p> */}
          </div>
          <div className='mx-auto flex flex-col md:flex-row md:gap-12'>
            <div className='space-y-6 text-left md:basis-[50%]'>
              {faqList
                .slice(0, Math.ceil(faqList.length / 2))
                .map((faq, index) => (
                  <div
                    key={index}
                    className={`border-b pb-4 border-gray-300 ${
                      index === 0 ? "border-t pt-4" : "border-b"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className='w-full text-left text-lg font-medium cursor-pointer flex justify-between items-center'
                    >
                      {faq.question}
                      <span className='ml-4 text-xl'>
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          key='content'
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <p className='mt-3 text-gray-600  text-justify md:text-start'>
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
            </div>
            {/* Right Side */}
            <div className='space-y-6 text-left md:basis-[50%]'>
              {faqList
                .slice(Math.ceil(faqList.length / 2))
                .map((faq, index) => {
                  const actualIndex = index + Math.ceil(faqList.length / 2);
                  return (
                    <div
                      key={index}
                      className={`border-b pb-4 border-gray-300 ${
                        index === 0 ? "md:border-t pt-4" : "border-b"
                      }`}
                    >
                      <button
                        onClick={() => toggleFAQ(actualIndex)}
                        className='w-full text-left text-lg font-medium cursor-pointer flex justify-between items-center'
                      >
                        {faq.question}
                        <span className='ml-4 text-xl'>
                          {openIndex === actualIndex ? "−" : "+"}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {openIndex === actualIndex && (
                          <motion.div
                            key='content'
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ overflow: "hidden" }}
                          >
                            <p className='mt-3 text-gray-600  text-justify md:text-start'>
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFaq;
