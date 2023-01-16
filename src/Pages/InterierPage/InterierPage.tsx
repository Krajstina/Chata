import React, { useState } from "react";
import { imagesList, imagesList2 } from "../../reducers/helpers/helper";
import GalleryImageHolder from "../../Components/GalleryImageHolder";
import { useDispatch } from "react-redux";
import { GalleryImage } from "../../interfaces/GalleryImage";
import { openModal } from "../../reducers/actions/PopupActions";
import ImageDetailCard from "../exterierPage/ImageDetailCard";

interface InterierPageProps {}

const InterierPage = (props: InterierPageProps) => {
  const [imageOpen, setIsImageOpen] = useState(false);
  const dispatch = useDispatch();
  const imageClickHandler = (galleryImages: GalleryImage[], index: number) => {
    return dispatch(
      // @ts-ignore
      openModal(
        <ImageDetailCard galleryImages={galleryImages} initialSlide={index} />,
        {}
      )
    );
  };
  return (
    <section className="grow flex flex-col items-center  pt-8">
      <div className="pb-6">
        <span className="text-gray-800 text-4xl font-roboto uppercase font-semibold">
          Interiér Chaty
        </span>
      </div>
      <div className="container relative flex flex-col px-5 mx-auto py-2 grow items-start justify-start ">
        <div className="absolute inset-0 overflow-hidden">
          <div className="grid lg:grid-cols-4 grid-rows-3 lg:grid-rows-2 h-full w-full lg:pt-24 ">
            {imagesList2.map((galleryImage, index) => {
              return (
                <GalleryImageHolder
                  galleryImage={galleryImage}
                  key={index}
                  onClick={() => imageClickHandler(imagesList2, index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterierPage;
