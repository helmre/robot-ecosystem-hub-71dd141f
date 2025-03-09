
import React from "react";
import { Plus } from "lucide-react";

interface EcosystemCardProps {
  imageSrc: string;
}

const EcosystemCard = ({ imageSrc }: EcosystemCardProps) => {
  return (
    <div className="bg-[#d9d9d9] rounded-[25px] h-[527px] overflow-hidden relative">
      <img
        src={imageSrc}
        alt="Ecosystem"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f8f8f8] rounded-[10px] w-[166px] h-[166px] p-4">
        <div className="text-[#131313] text-[33px] font-normal">75%</div>
        <p className="text-[#131313] text-[9px]">
          More efficiency
          <br />
          in next models 2027
        </p>
        <div className="absolute bottom-4 right-4 w-[24px] h-[24px] bg-black/30 backdrop-blur-[26px] rounded-full flex items-center justify-center">
          <Plus className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
};

export default EcosystemCard;
