
import React from "react";

const DarkSection = () => {
  return (
    <div className="bg-[#141414] mt-32 py-24">
      <div className="px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <h3 className="text-[#494949] text-lg">
              Better products.
              <br />
              Faster workflow.
            </h3>
          </div>

          <div className="md:w-2/3 mt-6 md:mt-0">
            <div className="border border-[#4f4f4f] rounded-[23px] p-8 mb-8">
              <h3 className="text-white text-2xl mb-4">Fast prototype</h3>
              <p className="text-[#747474] text-lg mb-4">
                Our tools accelerate your design process.
              </p>
              <button className="text-white border border-[#838383] rounded-full h-[51px] w-[126px] text-sm">
                Demo
              </button>
            </div>

            <div className="mb-8">
              <h3 className="text-white text-2xl mb-4">Optimal decision</h3>
              <p className="text-[#747474] text-lg">
                Our optimization algorithms go beyond the boundaries of other
                approaches.
              </p>
            </div>

            <div>
              <h3 className="text-white text-2xl mb-4">
                Artificial intelligence
              </h3>
              <p className="text-[#747474] text-lg">
                Shape learns from your complete archive of simulation data.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-[#d9d9d9] rounded-[26px] w-full md:w-[831px] h-[481px] ml-auto">
              <img
                src="/lovable-uploads/2676b736-c32b-4081-bbb3-4dd08a48aa83.png"
                alt="Prototype showcase"
                className="w-full h-full object-cover rounded-[26px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkSection;
