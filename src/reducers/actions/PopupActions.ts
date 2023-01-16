export const SET_BLUR = "SET_BLUR";
export const OPEN_MODAL = "OPEN_MODAL";



export function setBlur(blur) {
    return {
        type: SET_BLUR,
        blur,
    };
}
export function openModal(component, props?: any) {
    return dispatch => {
        dispatch(setBlur(true));
        return dispatch({
            type: OPEN_MODAL,
            component,
            props,
            isOpen: true,
        });
    };
}

export function closeModal(force?: boolean) {
    return (dispatch, getState) => {
        const modal = getState().modal;

        dispatch(setBlur(false));
        return dispatch({
            type: OPEN_MODAL,
            component: null,
        });
    };
}