import React, { useContext, useState } from "react";
import { formattedPrice } from "../../helpers/reseravtionUtils";
import { Room } from "../../interfaces/Room";
import { ReservationState } from "../../reducers/ReservationReducer";
import { ReservationContext, ReservationContextType } from "../../App";
import { useDispatch } from "react-redux";

interface SummaryInnerPopupProps {
  reservationRoom: Room;
  reservationDays: number;
  resState: ReservationState;
}

const SummaryInnerPopup = (props: SummaryInnerPopupProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();

  const reservationContext = useContext(
    ReservationContext
  ) as ReservationContextType;

  return (
    <div className="min-h-[100px]">
      <aside className="SummaryInnerPopup text-md  font-bold font-roboto flex flex-col space-y-4">
        <h1 className="text-2xl mb-3 ">Ďakujeme za vašu rezerváciu!</h1>
        <p className="mb-3">Rezerváciu Vám posleme na emailovú adresu</p>
        <p className="text-sm">Prehľad Vašej rezervácie:</p>
        <br />
        <dl className="space-y-6  border-t border-gray-200 py-6 px-4 sm:px-6 mt-6">
          <div className="flex items-center justify-between">
            <dt className="font-normal">Rezervovateľ</dt>
            <dd className="">
              {props.resState.reservation?.name}{" "}
              {props.resState.reservation?.lastName}
            </dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="font-normal">Počet hostí</dt>
            <dd className="">{props.resState.reservation?.guests} </dd>
          </div>

          <div className="flex items-center justify-between">
            <dt className="font-normal">Pocet noci</dt>
            <dd>{props.reservationDays}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="font-normal">Izba</dt>
            <dd>{props.reservationRoom.id}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="font-normal">Cena za noc</dt>
            <dd>{props.reservationRoom.price}</dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <dt className="text-xl font-medium">Total</dt>
            <dd className="text-xl">
              {formattedPrice(
                props.reservationDays * props.reservationRoom.price
              )}
            </dd>
          </div>
        </dl>
      </aside>
      <div className=" absolute  lg:min-w-[400px] rounded-lg lg:p-6 lg:left-12 p-2 bg-green-800 bottom-5 right-10 ">
        <button
          type={"submit"}
          onClick={reservationContext.confirmReservationHandler}
          className="lg:text-xl text-white font-bold font-roboto"
        >
          Dokončiť
        </button>
      </div>
    </div>
  );
};

export default SummaryInnerPopup;
