import AboutMaster from "@/components/About/AboutMaster";
import Script from "next/script";
import React from "react";

export const metadata = {
  title:
    "About W and A Legal Associates | Founded by Adv. Waseem Ahmed Siddiqui",

  description:
    "Learn about W and A Legal Associates, a Mumbai-based full-service law firm founded by Advocate Waseem Ahmed Siddiqui in 1997, with leadership from Adv. Asim Waseem Siddiqui and a strong client-focused legal practice.",

  openGraph: {
    title: "About W and A Legal Associates | Advocate Waseem Ahmed Siddiqui",
    description:
      "Founded in 1997 by Adv. Waseem Ahmed Siddiqui, W and A Legal Associates delivers ethical and result-oriented legal solutions with modern legal leadership.",
    url: "https://www.wandalegalassociates.in/about-us",
  },
};

const page = () => {
  return (
    <>
      <AboutMaster />
      <Script
        id='w-and-a-legal-schema'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LawFirm",
            name: "W and A Legal Associates",
            url: "https://www.wandalegalassociates.in",
            founder: {
              "@type": "Person",
              name: "Advocate Waseem Ahmed Siddiqui",
              jobTitle: "Founder & Principal Advocate",
            },
            employee: [
              {
                "@type": "Person",
                name: "Advocate Asim Waseem Siddiqui",
                jobTitle: "Partner & Advocate",
              },
              {
                "@type": "Person",
                name: "Mohammed Anas Rahil Qamar Siddiqui",
                jobTitle: "Operations & Client Relations Head",
              },
            ],
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

export default page;
