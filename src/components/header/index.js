import React from "react";

import { TabItem } from "../tabItem";

import LogoIcon from "../../assets/svg/logo.svg";

export const Header = () => {
  return (
    <div className="relative bg-black">
      <div className="mx-auto max-w-360">
        <div className="mx-20 flex flex-row items-start pt-6 pb-2.5">
          <div className="flex-grow">
            <a href="#">
              <img src={LogoIcon.src} alt="Logo Icon" />
            </a>
          </div>
          <div className="flex flex-row items-center">
            <TabItem showBackground={false} text="Home" isSelected={true} />
            <TabItem
              showBackground={false}
              text="Features"
              isSelected={false}
            />
            <TabItem showBackground={false} text="Roadmap" isSelected={false} />
            <TabItem showBackground={false} text="Team" isSelected={false} />
            <TabItem
              showBackground={true}
              text="Join Our Discord"
              isSelected={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
