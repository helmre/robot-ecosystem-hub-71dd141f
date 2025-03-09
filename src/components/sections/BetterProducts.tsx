
import React from "react";

const BetterProducts = () => {
  return (
    <div className="px-6 md:px-10 max-w-7xl mx-auto mt-32">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <h3 className="text-[#494949] text-lg">
            Better products.
            <br />
            Faster workflow.
          </h3>
        </div>

        <div className="md:w-2/3 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-[45px] font-normal leading-tight tracking-[-0.4px]">
            Industrial engineering teams use shape to enhance their CAD
            capabilities with help machine learning and numerical optimization
          </h2>

          <p className="text-[#494949] text-lg mt-6">
            Neural concept ideology that helps you speed up your R&D cycles,
            enhance product performance or solve engineering challenge.
          </p>

          <button className="border border-[#838383] text-black rounded-full h-[51px] w-[126px] text-sm mt-6">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetterProducts;
