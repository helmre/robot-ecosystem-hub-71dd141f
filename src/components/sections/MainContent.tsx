
import React from "react";

const MainContent = () => {
  return (
    <div className="px-6 md:px-10 max-w-7xl mx-auto mt-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-[67px] font-normal leading-tight tracking-[-0.4px]">
            All community
            <br />
            together
            <br />
            contribution
          </h2>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0">
          <p className="text-[#494949] text-lg mb-6">
            Neural concept ideology that helps you speed up your R&D cycles,
            enhance product performance or solve engineering challenge.
          </p>

          <button className="bg-[#00AEFF] text-white rounded-full h-[51px] w-[126px] text-sm">
            Start now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
