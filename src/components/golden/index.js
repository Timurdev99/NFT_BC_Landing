import React from "react";

import GoldenImage from "../../assets/img/golden.png";
import EclipseImg_3 from "../../assets/img/Ellipse_3.png";

export const Golden = () => {
  return (
    <div className="relative z-10 py-20 bg-gradient-to-r from-bg-grad-start to-bg-grad-end">
      <div className="relative z-10 items-center pl-20 mx-auto max-w-360">
        <div className="absolute right-0 bottom-28">
          <img src={EclipseImg_3.src} alt="Eclipse Image" />
        </div>
        <div className="relative ml-auto mr-auto max-w-186 xl:ml-0">
          <div className="col-span-7">
            <h3 className="mb-4 text-5xl font-bold text-golden font-poppins">
              The Golden Guests
            </h3>
            <p className="text-2xl text-white text-roboto mb-11">
              The Golden Guests edition by the Billionaire Club are the rarest
              NFTs. They are all hand drawn and have no element in common with
              the regular collection.
            </p>
            <a
              href="#"
              className="text-white hover:text-golden transition duration-500 ease-in-out border-black px-11 py-3.5 border-4 inline-block font-poppins text-3xl bg-gradient-to-r from-highlight to-bg-grad-end hover:to-highlight hover:from-bg-grad-end shadow-custom ml-2.5"
            >
              Join us to register for the Presale
            </a>
          </div>
        </div>
        <div className="absolute right-0 hidden vertical-center xl:block ">
          <img src={GoldenImage.src} alt="Golden Image" />
        </div>
      </div>
    </div>
  );
};
