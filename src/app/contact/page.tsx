import Image from "next/image";
import images from "../../../public/hero 2-Photoroom.svg";
import ContactImage from "../../../public/contact_headphone.svg";
import gmail from "../../../public/call.svg";
import location from "../../../public/call (1).svg";

const Contact = () => {
  return (
    <div>
      {/* ===== HERO / HEADING ===== */}
      <section className="py-10 px-6 lg:py-20 lg:px-24 bg-gradient-to-l from-[#DBEAFE] to-[#EFF6FF] outline outline-1 outline-[#0000001A]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left */}
          <div className="flex flex-col gap-4 max-w-xl">
            <h2 className="text-3xl lg:text-[40px] leading-[120%] font-semibold">
              <span className="bg-gradient-to-r from-[#1E293B] to-[#2563EB] bg-clip-text text-transparent">
                Contact
              </span>{" "}
              <span className="text-[#2563EB]">Us</span>
            </h2>

            <p className="tracking-[1px] leading-[140%] text-color-secondary">
              Reach out to our team for guidance, support, or any questions
              about Claimly.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-44 md:w-[420px] flex justify-center">
            <Image
              src={images}
              alt="Contact hero"
              className="w-full h-auto max-w-sm"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== CONTACT CONTENT ===== */}
      <section className="container mx-auto px-6 lg:px-24 my-12 lg:my-28">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={ContactImage}
              alt="Contact illustration"
              className="w-full max-w-lg h-auto"
            />
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-4 lg:p-6 md:p-8">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-md py-3 px-4 bg-slate-100 text-slate-900 text-sm border border-[#DBEAFE] focus:border-[#bdd5f5] outline-none focus:bg-transparent"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md py-3 px-4 bg-slate-100 text-slate-900 text-sm border border-[#DBEAFE] focus:border-[#bdd5f5] outline-none focus:bg-transparent"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-md py-3 px-4 bg-slate-100 text-slate-900 text-sm border border-[#DBEAFE] focus:border-[#bdd5f5] outline-none focus:bg-transparent"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">
                  Description
                </label>
                <textarea
                  placeholder="Write your message"
                  rows={6}
                  className="w-full rounded-md px-4 pt-3 bg-slate-100 text-slate-900 text-sm border border-[#DBEAFE] focus:border-[#bdd5f5] outline-none focus:bg-transparent"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium py-3 rounded-md transition-colors px-20 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="flex md:gap-12 max-w-6xl mx-auto flex-col md:flex-row justify-center">
          <div className="border border-[#DBEAFE] rounded-md mt-10 mb-10 items-center  w-full h-full flex p-6 gap-4">
            <div>
              <Image
                src={gmail}
                alt="mission"
                width={100}
                height={100}
                className="w-10"
              />
            </div>
            <div>
              <p className="text-xl"> contact Email </p>
              <p className="default-list-text leading-normal! text-center">
                Support@Claimly.com
              </p>
            </div>
          </div>

          <div className="border border-[#DBEAFE] rounded-md mt-10 mb-10 items-center  w-full h-full flex p-6 gap-4 ">
            <div>
              <Image
                src={location}
                alt="mission"
                width={100}
                height={100}
                className="w-10"
              />
            </div>
            <div>
              <p className="text-xl">Location </p>
              <p className="default-list-text leading-normal! text-center">
                Sydney, NSW
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
