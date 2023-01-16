import update from "immutability-helper";
import {Reservation} from "../interfaces/Reservation";
import ReservationAction from "./actions/ReservationAction";

export interface ReservationState {
  reservation: Reservation | null;
}

export interface ReducerReservationPushAction {
  payload: Reservation;
  type: typeof ReservationAction.PUSH_RESERVATION;
}
export interface ReducerReservationSetAction {
  payload: Reservation;
  type: typeof ReservationAction.SET_RESERVATION;
}
export interface ReducerReservationResetAction {
  payload: null;
  type: typeof ReservationAction.RESET_RESERVATION;
}
type ReducerReservationAction =
  | ReducerReservationPushAction
  | ReducerReservationSetAction
  | ReducerReservationResetAction;

class ReservationReducer {
  initialState: ReservationState = {
    reservation: null,
  };
  reducer = (
    state: ReservationState = this.initialState,
    action: ReducerReservationAction
  ) => {
    switch (action.type) {
      case ReservationAction.PUSH_RESERVATION:
      case ReservationAction.SET_RESERVATION:
        return update(state, {
          reservation: {
            $set: action.payload,
          },
        });
      case ReservationAction.RESET_RESERVATION:
        return this.initialState
      default:
        return state;
    }
  };
}

export default ReservationReducer;
