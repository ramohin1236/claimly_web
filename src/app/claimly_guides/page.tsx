import Button from "@/components/shared/Button";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import right_icon from "../../../public/bluearrow.svg";
import Link from "next/link";

const guidesData = [
  {
    id: 1,
    title: "How insurers assess motor accident claims",
    link: "claimly_guides/id",
  },
  {
    id: 2,
    title: "Repair vs write-off: how insurers usually decide",
    link: "claimly_guides/id",
  },
  {
    id: 3,
    title: "What Non-Disclosure is in insurance Claims",
    link: "claimly_guides/id",
  },
  {
    id: 4,
    title: "How the insurance complaints process works in Australia",
    link: "claimly_guides/id",
  },
  {
    id: 5,
    title: "How insurers assess motor accident claims",
    link: "claimly_guides/id",
  },
];

const ClaimlyGuides = () => {
  return (
    <div>
      {/* Hero */}
      <PageHero />

      {/* Main content */}
      <div className="container mx-auto px-8 py-10 lg:my-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 md:py-28">
          {guidesData.map((item) => (
            <div
              key={item.id}
              className="border border-[#2563EB] py-[44px] px-[32px] rounded-2xl bg-[#EFF6FF] flex flex-col justify-between gap-6 lg:gap-10"
            >
              <p className="text-xl lg:text-3xl font-bold">{item.title}</p>

              <Link href={item.link}>
                <Button
                  rightIcon={
                    <Image
                      src={right_icon}
                      alt="arrow icon"
                      width={16}
                      height={16}
                      className="transition-transform duration-200 group-hover:translate-x-1 w-4 h-4 ml-2.5 bg-[#2563EB0D]"
                    />
                  }
                  variant="outline"
                  size="lg"
                  className="font-medium"
                >
                  Learn more
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClaimlyGuides;
