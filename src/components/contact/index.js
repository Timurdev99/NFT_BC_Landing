import React from "react";

import PointerIcon from "../../assets/svg/pointer.svg";
import Dot2 from "../../assets/img/dot-2.png";

export const Contact = () => {
  return (
    <div className="relative mx-auto py-28 max-w-360">
      <div className="absolute bottom-0 left-0">
        <img src={Dot2.src} alt="Dot Image" />
      </div>
      <div className="relative z-20 flex flex-col items-center">
        <h3 className="inline-block mb-6 text-6xl text-transparent font-poppins bg-gradient-to-r from-text-grad-start to-text-grad-end bg-clip-text">
          Get Aped with Us!
        </h3>
        <div className="flex flex-row items-end">
          <div className="pb-2 bg-gradient-to-r from-bg-grad-start to-bg-grad-end mb-1.5">
            <a
              href="#"
              className="pb-1 text-4xl text-white transition duration-500 ease-in-out font-roboto bg-light-black hover:text-highlight"
            >
              Sign up for our news
            </a>
          </div>
          <img src={PointerIcon.src} alt="Pointer Icon" className="ml-2" />
        </div>
      </div>
    </div>
  );
};
