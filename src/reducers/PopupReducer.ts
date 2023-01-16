import * as PopupActions from "./actions/PopupActions"

function modalReducer(state: null | any, action: any) {
    if (typeof state === "undefined") {
        return {
            component: null,
        };
    }
    if (action.type === PopupActions.OPEN_MODAL) {
        if (action.toggle) {
            if (state && state.component && state.component === action.component) {
                return {
                    component: null,
                    props: {
                        ...state.props,
                        ...(action.props || {}),
                    },
                    isOpen: !state.isOpen,
                };
            }
        }
        const newState = action.component
            ? {
                isOpen: true,
                ...action,
            }
            : {
                component: null,
                props: {},
            };

        return newState;
    } else {
        return state;
    }
}

export default modalReducer;