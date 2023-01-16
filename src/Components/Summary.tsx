import React, {useContext} from "react";
import {numberOfReservationDays, reservationRoom,} from "../helpers/reseravtionUtils";
import {ReservationContext, ReservationContextType} from "../App";
import SummaryInner from "./SummaryInner";

interface SummaryProps {}

const Summary = (props: SummaryProps) => {
  const reservationContext = useContext(
    ReservationContext
  ) as ReservationContextType;

const resRoom= reservationRoom(reservationContext.reservation)

  const reservationDays = numberOfReservationDays(
    reservationContext.reservation
  );

  return (
    <div className="Summary w-full sm:min-w-[400px] font-roboto font-medium text-white text-md bg-orange-400 p-6 sm:p-12 shadow-gray-600/50 shadow-lg rounded-lg">
      {resRoom && (
<SummaryInner reservationRoom={resRoom} reservationDays={reservationDays}/>
      )}
    </div>
  );
};

export default Summary;
