import React, {useState} from "react";
import GalleryImageHolder from "../../Components/GalleryImageHolder";
import {GalleryImage} from "../../interfaces/GalleryImage";
import {imagesList} from "../../reducers/helpers/helper";
import {useDispatch} from "react-redux";
import {openModal} from "../../reducers/actions/PopupActions";
import ImageDetailCard from "./ImageDetailCard";

interface ExterierPageProps {}

const ExterierPage = (props: ExterierPageProps) => {
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
      <div className="lg:pb-6">
        <span className="text-gray-800  text-3xl lg:text-4xl font-roboto uppercase font-semibold">
          Exteriér Chaty
        </span>
      </div>
      <div className="container relative flex flex-col px-5 mx-auto py-2  grow items-start justify-start ">
        <div className="absolute inset-0 overflow-hidden">
          <div className="grid lg:grid-rows-2  grid-rows-3 lg:grid-cols-4 h-full w-full lg:pt-24">
            {imagesList.map((galleryImage, index) => {
              return (
                <GalleryImageHolder
                  galleryImage={galleryImage}
                  key={index}
                  onClick={() => imageClickHandler(imagesList, index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExterierPage;
