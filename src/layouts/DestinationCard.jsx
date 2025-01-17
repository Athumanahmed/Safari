import React from "react";
import Button from "../layouts/Button";

const DestinationCard = ({ img, para, title }) => {
  const backgroundColor = `bg-brightColor`;
  return (
    <div className=" w-full lg:w-2/6 cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <img className=" rounded-t-lg" src={img} alt="img" />

      <div className=" bg-[#F2F2F2] p-5 space-y-3 rounded-b-lg">
        <h2 className=" text-xl font-medium text-center">{title}</h2>
        <p className=" text-sm">{para}</p>
        <div className=" flex flex-row justify-center">
          <Button title="Book Tickets" backgroundColor={backgroundColor} />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
