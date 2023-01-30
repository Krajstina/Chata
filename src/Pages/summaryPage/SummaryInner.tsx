import React from "react";
import { formattedPrice } from "../../helpers/reseravtionUtils";
import { Room } from "../../interfaces/Room";

interface SummaryInnerProps {
  reservationRoom: Room;
  reservationDays: number;
}

const SummaryInner = (props: SummaryInnerProps) => {
  return (
    <div className="">
      <aside className="SummaryInner  font-bold font-roboto ">
        <dl className="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6 text-xl">
          <div className="flex items-center justify-between">
            <dt className="font-normal text-md">Izba</dt>
            <dd className="">{props.reservationRoom.label}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="font-normal text-md">Pocet noci</dt>
            <dd>{props.reservationDays}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="font-normal text-md">Cena za noc</dt>
            <dd>{props.reservationRoom.price }</dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <dt className="text-base font-medium">Total</dt>
            <dd>
              {" "}
              {formattedPrice(
                (props.reservationDays * props.reservationRoom.price)
              )}
            </dd>
          </div>
        </dl>
      </aside>
    </div>
  );
};

export default SummaryInner;
