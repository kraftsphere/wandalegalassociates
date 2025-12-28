import ServiceMaster from "@/components/service/ServiceMaster";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Legal Services | W and A Legal Associates, Mumbai",

  description:
    "W and A Legal Associates offers comprehensive legal services including civil and commercial disputes, criminal defense, property and real estate matters, family law, corporate advisory, arbitration, and regulatory matters in Mumbai.",

  openGraph: {
    title: "Legal Services | W and A Legal Associates, Mumbai",
    description:
      "Explore the full range of legal services provided by W and A Legal Associates, a trusted full-service law firm in Mumbai.",
    url: "https://www.wandalegalassociates.in/services",
  },
};

const page = () => {
  return (
    <>
      <ServiceMaster />

      {/* Services Structured Data */}
      <Script
        id='wa-services-schema'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LawFirm",
            name: "W and A Legal Associates",
            url: "https://www.wandalegalassociates.in/services",
            areaServed: {
              "@type": "AdministrativeArea",
              name: "India",
            },
            serviceOffered: [
              {
                "@type": "Service",
                name: "Civil, Commercial & Property Disputes",
              },
              {
                "@type": "Service",
                name: "Real Estate, Redevelopment & Conveyance Matters",
              },
              {
                "@type": "Service",
                name: "Property Consultation, Title Due Diligence & Registration",
              },
              {
                "@type": "Service",
                name: "Stamp Duty, Valuation & Registration Matters",
              },
              { "@type": "Service", name: "Legal Documentation & Drafting" },
              {
                "@type": "Service",
                name: "Criminal Law, Defense & White-Collar Crimes",
              },
              { "@type": "Service", name: "Cyber Crime & Digital Offences" },
              {
                "@type": "Service",
                name: "Family, Matrimonial & Personal Laws",
              },
              {
                "@type": "Service",
                name: "Muslim Personal Law, Inheritance & Succession Matters",
              },
              { "@type": "Service", name: "Testamentary & Estate Planning" },
              {
                "@type": "Service",
                name: "Trusts, Societies, Wakf & Religious Institution Matters",
              },
              {
                "@type": "Service",
                name: "Corporate, Startup & Business Legal Advisory",
              },
              {
                "@type": "Service",
                name: "Arbitration, Mediation & Alternative Dispute Resolution",
              },
              {
                "@type": "Service",
                name: "Consumer Protection & Recovery Matters",
              },
              {
                "@type": "Service",
                name: "Government, Revenue & Local Authority Matters",
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
