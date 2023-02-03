import React from "react";
import {Room} from "../../interfaces/Room";

interface RoomCardProps {
  room: Room;
  onClick:any;
}

const RoomCard = (props: RoomCardProps) => {
  return (
    <div onClick={props.onClick}
         className="RoomCard cursor-pointer lg:max-w-[400px]  md:min-h-[270px] lg:min-h-[400px] md:max-w-[400px] h-full  bg-orange-400 shadow-gray-600/50 shadow-lg rounded-2xl hover:grayscale transform-gpu duration-500 ease-in-out  xs:hover:scale-105 ">
      <div className="imageHolder  overflow-hidden w-full rounded-tl-2xl rounded-tr-2xl">
        <img
          src={props.room.images[0]}
          className="object-cover w-full md:max-w-[400px] md:min-h-[120px] h-[100px] lg:h-[260px]"
          alt={""}
        />
      </div>
      <div className="px-6 py-2 w-full flex flex-col items-center sm:h-16">
        <h1 className="text-white font-roboto underline font-bold lg:text-xl">
          {props.room.label}
        </h1>
          <p className="text-white font-roboto font-normal">{props.room.description}</p>
      </div>
    </div>
  );
};

export default RoomCard;
