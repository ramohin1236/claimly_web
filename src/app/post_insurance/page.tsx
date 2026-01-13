"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import chkimage from "../../../public/check.svg";
import StepOne from "@/components/post-insurance/StepOne";
import StepTwo from "@/components/post-insurance/StepTwo";
import StepThree from "@/components/post-insurance/StepThree";
import StepFour from "@/components/post-insurance/StepFour";
import { usePostInsurerMutation } from "@/store/feature/insurerapi/insurerapi";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

export type InsuranceFormInputs = {
  insurerName: string;
  policyType: string;
  notInsured: boolean;
  incidentDate: string;
  firstNotifiedDate: string;
  incidentDescription: string;
  insurerResponse: string;
  userConcern: string;
  complaintMade: string;
  complaintStatus: string;
  supporting_Documents: FileList | null;
};

const PostInsurance = () => {
  const [postInsurer, { isSuccess, isLoading, error }] = usePostInsurerMutation();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const methods = useForm<InsuranceFormInputs>({
    defaultValues: {
      insurerName: "",
      policyType: "",
      notInsured: false,
      incidentDate: "",
      firstNotifiedDate: "",
      incidentDescription: "",
      insurerResponse: "",
      userConcern: "",
      complaintMade: "",
      complaintStatus: "",
      supporting_Documents: null,
    },
  });

  const handleNext = () => currentPage < 4 && setCurrentPage((p) => p + 1);
  const handlePrev = () => currentPage > 1 && setCurrentPage((p) => p - 1);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit: SubmitHandler<InsuranceFormInputs> = async (data) => {
    try {
      console.log("Submitting with data:", data);

      // Base data object matching user's Postman example exactly
      const submitData: any = {
        notInsured: !!data.notInsured,
        incidentDate: new Date(data.incidentDate).toISOString(),
        firstNotifiedDate: new Date(data.firstNotifiedDate).toISOString(),
        incidentDescription: data.incidentDescription,
        insurerResponse: data.insurerResponse,
        userConcern: data.userConcern,
        complaintMade: data.complaintMade,
        complaintStatus: data.complaintStatus,
      };

      // Conditionally add insurer details
      if (!data.notInsured) {
        submitData.insurerName = data.insurerName;
        submitData.policyType = data.policyType;
      }

      // Handle files only if present
      if (data.supporting_Documents && data.supporting_Documents.length > 0) {
        toast.info("Preparing files for upload...");
        const filePromises = Array.from(data.supporting_Documents).map((file) =>
          fileToBase64(file)
        );
        submitData.supporting_Documents = await Promise.all(filePromises);
      }

      console.log("Final JSON payload:", submitData);

      const result = await postInsurer(submitData).unwrap();
      console.log("Success:", result);
      toast.success(result.message || "Insurance record created successfully!");
      methods.reset();
      setCurrentPage(1);
    } catch (err: any) {
      console.error("Submission failed. Full error object:", err);

      let errorMessage = "Failed to submit insurance form";
      if (err?.name === 'TypeError' && err?.message === 'Failed to fetch') {
        errorMessage = "Network error: Connection refused or payload too large. Please try WITHOUT files first.";
      } else if (err?.data?.message) {
        errorMessage = err.data.message;
      } else if (err?.message) {
        errorMessage = err.message;
      }

      toast.error(errorMessage, {
        description: err?.data?.error ? JSON.stringify(err.data.error) : "Check console for details"
      });
    }
  };

  const renderItem = (step: number) => {
    switch (step) {
      case 1:
        return <StepOne onNext={handleNext} />;
      case 2:
        return <StepTwo onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <StepThree onNext={handleNext} onPrev={handlePrev} />;
      case 4:
        return <StepFour onPrev={handlePrev} onSubmit={methods.handleSubmit(onSubmit)} isLoading={isLoading} />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="container mx-auto px-6 lg:px-8 py-10 lg:py-28 flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Timeline Sidebar */}
        <div className="relative flex lg:flex-col items-center lg:items-start h-auto lg:h-[400px] w-full lg:w-fit overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
          <div className="hidden lg:block absolute left-[13px] top-0 h-full w-[2px] bg-[#64748B]" />
          <div className="flex lg:flex-col justify-between items-center lg:items-start w-full lg:h-full gap-8 z-10 shrink-0">
            {Array.from({ length: 4 }).map((_, i) => {
              const step = i + 1;
              return (
                <div key={i} className="flex-shrink-0">
                  {currentPage === step && (
                    <div className="w-7 h-7 flex items-center justify-center rounded-full border border-[#2563EB] bg-[#DBEAFE]">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#2563EB]" />
                    </div>
                  )}
                  {currentPage > step && (
                    <div className="w-7 h-7 flex items-center justify-center rounded-full border border-[#2563EB] bg-[#DBEAFE]">
                      <Image src={chkimage} alt="check" width={16} height={16} />
                    </div>
                  )}
                  {currentPage < step && (
                    <div className="w-7 h-7 flex items-center justify-center rounded-full border border-[#64748B] bg-white">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#64748B]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Content Area */}
        <div className="flex-1 w-full">{renderItem(currentPage)}</div>
      </div>
    </FormProvider>
  );
};
export default PostInsurance;
