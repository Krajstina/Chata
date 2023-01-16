import * as Actions from "./actionTypes"

export function setError(message:any) {
    return {
        type: Actions.SET_MESSAGE,
        message,
        messageType: "error",
    };
}

export function setDebug(data:any) {
    return {
        type: Actions.SET_DEBUG,
        data: data,
    };
}

export function addFlashMessage(message:any, messageType:any) {
    return {
        type: Actions.SET_MESSAGE,
        message,
        messageType,
    };
}

export function setSuccess(message:any) {
    return {
        type: Actions.SET_MESSAGE,
        message,
        messageType: "success",
    };
}

export function setAjaxLoading(loading:any, url:any) {
    return {
        type: Actions.AJAX_LOADING,
        loading,
        url,
    };
}