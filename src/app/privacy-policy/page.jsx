import PrivacyPolicyMaster from "@/components/privacyPolicy/PrivacyPolicyMaster";
import React from "react";

export const metadata = {
  title: "Privacy Policy | W and A Legal Associates",

  description:
    "Read the Privacy Policy of W and A Legal Associates to understand how we collect, use, and protect personal information in accordance with applicable laws and ethical standards.",

  openGraph: {
    title: "Privacy Policy | W and A Legal Associates",
    description:
      "Learn how W and A Legal Associates protects your privacy and handles personal data responsibly.",
    url: "https://www.wandalegalassociates.in/privacy-policy",
  },

  alternates: {
    canonical: "https://www.wandalegalassociates.in/privacy-policy",
  },

  robots: "index, follow",
};

const page = () => {
  return <PrivacyPolicyMaster />;
};

export default page;
