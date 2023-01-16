import update from "immutability-helper";
import ApplicationAction from "./actions/ApplicationAction";

export interface Application {
    version: string | null;
    checksum: string | null;
}

interface ApplicationState {
    application: Application;
}

export interface ReducerApplicationSetApplicationAction {
    payload: Application;
    type: typeof ApplicationAction.SET_APPLICATION;
}

type ReducerApplicationAction = ReducerApplicationSetApplicationAction;

class ApplicationReducer {
    initialState: ApplicationState = {
        application: {
            version: null,
            checksum: null,
        },
    };

    reducer = (
        state: ApplicationState = this.initialState,
        action: ReducerApplicationAction
    ) => {
        switch (action.type) {
            case ApplicationAction.SET_APPLICATION:
                return update(state, {
                    application: {
                        $set: action.payload,
                    },
                });
            default:
                return state;
        }
    };
}

export default ApplicationReducer;
