
import React from "react";
import { Plus } from "lucide-react";
import EcosystemCard from "@/components/ui/EcosystemCard";

const Ecosystem = () => {
  return (
    <div className="px-6 md:px-10 max-w-7xl mx-auto mt-32">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-[45px] font-normal leading-tight tracking-[-0.4px]">
            Ecosystem of technology developing...
          </h2>

          <p className="text-[#494949] text-lg mt-6">
            Neural concept ideology that helps you speed up your R&D cycles,
            enhance product performance or solve engineering challenge.
          </p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        <EcosystemCard imageSrc="/images/ecosystem1.jpg" />
        <EcosystemCard imageSrc="/images/ecosystem2.jpg" />
        <EcosystemCard imageSrc="/images/ecosystem3.jpg" />
        
        {/* Last card has a slightly different layout */}
        <div className="bg-[#d9d9d9] rounded-[25px] h-[527px] overflow-hidden relative">
          <img
            src="/images/ecosystem4.jpg"
            alt="Ecosystem 4"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f8f8f8] rounded-[10px] w-[273px] h-[167px] p-4">
            <div className="text-[#131313] text-[41px] font-normal">75%</div>
            <p className="text-[#131313] text-[12px]">
              More efficiency
              <br />
              in next models 2027
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
