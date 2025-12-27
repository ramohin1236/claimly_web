import React from "react";
import Image from "next/image";
import easyImage from "../../../public/easy_claim.svg";
import secure from "../../../public/secure.svg";
import claim_report from "../../../public/claim_report.svg";
import specialist from "../../../public/specialist.svg";
import practical from "../../../public/practical.svg";
import informational from "../../../public/informational.svg";

const benefitsData = [
  {
    img: easyImage,
    alt: "Easy Claim",
    title: "Easy Claim Submission",
    description:
      "Complete a short, guided form and upload your claim documents in one place - including your PDS, Certificate of Insurance, emails, letters, and photos.",
  },
  {
    img: secure,
    alt: "Secure",
    title: "Secure Document Uploads",
    description:
      "Your documents are uploaded securely and used only to generate your claim report.",
  },
  {
    img: claim_report,
    alt: "Claim Report",
    title: "Claim Report",
    description:
      "We analyse your information, use our expertise and produces a plain-English PDF explaining how your claim may be viewed and what details typically matter most.",
  },
  {
    img: specialist,
    alt: "Specialist",
    title: "by an insurance specialist",
    description:
      "While Claimly is in beta, every report is reviewed and signed off by an insurance specialist.",
  },
  {
    img: practical,
    alt: "Practical Guidance",
    title: "Clear, Practical Guidance",
    description:
      "Your report highlights common issues, relevant considerations, and information that may strengthen your position.",
  },
  {
    img: informational,
    alt: "Informational",
    title: "Independent & Informational",
    description:
      "Claimly is independent of insurers. We provide general information only to help you understand your situation.",
  },
];

const KeyBenefits = () => {
  return (
    <div className="lg:gap-16 py-10 lg:py-28 flex flex-col gap-14">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl lg:text-[40px] leading-[120%] font-semibold">
          Key Benefits of Using <span className="text-brand"> Claimly</span>
        </h2>
        <p className="tracking-[1px] leading-[120%] text-color-secondary">
          Clear, independent guidance to help you understand your insurance
          claim.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefitsData.map((item, index) => (
          <div key={index} className="border-color-default p-8 bg-white">
            <Image
              src={item.img}
              alt={item.alt}
              width={40}
              height={40}
              className="mb-2.5"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-color-secondary text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyBenefits;
