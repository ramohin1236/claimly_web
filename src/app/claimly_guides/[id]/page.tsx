import PageHero from "@/components/shared/PageHero";
import arrwoleft from "../../../../public/arrowleft.svg";
import Image from "next/image";
import Understand from "@/components/Home/Understand";
const ClaimlyDetails = () => {
  return (
    <div>
      {" "}
      {/* Hero */}
      <PageHero />
      <div className="container mx-auto px-6">
        <div className="py-10 md:py-28 ">
          {/* top title */}
          <div className="flex py-1.5 px-4 gap-2.5 items-center border border-[#2563EB] bg-[#2563EB0D] rounded-full w-fit mb-2 md:mb-6 ">
            <div className="w-4 ">
              <Image src={arrwoleft} height={100} width={100} alt="arrowleft" />
            </div>
            <p className="tracking-[1px] leading-[120%] text-[#2563EB]">
              Claimly Guides
            </p>
          </div>

           <div className="flex flex-col gap-3.5">
               <h2 className="text-2xl font-bold md:text-3xl leading-[1.5]">non-disclosure” means in insurance claims</h2>
                <p className="default-text leading-normal!">
                Non-disclosure refers to situations where an insurer believes relevant information was not disclosed when the policy was taken out or renewed. This can include prior damage, previous claims, or other details considered material to underwriting the policy. Insurers assess whether the information was required to be disclosed and how it may have affected the policy terms or premium. This guide explains how non-disclosure is generally assessed, why it is a common point of dispute, and how insurers typically approach these cases.
              </p>
           </div>


            <div>
                 <Understand/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimlyDetails;
