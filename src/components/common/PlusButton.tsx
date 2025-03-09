
import React from "react";
import { Plus } from "lucide-react";

interface PlusButtonProps {
  size?: "small" | "medium" | "large";
}

const PlusButton = ({ size = "medium" }: PlusButtonProps) => {
  const sizeClasses = {
    small: {
      outer: "w-[24px] h-[24px]",
      inner: "w-[20px] h-[20px]",
      icon: "w-3 h-3"
    },
    medium: {
      outer: "w-[48px] h-[48px]",
      inner: "w-[42px] h-[42px]",
      icon: "w-6 h-6"
    },
    large: {
      outer: "w-[70px] h-[70px]",
      inner: "w-[60px] h-[60px]",
      icon: "w-6 h-6"
    }
  };

  return (
    <div className={`${sizeClasses[size].outer} bg-black/30 backdrop-blur-[44px] rounded-full flex items-center justify-center`}>
      <div className={`${sizeClasses[size].inner} bg-black rounded-full flex items-center justify-center`}>
        <Plus className={`${sizeClasses[size].icon} text-white`} />
      </div>
    </div>
  );
};

export default PlusButton;
