import React from "react";
import { eventy } from "../../helpers/utils";

interface EventsCardProps {}

const EventsCard = (props: EventsCardProps) => {
  return (
    <div className="mx-auto max-w-xl   py-6 lg:py-16 px-4 sm:pt-8 sm:px-6 lg:max-w-[1800px] lg:px-8">
      <h2 className="text-xl text-center font-medium text-gray-900">Nasa ponuka</h2>
      <p className="mt-4 text-center text-base text-gray-500">
        Zabezpečujeme organizovanie osláv, stretávok, rodinné posedenia…
      </p>

      <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        {eventy.map((category) => (
          <div key={category.id} className="">
            <div className="  overflow-hidden rounded-lg group-hover:opacity-75 lg:min-w-5 lg:min-h-6">
              <img
                src={category.imageSrc}
                alt=""
                className="h-[400px] w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-center text-gray-900">
              {category.name}
            </h3>
            <p className="mt-2 text-sm text-center text-gray-500">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCard;
