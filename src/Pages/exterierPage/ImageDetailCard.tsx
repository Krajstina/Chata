import React from "react";
import {EffectFade, Keyboard, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {GalleryImage} from "../../interfaces/GalleryImage";

interface ImageDetailCardProps {
  galleryImages: GalleryImage[];
  initialSlide: number;
}

const ImageDetailCard = (props: ImageDetailCardProps) => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, EffectFade, Keyboard]}
        navigation
        effect={"slide"}
        speed={600}
        initialSlide={props.initialSlide}
        slidesPerView={1}
        loop
        className={
          "ImageDetailCard max-w-[90vw] max-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
        }
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.galleryImages.map((galleryImage, index) => {
          return (
            <SwiperSlide className="" key={index}>
              <img
                src={galleryImage.image}
                className={"w-full lg:h-full h-[500px] object-cover lg:object-contain"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageDetailCard;
