import React from "react";

import HeroBannerImg from "../../assets/img/banner.png";
import EclipseImg_1 from "../../assets/img/Ellipse_1.png";
import SparkIcon from "../../assets/svg/spark.svg";

export const Banner = () => {
  return (
    <div className="relative z-30 mx-auto max-w-360">
      <div className="absolute left-0 top-24">
        <img src={EclipseImg_1.src} alt="Eclipse Image" />
      </div>
      <div className="relative mx-14">
        <div className="items-center block xl:flex">
          <div className="flex-1 hidden xl:block">
            <img src={HeroBannerImg.src} alt="Hero Banner" />
          </div>
          <div className="flex-1">
            <div className="mx-auto text-center py-14 xl:text-right max-w-150">
              <h1 className="relative pr-16 font-bold text-white font-poppins text-8xl leading-36">
                EXCLUSIVE
                <img
                  src={SparkIcon.src}
                  alt="Spark Icon"
                  className="absolute right-0 -top-3"
                />
              </h1>
              <h3 className="inline-block text-transparent text-12 font-poppins bg-gradient-to-r from-text-grad-start to-text-grad-end bg-clip-text">
                newest NFT release
              </h3>
              <p className="ml-auto font-medium text-white text-5 font-roboto mt-21">
                The{" "}
                <span className="text-xl font-extrabold font-poppins leading">
                  BILLIONAIRE CLUB
                </span>{" "}
                is a private collection of 10 000 billionaire apes NFTs—unique
                digital collectibles. The apes are stored as{" "}
                <span className="whitespace-nowrap">ERC-721</span> tokens on the
                Ethereum blockchain and hosted on IPFS.{" "}
                <span className="block text-highlight">
                  Reveal on October 20th.
                </span>
              </p>
              <div className="mt-8 subscribe-form">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full py-4.25 mr-2 text-center placeholder-white bg-black border-2 border-highlight placeholder-opacity-70 text-6 font-roboto"
                    placeholder="your@email.com"
                  />
                  <button className="transition duration-500 ease-in-out bg-gradient-to-r from-bg-grad-start to-bg-grad-end hover:to-bg-grad-start hover:from-bg-grad-end py-3 max-w-46.5 w-full font-semibold font-poppins text-7 text-white">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
