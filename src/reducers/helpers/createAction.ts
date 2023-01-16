export interface Action<T, P> {
    type: T;
    payload: P;
    error?: any;
    meta?: any;
}

export function createAction<T, P>(type: T, payload: P, error = false, meta = null): Action<T, P> {
    return {
        type,
        payload,
        error,
        meta,
    };
}