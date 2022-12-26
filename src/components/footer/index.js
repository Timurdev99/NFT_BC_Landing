import React from "react";

import LogoIcon from "../../assets/svg/logo.svg";
import TwitterIcon from "../../assets/svg/twitter.svg";
import DiscordIcon from "../../assets/svg/discord.svg";
import InstagramIcon from "../../assets/svg/instagram.svg";

export const Footer = () => {
  return (
    <div className="mx-auto max-w-360">
      <div className="mx-14">
        <div className="h-px bg-white" />
        <div className="flex flex-row items-center pt-6 pb-16">
          <a href="#">
            <img src={LogoIcon.src} alt="Logo Icon" className="w-44" />
          </a>
          <a
            href="#"
            className="ml-12 text-lg transition duration-500 ease-in-out text-dark-black font-roboto hover:text-white"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="ml-12 text-lg transition duration-500 ease-in-out text-dark-black font-roboto hover:text-white"
          >
            Privacy Policy
          </a>
          <div className="flex-grow" />
          <a href="#" className="mr-4">
            <img
              src={TwitterIcon.src}
              alt="Twitter Icon"
              className="transition duration-500 ease-in-out transform scale-100 hover:scale-125"
            />
          </a>
          <a href="#" className="mr-4">
            <img
              src={DiscordIcon.src}
              alt="Discord Icon"
              className="transition duration-500 ease-in-out transform scale-100 hover:scale-125"
            />
          </a>
          <a href="#" className="mr-12">
            <img
              src={InstagramIcon.src}
              alt="Instagram Icon"
              className="transition duration-500 ease-in-out transform scale-100 hover:scale-125"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
