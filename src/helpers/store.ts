import {applyMiddleware, compose, createStore} from "redux";
import {loadState, saveState} from "../reducers/helpers/helper";
import reducers from "../reducers/reducers";
import thunk, {ThunkAction} from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";


export const clearLocalStorage = () => {
    console.log('clear local storage');
    localStorage.clear();
    // @ts-ignore
    // window.location.reload(true);
}

export const clearCache = () => {
    if (caches) {
        // Service worker cache should be cleared with caches.delete()
        caches?.keys().then((names) => {
            for (const name of names) {
                caches.delete(name);
            }
        });
    }
}


const persistedState = loadState();

// @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
    trace: true,
    traceLimit: 50
}) || compose;
const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState());
});

type MyThunkResult<R> = ThunkAction<R, any, any, any>;

export type AppDispatch = typeof store.dispatch | MyThunkResult<Promise<any>>;
export default store;