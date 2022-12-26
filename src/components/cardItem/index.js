import React from "react";

import StarIcon from "../../assets/svg/star.svg";

export const CardItem = ({ card }) => {
  return (
    <div className="bg-gradient-to-r from-gray-500 to-white">
      <div className="card-background px-6 m-0.5">
        <div className="flex flex-row items-center">
          <img
            className="w-11 h-11 rounded-full my-3.5"
            src={card.avatar}
            alt="Avatar Image"
          />
          <h5 className="text-lg text-white font-poppins flex-grow pl-3.5 font-semibold">{`@${card.name}`}</h5>
          <img src={StarIcon.src} alt="Star Icon" />
          <div className="ml-2 text-sm font-semibold text-white font-poppins">
            {card.star}
          </div>
        </div>
        <a href="#" className="block overflow-hidden">
          <img
            src={card.image}
            className="w-full mb-5 transition duration-500 ease-in-out transform scale-100 hover:scale-125"
          />
        </a>
        <div className="mx-2 pb-9">
          <div className="flex flex-row items-center mb-0.5">
            <div className="flex-grow text-base text-gray-400 font-poppins">
              Current bid
            </div>
            <div className="text-base text-gray-400 font-poppins">
              Ending in
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex-grow text-xl font-bold text-white font-poppins">{`${card.ether}ETH`}</div>
            <div className="text-xl font-bold text-white font-poppins">
              {card.time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
