
import React from "react";
import { ArrowRight } from "lucide-react";

const LearnMoreButton = () => {
  return (
    <div className="bg-white rounded-[12px] shadow-lg backdrop-blur-[8px] p-4 flex items-center justify-between">
      <span className="text-[#2f2f2f] text-sm">Learn more about this</span>
      <div className="bg-[#00BCFF] rounded-md w-[26px] h-[26px] flex items-center justify-center">
        <ArrowRight className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default LearnMoreButton;
