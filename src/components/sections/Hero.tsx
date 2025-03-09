
import React from "react";
import Navbar from "@/components/layout/Navbar";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-[1117px] bg-[#000] overflow-hidden">
        <img
          src="/lovable-uploads/5fa8b173-b107-4604-9b8f-bccf471addf7.png"
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

            <div className="mt-8">
              <p className="text-[#a1a1a1] text-lg">
                We use cookies to personalise your visit
                <br />
                experience and analyse the site traffic.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            {/* Square with arrow icon */}
            <div className="absolute top-0 right-0 w-[60px] h-[60px] border border-white/30 rounded-lg flex items-center justify-center z-10">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            
            <div className="bg-[rgba(119,119,119,0.3)] backdrop-blur-[30px] rounded-[21px] p-6 max-w-[325px] ml-auto mt-16">
              <p className="text-white text-sm mb-2">
                The best performance of actual
              </p>
              <div className="h-[1px] w-[30px] bg-[#939393] mb-4"></div>

              <div className="bg-[#f8f8f8] rounded-[14px] backdrop-blur-[23px] p-4 mb-4">
                <div className="text-[#222] text-[69px] font-normal">+17</div>
                <p className="text-[#2e2e2e] text-xs">
                  The most accurate system
                  <br />
                  preferences on <span className="font-medium">robots</span> industry
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
              <div className="bg-white rounded-[12px] shadow-lg backdrop-blur-[8px] p-4 flex items-center justify-between">
                <span className="text-[#2f2f2f] text-sm">Learn more about this</span>
                <div className="bg-[#00BCFF] rounded-md w-[26px] h-[26px] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blurred Ellipses */}
      <div className="absolute top-[464px] left-[509px] w-[682px] h-[682px] rounded-full bg-gradient-to-r from-[#00AEFF] via-[#BC003E] via-[#51DCFF] to-[#FFF676] opacity-100 blur-[202px] z-0"></div>
      <div className="absolute top-[464px] left-[1020px] w-[554px] h-[554px] rounded-full bg-gradient-to-r from-[#00AEFF] via-[#FF0055B0] via-[#51DCFF] to-[#FFF676] opacity-100 blur-[202px] z-0"></div>

      {/* Blurred Rectangle */}
      <div className="absolute top-[563px] left-[191px] w-[1345px] h-[554px] bg-[rgba(141,141,141,0.43)] backdrop-blur-[30px] z-0"></div>

      {/* Robot showcase */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mt-[574px] mx-auto w-full md:w-[1323px] h-[543px] bg-black rounded-lg overflow-hidden">
          <div className="relative w-full h-full">
            <div className="absolute top-5 left-5 text-white text-xl">N.</div>
            <div className="absolute top-12 left-5 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
