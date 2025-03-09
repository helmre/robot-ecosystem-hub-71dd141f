
import React from "react";
import PlusButton from "@/components/common/PlusButton";

interface ProcessCardProps {
  title: string;
  description: string;
}

const ProcessCard = ({ title, description }: ProcessCardProps) => {
  return (
    <div className="bg-[#f7f9fa] rounded-[21px] p-6 h-[398px]">
      <div className="flex items-center mb-4">
        <div className="text-[#838383]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 7.5H3C2.17157 7.5 1.5 8.17157 1.5 9V17C1.5 17.8284 2.17157 18.5 3 18.5H17C17.8284 18.5 18.5 17.8284 18.5 17V9C18.5 8.17157 17.8284 7.5 17 7.5Z"
              stroke="#838383"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 7.5V4.5C5.5 3.57174 5.86875 2.6815 6.52513 2.02513C7.1815 1.36875 8.07174 1 9 1C9.92826 1 10.8185 1.36875 11.4749 2.02513C12.1312 2.6815 12.5 3.57174 12.5 4.5V7.5"
              stroke="#838383"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12.5C9.55228 12.5 10 12.0523 10 11.5C10 10.9477 9.55228 10.5 9 10.5C8.44772 10.5 8 10.9477 8 11.5C8 12.0523 8.44772 12.5 9 12.5Z"
              stroke="#838383"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-[#202020] text-[23px] font-light ml-2">
          {title.split(" ")[0]}
          <br />
          {title.split(" ")[1]}
        </h3>
      </div>

      <p className="text-[#626262] text-[10px]">{description}</p>

      <div className="mt-8 flex items-center">
        <PlusButton size="medium" />
      </div>
    </div>
  );
};

export default ProcessCard;
