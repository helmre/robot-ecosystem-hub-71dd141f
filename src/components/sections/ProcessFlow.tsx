
import React from "react";
import PlusButton from "@/components/common/PlusButton";
import ProcessCard from "@/components/ui/ProcessCard";

const ProcessFlow = () => {
  return (
    <div className="px-6 md:px-10 max-w-7xl mx-auto mt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#f7f9fa] rounded-[21px] p-8 h-[696px]">
          <div className="flex justify-center items-center h-[200px]">
            <div className="relative">
              <div className="w-[117px] h-[119px] border-[5px] border-[#00B8FF] rounded-[25px]"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-[167px]">
                  <div className="h-[1px] w-[167px] bg-[#e3e3e3]"></div>
                  <div className="h-[1px] w-[167px] bg-[#e3e3e3] rotate-90"></div>
                </div>
              </div>
              <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-[#141414] text-sm">
                Speed
              </div>
              <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-[#141414] text-sm">
                Accuracy
              </div>
              <div className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-[#141414] text-sm">
                PW
              </div>
              <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-[#141414] text-sm">
                UX
              </div>
            </div>
          </div>

          <h2 className="text-[#202020] text-[46px] font-light mt-16">
            Core Advanced
            <br />
            Data Model
          </h2>

          <p className="text-[#626262] text-sm mt-6">
            No fees, no extra payments for customisation. That means we love
            your flexibility to arrange your needs. No fees, no extra payments
            for customisation. That means we love your flexibility.
          </p>

          <div className="mt-16 flex items-center">
            <PlusButton size="medium" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <ProcessCard 
            title="Collecting Data" 
            description="No fees, no extra payments for customization. That means we love your flexibility."
          />
          <ProcessCard 
            title="Preparing Data" 
            description="No fees, no extra payments for customization. That means we love your flexibility."
          />
          <ProcessCard 
            title="Processing Data" 
            description="No fees, no extra payments for customization. That means we love your flexibility."
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
