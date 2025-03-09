
import React from "react";
import Hero from "@/components/sections/Hero";
import MainContent from "@/components/sections/MainContent";
import WhatIsDC from "@/components/sections/WhatIsDC";
import BetterProducts from "@/components/sections/BetterProducts";
import DarkSection from "@/components/sections/DarkSection";
import Partners from "@/components/sections/Partners";
import ProductGrid from "@/components/sections/ProductGrid";
import Ecosystem from "@/components/sections/Ecosystem";
import ProcessFlow from "@/components/sections/ProcessFlow";

const Home = () => {
  return (
    <div className="bg-white w-full">
      <Hero />
      <MainContent />
      <WhatIsDC />
      <BetterProducts />
      <DarkSection />
      <Partners />
      <ProductGrid />
      <Ecosystem />
      <ProcessFlow />
    </div>
  );
};

export default Home;
