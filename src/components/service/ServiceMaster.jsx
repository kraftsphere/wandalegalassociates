import React from "react";
import Banner from "../ui/reusable/banner/Banner";
import ServiceCard from "./ServiceCard/ServiceCard";

export const legalServices = [
  {
    id: "civil-commercial-property-disputes",
    title: "Civil, Commercial & Property Disputes",
    description:
      "Comprehensive legal representation in civil, commercial, and property-related disputes with a strategic and result-oriented approach.",
    subServices: [
      "Title disputes",
      "Injunction matters",
      "Recovery proceedings",
      "Builder–buyer disputes",
      "Summary suits",
      "Commercial litigation",
    ],
    image: "/images/wservices/civilcommercial.avif",
  },

  {
    id: "real-estate-redevelopment-conveyance",
    title: "Real Estate, Redevelopment & Conveyance Matters",
    description:
      "End-to-end legal support for real estate transactions, redevelopment projects, and housing society-related matters.",
    subServices: [
      "Redevelopment projects",
      "Deemed conveyance",
      "MHADA matters",
      "SRA matters",
      "Cooperative housing society issues",
    ],
    image: "/images/wservices/realestateconveyance.jpg",
  },

  {
    id: "property-consultation-due-diligence",
    title: "Property Consultation, Title Due Diligence & Registration",
    description:
      "Legal advisory services ensuring secure property transactions through thorough due diligence and compliance.",
    subServices: [
      "Title search",
      "Property verification",
      "Sale and purchase advisory",
      "Registration assistance",
    ],
    image: "/images/wservices/propertyconsultationtitledue.jpeg",
  },

  {
    id: "stamp-duty-valuation-registration",
    title: "Stamp Duty, Valuation & Registration Matters",
    description:
      "Expert guidance on stamp duty, valuation disputes, and statutory registration requirements.",
    subServices: [
      "Stamp duty adjudication",
      "Deficit stamp duty cases",
      "Valuation disputes",
      "Registration compliance",
    ],
    image: "/images/wservices/stampduty.jpg",
  },

  {
    id: "legal-documentation-drafting",
    title: "Legal Documentation & Drafting",
    description:
      "Precise drafting and review of legal documents to safeguard rights and prevent future disputes.",
    subServices: [
      "Agreements and contracts",
      "Deeds",
      "MOUs",
      "Affidavits",
      "Power of Attorney",
    ],
    image: "/images/wservices/legaldocumentation.avif",
  },

  {
    id: "criminal-law-white-collar",
    title: "Criminal Law, Defense & White-Collar Crimes",
    description:
      "Strong and strategic legal defense in criminal and economic offence matters.",
    subServices: [
      "Bail applications",
      "Criminal trials",
      "FIR matters",
      "Quashing proceedings",
      "Economic and white-collar offences",
    ],
    image: "/images/wservices/criminallaw.avif",
  },

  {
    id: "cyber-crime-digital-offences",
    title: "Cyber Crime & Digital Offences",
    description:
      "Legal assistance in cyber-related crimes involving digital fraud and online misconduct.",
    subServices: [
      "Online fraud cases",
      "Cyber crime complaints",
      "Digital evidence matters",
    ],
    image: "/images/wservices/cyber.jpg",
  },

  {
    id: "family-matrimonial-laws",
    title: "Family, Matrimonial & Personal Laws",
    description:
      "Sensitive and effective handling of family and matrimonial disputes with confidentiality and care.",
    subServices: [
      "Divorce proceedings",
      "Maintenance matters",
      "Domestic violence cases",
      "Child custody matters",
    ],
    image: "/images/wservices/familymatrimonial.avif",
  },

  {
    id: "muslim-personal-law",
    title: "Muslim Personal Law, Inheritance & Succession Matters",
    description:
      "Specialized legal advisory and representation under Muslim personal law.",
    subServices: [
      "Heirship matters",
      "Succession certificates",
      "Inheritance disputes",
    ],
    image: "/images/wservices/muslimlaw.jpg",
  },

  {
    id: "testamentary-estate-planning",
    title: "Testamentary & Estate Planning",
    description:
      "Legal planning services to protect assets and ensure smooth succession.",
    subServices: [
      "Drafting of wills",
      "Probate proceedings",
      "Letters of administration",
      "Trust formation",
    ],
    image: "/images/wservices/testamentaryestateplanning.jpeg",
  },

  {
    id: "trusts-societies-wakf",
    title: "Trusts, Societies, Wakf & Religious Institution Matters",
    description:
      "Legal support for charitable, religious, and non-profit institutions.",
    subServices: [
      "Wakf Board matters",
      "Wakf Tribunal proceedings",
      "Charity Commissioner matters",
      "NGO compliance",
    ],
    image: "/images/wservices/trustssocietieswakf.avif",
  },

  {
    id: "corporate-startup-advisory",
    title: "Corporate, Startup & Business Legal Advisory",
    description:
      "End-to-end legal advisory services for startups and established businesses.",
    subServices: [
      "Company formation",
      "Contract drafting and review",
      "Regulatory compliance",
      "Business disputes",
    ],
    image: "/images/wservices/legaladvise.jpg",
  },

  {
    id: "arbitration-mediation-adr",
    title: "Arbitration, Mediation & Alternative Dispute Resolution",
    description:
      "Efficient dispute resolution through arbitration and mediation mechanisms.",
    subServices: [
      "Pre-litigation settlements",
      "Arbitration proceedings",
      "Mediation services",
    ],
    image: "/images/wservices/arbitration.jpg",
  },

  {
    id: "consumer-protection-recovery",
    title: "Consumer Protection & Recovery Matters",
    description:
      "Representation in consumer disputes and financial recovery proceedings.",
    subServices: [
      "Consumer complaints",
      "Cheque bounce cases",
      "Recovery proceedings",
    ],
    image: "/images/wservices/consumerlaw.jpg",
  },

  {
    id: "government-revenue-authorities",
    title: "Government, Revenue & Local Authority Matters",
    description:
      "Legal assistance in matters involving government departments and local authorities.",
    subServices: [
      "BMC matters",
      "Collector office matters",
      "Mutation entries",
      "Property card issues",
      "RTI matters",
    ],
    image: "/images/wservices/governmentrevenueauthorities.jpeg",
  },
];

const LegalServiceMaster = () => {
  return (
    <div>
      <Banner
        title='Comprehensive Legal Services'
        imageUrl='https://images.unsplash.com/photo-1520796387691-908042da287d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        subtitle='Providing Expert Legal Solutions Tailored to Your Unique Needs'
      />

      {legalServices.map((service, index) => (
        <ServiceCard
          key={service.id}
          {...service}
          imageRightSide={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default LegalServiceMaster;
