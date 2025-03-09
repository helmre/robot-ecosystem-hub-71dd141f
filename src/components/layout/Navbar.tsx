
import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="relative z-10 px-4 md:px-6">
      <div className="mx-auto max-w-[1380px] bg-[rgba(119,119,119,0.3)] backdrop-blur-[15px] rounded-[22px] border border-[rgba(79,79,79,0.3)] h-[72px] mt-[27px] flex items-center justify-between px-6">
        <div className="flex items-center">
          <span className="text-white text-xl font-medium">Neuraverse.</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <span className="text-white font-medium text-sm">NeuronSuite</span>
          <span className="text-white text-sm">Marketplace</span>
          <span className="text-white text-sm">Creator Hub</span>
          <span className="text-white text-sm">Learning&Support</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
            <button className="bg-white text-[#111921] rounded-full h-[46px] w-[126px] text-sm">
              Get a Demo
            </button>
            <button className="bg-[#00AEFF] text-white rounded-full h-[46px] w-[126px] ml-4 text-sm">
              Log In
            </button>
          </div>
          <div className="md:hidden text-white">
            <Menu size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
