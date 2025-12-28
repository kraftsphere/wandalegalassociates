import React from "react";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";

const TermsAndConditionsMaster = () => {
  return (
    <div className='res-extra-pdg w-[90%] max-w-[786px] privacy-policy mx-auto'>
      <div className='heading pt-[60px] border-b border-b-gray-300 text-center md:pb-10 pb-6'>
        <h1 className='sr-only'>Terms and Conditions</h1>
        <div className='mb-2 text-2xl md:text-4xl lg:text-5xl font-medium text-[#040404]'>
          <SkewFadeInWords text='Terms and Conditions' />
        </div>
      </div>

      <div className='pt-8 pb-10 md:pb-40'>
        <div>
          <p className='text-[#040404] leading-[1.5]'>
            Last updated: December 28, 2025
          </p>
        </div>

        <div className='text-[#040404]'>
          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6'>
              Introduction
            </h3>
            <p className='leading-[1.5]'>
              Welcome to{" "}
              <a
                className='text-[#a91e22] hover:underline'
                href='https://www.wandalegalassociates.in'
              >
                https://www.wandalegalassociates.in
              </a>
              , the official website of W and A Legal Associates. By accessing
              or using this site and our services, you agree to be legally bound
              by the terms and conditions outlined below. These terms apply to
              all users, clients, and visitors of the site.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6'>
              Legal Disclaimer
            </h3>
            <p className='leading-[1.5]'>
              The information provided on{" "}
              <a
                className='text-[#a91e22] hover:underline'
                href='https://www.wandalegalassociates.in'
              >
                https://www.wandalegalassociates.in
              </a>{" "}
              is for general informational purposes only and does not constitute
              legal advice. Use of this site or communication with W and A Legal
              Associates through this platform does not establish an
              attorney-client relationship. For specific legal issues, please
              consult directly with a qualified legal professional from our
              firm.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6'>
              Limitation of Liability
            </h3>
            <p className='leading-[1.5]'>
              W and A Legal Associates shall not be held liable for any loss,
              damage, or inconvenience arising from reliance on content
              published on this website. We do not guarantee the accuracy,
              completeness, or timeliness of any information presented herein.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6'>
              Third-Party Content & External Links
            </h3>
            <p className='leading-[1.5]'>
              Our website may contain links to third-party websites for
              reference and convenience. We do not control or endorse the
              content or practices of any external site, and we are not
              responsible for any content or damage arising from your use of
              such third-party websites.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6'>
              Client Confidentiality
            </h3>
            <p className='leading-[1.5]'>
              All client data and legal matters handled by W and A Legal
              Associates are treated with strict confidentiality in accordance
              with legal ethics and bar council regulations. Information shared
              through this website will not be disclosed or sold to third
              parties without consent, except as required by law.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6'>
              No Legal Advice Policy
            </h3>
            <p className='leading-[1.5]'>
              The content on this website is provided for general understanding
              and should not be construed as legal advice or opinion on any
              matter. Visitors should not act upon any information without
              seeking specific professional counsel.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6'>
              Service Scope
            </h3>
            <p className='leading-[1.5]'>
              W and A Legal Associates offers legal services in civil disputes,
              property law, arbitration, family and divorce law, criminal
              matters, and legal documentation. We do not offer services in
              insurance, stock trading, or financial investment advisory.
            </p>
          </div>

          <div>
            <h3 className='font-light text-[22.4px] md:text-[25.6px] mt-6'>
              Governing Law & Jurisdiction
            </h3>
            <p className='leading-[1.5]'>
              These terms shall be governed by and interpreted in accordance
              with the laws of India. All disputes arising out of the use of
              this website or services offered shall be subject to the exclusive
              jurisdiction of the courts located in Mumbai, Maharashtra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsMaster;
