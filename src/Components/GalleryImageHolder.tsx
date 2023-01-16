import React from "react";
import {GalleryImage} from "../interfaces/GalleryImage";
import clsx from "clsx";

export interface GalleryImageHolderProps {
  galleryImage: GalleryImage;
  onClick: any;
}

const GalleryImageHolder = (props: GalleryImageHolderProps) => {

  return (
    <div className={clsx("GalleryImageHolder", props.galleryImage.colspan)}>
      <div className="col-span-2 p-1 overflow-hidden h-full ">
        <button type="button" className={"h-full w-full"} onClick={props.onClick}>
          <img
            src={props.galleryImage.image}
            alt={""}
            className="block object-cover  w-full h-full rounded-lg"
          />
        </button>
      </div>
    </div>
  );
};

export default GalleryImageHolder;
