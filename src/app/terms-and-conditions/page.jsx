import TermsAndConditionsMaster from "@/components/termsAndConditions/TermsAndConditionsMaster";
import React from "react";

export const metadata = {
  title: "Terms & Conditions | W and A Legal Associates",

  description:
    "Read the Terms and Conditions of W and A Legal Associates to understand your rights, responsibilities, and the legal terms governing the use of our website and services.",

  openGraph: {
    title: "Terms & Conditions | W and A Legal Associates",
    description:
      "Review the Terms and Conditions governing the use of services provided by W and A Legal Associates.",
    url: "https://www.wandalegalassociates.in/terms-and-conditions",
  },

  alternates: {
    canonical: "https://www.wandalegalassociates.in/terms-and-conditions",
  },

  robots: "index, follow",
};

const page = () => {
  return <TermsAndConditionsMaster />;
};

export default page;
