import React, {useContext} from "react";
import {ReservationContext, ReservationContextType} from "../../App";
import SummaryInnerPopup from "../summaryPage/SummaryInnerPopup";
import {useTypedSelector} from "../../reducers/reducers";

interface ConfirmPopupProps {}

const ConfirmPopup = (props: ConfirmPopupProps) => {
  const reservationContext = useContext(
    ReservationContext
  ) as ReservationContextType;

  const reservationState = useTypedSelector((state) => state.reservationState);
  return (
    <div className="p-12 min-h-[900px] md:min-h-[600px]  sm:min-w-[500px] ">
      {!reservationContext.isSubmitting&&reservationContext.resRoom && (
        <SummaryInnerPopup
          resState={reservationState}
          reservationRoom={reservationContext.resRoom}
          reservationDays={reservationContext.reservationDays}
        />
      )}{reservationContext.isSubmitting&&(<div>loading</div>)}
    </div>
  );
};

export default ConfirmPopup;
