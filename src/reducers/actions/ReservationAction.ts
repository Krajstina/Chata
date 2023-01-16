import {createAction} from "../helpers/createAction";
import {Reservation} from "../../interfaces/Reservation";
import {
  ReducerReservationPushAction,
  ReducerReservationResetAction,
  ReducerReservationSetAction
} from "../ReservationReducer";

class ReservationAction {
  static readonly SET_RESERVATION = "ReservationAction.SetReservation";
  static readonly PUSH_RESERVATION = "ReservationAction.PushReservation";
  static readonly RESET_RESERVATION = "ReservationAction.ResetReservation";

  static setReservation = (
    reservation: Reservation
  ): ReducerReservationSetAction => {
    return createAction(ReservationAction.SET_RESERVATION, reservation);
  };

  static pushReservation = (
    reservation: Reservation
  ): ReducerReservationPushAction => {
    return createAction(ReservationAction.PUSH_RESERVATION, reservation);
  };
  static resetReservation = (
  ):  ReducerReservationResetAction => {
    return createAction(ReservationAction.RESET_RESERVATION, null);
  };
}
export default ReservationAction;
