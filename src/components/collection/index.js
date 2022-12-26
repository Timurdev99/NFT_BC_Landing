import React from "react";

import { CardItem } from "../../components/cardItem";

import Dot1 from "../../assets/img/dot-1.png";

export const Collection = ({ cards }) => {
  return (
    <div className="relative z-20 mx-auto max-w-360 pt-14">
      <div className="absolute hidden right-12 -top-10 xln:block">
        <img src={Dot1.src} alt="Dot Image" />
      </div>
      <div className="relative z-10 mx-14">
        <h2 className="inline-block py-8 text-transparent text-8xl font-poppins bg-gradient-to-r from-text-grad-start to-text-grad-end bg-clip-text">
          Collections
        </h2>
        <div className="pr-20 mt-2">
          <p className="text-2xl text-white font-roboto">
            With more than 180+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </p>
        </div>
        <div className="grid grid-cols-1 pr-10 mt-20 md:grid-cols-2 xl:grid-cols-3 gap-14 pb-54">
          {cards.map((card, index) => (
            <CardItem key={`card-${index}`} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
