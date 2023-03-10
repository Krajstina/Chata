import "./App.css";
import FrontRoutes from "./Components/FrontRoutes";
import Popup from "./Components/Popup";
import { createContext, useState } from "react";
import { Reservation } from "./interfaces/Reservation";
import { useTypedSelector } from "./reducers/reducers";
import ReservationAction from "./reducers/actions/ReservationAction";
import { useDispatch } from "react-redux";
import {
  numberOfReservationDays,
  reservationRoom,
} from "./helpers/reseravtionUtils";
import { Room } from "./interfaces/Room";
import { addDaysToDate, menuScrollHandler } from "./helpers/utils";
import { ToastContainer } from "react-toast";

export interface ReservationContextType {
  defaultReservation: Reservation;
  reservation: Reservation | null;
  resRoom: Room | null;
  reservationDays: number;
  createNewReservationHandler: () => void;
  setReservationHandler: (reservation) => void;
  confirmReservationHandler: () => void;
  menuScrollHandler: (id: any) => void;
  isSubmitting: boolean;
}

export const ReservationContext = createContext<ReservationContextType | null>(
  null
);
const App = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const setReservation = async (reservation) => {
    return dispatch(ReservationAction.setReservation(reservation));
  };

  const onConfirmHandler = () => {
    setIsSubmitting(true);
    const timer = setTimeout(() => {
      dispatch(ReservationAction.resetReservation());
      setIsSubmitting(false);
      window.location.href = "/";
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  };
  const createNewReservation = () => {
    return dispatch(ReservationAction.setReservation(defaultReservation));
  };
  const defaultReservation: Reservation = {
    roomId: null,
    name: "",
    lastName: "",
    guests: null,
    dateFrom: new Date(),
    dateTo: addDaysToDate(new Date(), 1),
  };

  const reservationState = useTypedSelector((state) => state.reservationState);
  const reservationContextValue: ReservationContextType = {
    defaultReservation: defaultReservation,
    reservation: reservationState.reservation,
    resRoom: reservationRoom(reservationState.reservation),
    reservationDays: numberOfReservationDays(reservationState.reservation),
    createNewReservationHandler: createNewReservation,
    setReservationHandler: (reservation) => setReservation(reservation),
    confirmReservationHandler: onConfirmHandler,
    menuScrollHandler: menuScrollHandler,
    isSubmitting: isSubmitting,
  };
  return (
    <ReservationContext.Provider value={reservationContextValue}>
      <div className={"AppLayout flex w-screen overflow-x-hidden "}>
        <FrontRoutes />
        <Popup />
        <div className={"z-[100]"}>
          <ToastContainer />
        </div>
      </div>
    </ReservationContext.Provider>
  );
};

export default App;
