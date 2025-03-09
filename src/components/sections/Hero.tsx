
import React from "react";
import Navbar from "@/components/layout/Navbar";
import PlusButton from "@/components/common/PlusButton";
import LearnMoreButton from "@/components/common/LearnMoreButton";
import { Plus } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-[1117px] bg-[#000] overflow-hidden">
        <img
          src="/lovable-uploads/60dcf2c4-358d-45a1-8e29-72ac6f879c87.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 pt-32 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-white text-5xl md:text-[69px] font-light leading-tight tracking-[-0.4px]">
              Best world
              <br />
              Digital twin of robots
            </h1>

            <div className="mt-8 flex items-center">
              <PlusButton size="large" />
              <div className="ml-4">
                <p className="text-[#a1a1a1] text-lg">
                  We use cookies to personalise your visit
                  <br />
                  experience and analyse the site traffic.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="bg-[rgba(119,119,119,0.3)] backdrop-blur-[30px] rounded-[21px] p-6 max-w-[325px] ml-auto">
              <p className="text-white text-sm mb-2">
                The best performance of actual
              </p>
              <div className="h-[1px] w-[30px] bg-[#939393] mb-4"></div>

              <div className="bg-[#f8f8f8] rounded-[14px] backdrop-blur-[23px] p-4 mb-4">
                <div className="text-[#222] text-[69px] font-normal">+17</div>
                <p className="text-[#2e2e2e] text-xs">
                  The most accurate system
                  <br />
                  preferences on robots industry
                </p>
              </div>

              <div className="bg-[#f8f8f8] rounded-[14px] backdrop-blur-[23px] p-4">
                <div className="text-[#131313] text-lg font-medium mb-2">
                  Range
                </div>
                <p className="text-[#131313] text-[10px]">Year 2027</p>

                <div className="mt-4 relative">
                  <div className="h-[2px] w-full bg-gradient-to-r from-[#00BCFF] via-[#12DC00] via-[#E98A00] to-[#DC0000]"></div>
                  <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#656565] rotate-45"></div>
                </div>
              </div>
            </div>

            <div className="mt-6 ml-auto max-w-[226px]">
              <LearnMoreButton />
            </div>
          </div>
        </div>
      </div>

      {/* Blurred Ellipses */}
      <div className="absolute top-[464px] left-[509px] w-[682px] h-[682px] rounded-full bg-gradient-to-r from-[#00AEFF] via-[#BC003E] via-[#51DCFF] to-[#FFF676] opacity-100 blur-[202px] z-0"></div>
      <div className="absolute top-[464px] left-[1020px] w-[554px] h-[554px] rounded-full bg-gradient-to-r from-[#00AEFF] via-[#FF0055B0] via-[#51DCFF] to-[#FFF676] opacity-100 blur-[202px] z-0"></div>

      {/* Removed the blurred rectangle that was blocking the background */}

      {/* Image in the blurred rectangle */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mt-[574px] mx-auto w-[1323px] h-[543px] bg-[#333] rounded-lg overflow-hidden">
          <img
            src="/images/robot-showcase.jpg"
            alt="Robot showcase"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
