import React from "react";
import images from "../../../public/hero 2-Photoroom.svg";
import Image from "next/image";

const PageHero = () => {
  return (
    <div className="flex flex-col py-10 px-7 lg:py-20 lg:px-24 bg-linear-to-l from-[#DBEAFE] to-[#EFF6FF] outline-[1px] outline-[#0000001A] xl:flex-row justify-between items-center  gap-10">
      <div className="container mx-auto lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
          {/* left */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl lg:text-[40px] leading-[120%] font-semibold">
              Claimly <span className="text-brand"> Guides</span>
            </h2>
            <p className="tracking-[1px] leading-[120%] text-color-secondary">
              Learn how claims and complaints actually work
            </p>
          </div>

          {/* right */}
          <div className="w-">
            <Image
              src={images}
              alt="hro"
              width={100}
              height={100}
              className="md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
