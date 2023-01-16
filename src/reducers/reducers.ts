import {combineReducers} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import ApplicationReducer from "./ApplicationReducer";
import ReservationReducer from "./ReservationReducer";
import modalReducer from "./PopupReducer";
import * as PopupActions from "./actions/PopupActions"


export const plainSet = (state:any, defaultState:any, action:any, actionType:any, setTo:any) => {
    if (typeof state === "undefined") {
        return defaultState;
    }

    if (action.type === actionType) {
        return setTo;
    } else {
        return state;
    }
};

const blur = (state = false, action) => plainSet(state, false, action, PopupActions.SET_BLUR, action.blur);

const reducers = combineReducers({
    modalState: modalReducer,
    blur: blur,
    appState: new ApplicationReducer().reducer,
    reservationState: new ReservationReducer().reducer,
});

export type RootState = ReturnType<typeof reducers>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default reducers;
