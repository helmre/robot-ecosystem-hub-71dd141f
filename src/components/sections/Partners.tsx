
import React from "react";

const Partners = () => {
  return (
    <div className="px-6 md:px-10 max-w-7xl mx-auto mt-32">
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Partner logos would go here */}
        <div className="w-[154px] h-[33px] bg-[#333] flex items-center justify-center">
          <img
            src="/images/partner1.svg"
            alt="Partner 1"
            className="max-h-full"
          />
        </div>
        <div className="w-[190px] h-[95px] bg-[#333] flex items-center justify-center">
          <img
            src="/images/partner2.svg"
            alt="Partner 2"
            className="max-h-full"
          />
        </div>
        <div className="w-[180px] h-[120px] bg-[#333] flex items-center justify-center">
          <img
            src="/images/partner3.svg"
            alt="Partner 3"
            className="max-h-full"
          />
        </div>
        <div className="w-[193px] h-[59px] bg-[#333] flex items-center justify-center">
          <img
            src="/images/partner4.svg"
            alt="Partner 4"
            className="max-h-full"
          />
        </div>
        <div className="w-[128px] h-[24px] bg-[#333] flex items-center justify-center">
          <img
            src="/images/partner5.svg"
            alt="Partner 5"
            className="max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
