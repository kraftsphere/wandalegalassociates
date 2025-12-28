import ContactMaster from "@/components/contact/ContactMaster";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Contact W and A Legal Associates | Legal Consultation in Mumbai",

  description:
    "Contact W and A Legal Associates for trusted legal consultation and professional legal guidance in Mumbai, Thane, and Navi Mumbai.",

  openGraph: {
    title: "Contact W and A Legal Associates",
    description:
      "Get in touch with W and A Legal Associates for ethical, practical, and result-oriented legal advice.",
    url: "https://www.wandalegalassociates.in/contact",
  },

  alternates: {
    canonical: "https://www.wandalegalassociates.in/contact",
  },
};

const ContactPage = () => {
  return (
    <>
      <ContactMaster />

      {/* Contact Page Structured Data */}
      <Script
        id='wa-contact-schema'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LawFirm",
            name: "W and A Legal Associates",
            url: "https://www.wandalegalassociates.in",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Legal Consultation",
              areaServed: "IN",
              availableLanguage: ["English"],
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressCountry: "IN",
            },
          }),
        }}
      />
    </>
  );
};

export default ContactPage;
