import React from "react";
import {Room} from "../../interfaces/Room";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation} from "swiper";

interface RoomDetailCardProps {
  room: Room;
}

const RoomDetailCard = (props: RoomDetailCardProps) => {
  return (
    <div className="lg:p-16 p-12 flex flex-col overflow-hidden">
      <div className="RoomDetailCard flex lg:flex-row rounded-lg flex-col">
        <div className="lg:w-1/2  rounded-lg overflow-hidden">
          <Swiper
            modules={[Navigation, EffectFade]}
            navigation
            effect={"slide"}
            speed={600}
            slidesPerView={1}
            loop
            className={""}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {}}
            onSlideChange={() => {}}
          >
            {props.room.images.map((image, index) => {
              return (
                <SwiperSlide className="" key={index}>
                  <img
                    src={image}
                    className="object-cover  h-[200px] lg:h-[700px]"
                    alt={""}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className=" aaaa flex flex col justify-center items-start lg:pt-10 bg-orange-400 lg:w-1/2 lg:min-h-[700px] max-h-[450px] rounded-lg p-2 ">
          <div className="text-white text-[20px] lg:text-[50px] font-roboto font-bold ">
            {props.room.label}
            <div className="lg:text-xl text-[10px] p-4 lg:p-20 text-left">
              {props.room.detail}
            </div>
            <div className="font-roboto lg:h-full max-h-[200px] font-bold ">
              {props.room.price} {"€, za noc"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailCard;
