import React from "react";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";

const PrivacyPolicyMaster = () => {
  return (
    <div className='res-extra-pdg w-[90%] max-w-[786px] privacy-policy mx-auto'>
      <div className='heading pt-[60px] border-b border-b-gray-300 text-center md:pb-10 pb-6'>
        <h1 className='sr-only'>Privacy Policy</h1>
        <div className='mb-2 text-2xl md:text-4xl lg:text-5xl font-medium text-[#040404]'>
          <SkewFadeInWords text='Privacy Policy' />
        </div>
      </div>

      <div className='pt-8 pb-10 md:pb-40'>
        <div>
          <p className='text-[#040404] leading-[1.5]'>
            Last updated: December 28, 2025
          </p>
        </div>

        <div>
          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6 text-[#040404]'>
              Introduction
            </h3>
            <p className='text-[#040404] leading-[1.5]'>
              This Privacy Policy explains how W and A Legal Associates (“we,”
              “our,” or “us”) collects, uses, discloses, and protects your
              personal information when you visit our website or use our legal
              services.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6 text-[#040404]'>
              Information We Collect
            </h3>
            <p className='text-[#040404] leading-[1.5]'>
              We may collect personal information that you voluntarily provide
              to us, including your name, email address, contact details,
              case-related information, and any documents you submit through our
              website or during legal consultations.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6 text-[#040404]'>
              How We Use Your Information
            </h3>
            <p className='text-[#040404] leading-[1.5]'>
              We use your information to provide legal advice and services,
              communicate with you, respond to inquiries, and comply with our
              legal and regulatory obligations. We may also use data for
              administrative purposes and internal analytics.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6 text-[#040404]'>
              Confidentiality and Security
            </h3>
            <p className='text-[#040404] leading-[1.5]'>
              Client confidentiality is fundamental to our legal practice. We
              implement appropriate technical and organizational measures to
              protect your personal data from unauthorized access, disclosure,
              alteration, or destruction.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6 text-[#040404]'>
              Disclosure to Third Parties
            </h3>
            <p className='text-[#040404] leading-[1.5]'>
              We do not share your personal data with third parties except when
              legally required or when necessary to provide legal services
              (e.g., filings with courts or regulatory authorities). Any such
              disclosures are subject to professional confidentiality
              obligations.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6 text-[#040404]'>
              Data Retention
            </h3>
            <p className='text-[#040404] leading-[1.5]'>
              We retain your personal data only for as long as necessary to
              fulfill the purpose for which it was collected or as required by
              law. Once no longer needed, your data is securely archived or
              deleted in accordance with our data retention policy.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6 text-[#040404]'>
              Your Rights
            </h3>
            <p className='text-[#040404] leading-[1.5]'>
              You have the right to access, correct, or request the deletion of
              your personal information. You may also object to or restrict
              certain processing activities. To exercise any of your rights,
              please contact us at the address below.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6 text-[#040404]'>
              Children's Privacy
            </h3>
            <p className='text-[#040404] leading-[1.5]'>
              Our website and services are not intended for individuals under
              the age of 18. We do not knowingly collect personal information
              from children without verified parental consent.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6 text-[#040404]'>
              Updates to This Policy
            </h3>
            <p className='text-[#040404] leading-[1.5]'>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date.
              Continued use of our services after such updates constitutes your
              consent to the revised policy.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6 text-[#040404]'>
              Contact Information
            </h3>
            <p className='text-[#040404] leading-[1.5]'>
              If you have any questions regarding this Privacy Policy, you may
              contact us at:{" "}
              <a
                className='text-[#a91e22] hover:underline'
                href='mailto:wandalegalassociates@gmail.com'
              >
                wandalegalassociates@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyMaster;
