import React from "react";

import ArrowIcon from "../../assets/svg/arrow.svg";

export const TabItem = ({ text, showBackground, isSelected }) => {
  return (
    <div
      className={`ml-9 relative transition duration-500 ease-in-out ${
        showBackground
          ? "bg-gradient-to-r from-bg-grad-start to-bg-grad-end hover:to-bg-grad-start hover:from-bg-grad-end px-2.5 py-2"
          : "bg-transparent py-1.5"
      }`}
    >
      <a
        href="#"
        className={`transition duration-500 ease-in-out ${
          !showBackground && "hover:text-highlight hover:text-opacity-80"
        } font-poppins ${isSelected ? "text-highlight" : "text-white"} ${
          showBackground && "font-bold"
        } ${isSelected && "font-semibold"} ${
          showBackground ? "text-base" : "text-lg"
        }`}
      >
        {text}
      </a>
      {isSelected && (
        <div className="absolute bottom-0 left-0 flex justify-center w-full">
          <img src={ArrowIcon.src} alt="Arrow Icon" />
        </div>
      )}
    </div>
  );
};
