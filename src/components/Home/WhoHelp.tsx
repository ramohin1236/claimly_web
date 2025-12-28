import React from "react";
import leftSideImage from "../../../public/leftside_image.svg";
import Image from "next/image";
import { InfoIcon, ListIcon } from "../icons-svg/customIcons";
const WhoHelp = () => {
  return (
    <div className="mt-10 md:mt-28">
      <div className="py-2 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-0">
          {/* leftt side */}
          <div className="flex w-full lg:w-[50%] items-center justify-center px-4 md:px-0 mb-10 md:mb-0">
            <Image
              src={leftSideImage}
              width={100}
              height={100}
              alt="left-side-image"
              className="w-full lg:w-auto"
            />
          </div>
          {/* right side */}
          <div className="lg:w-[60%] flex flex-col gap-4 md:gap-7">
            <div>
              <h2 className="text-2xl lg:text-[40px] leading-[120%] font-semibold">
                Who we <span className="text-brand"> help</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="default-list-text leading-normal!">
                Claimly is for people who feel stuck, unsure, or worn down by an
                insurance claim. If you’re not sure whether an offer is fair, a
                decision makes sense, or things just aren’t moving, Claimly
                helps you understand where you stand before you decide what to
                do next.
              </p>
              <p className="default-list-text">Your report may include:</p>
            </div>
            <div>
              <ul className="mt-2.5 space-y-2.5">
                {[
                  "Disputes about repairs versus write-off decisions",
                  "Disagreements about market value or settlement amounts",
                  "Questions around pre-existing damage or non-disclosure",
                  "Claims that feel stalled, delayed, or stuck in review",
                  "Situations where you’re considering a complaint but aren’t sure it’s worth it",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <ListIcon className="list-icon shrink-0 mt-0.5" />
                    <span className="default-list-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-1 ">
              <InfoIcon fill="var(--secondary_text)" width={14} height={14} />
              <p className="default-text ">
                If your situation is urgent, involves serious injury, or
                significant financial loss, you should seek independent legal
                advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoHelp;
