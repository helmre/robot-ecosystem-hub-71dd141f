
import React from "react";

const ProductGrid = () => {
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

        <div className="md:w-2/3 mt-6 md:mt-0 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#d9d9d9] rounded-[13px] h-[315px] overflow-hidden">
            <img
              src="/images/product1.jpg"
              alt="Product 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#d9d9d9] rounded-[13px] h-[315px] overflow-hidden">
            <img
              src="/images/product2.jpg"
              alt="Product 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#d9d9d9] rounded-[13px] h-[315px] overflow-hidden">
            <img
              src="/images/product3.jpg"
              alt="Product 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#d9d9d9] rounded-[13px] h-[315px] overflow-hidden">
            <img
              src="/images/product4.jpg"
              alt="Product 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
