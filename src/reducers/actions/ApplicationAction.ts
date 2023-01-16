import {Application, ReducerApplicationSetApplicationAction,} from "../ApplicationReducer";
import {createAction} from "../helpers/createAction";

class ApplicationAction {
    static readonly SET_APPLICATION = "ApplicationAction.SetApplication";

    static setApplication = (
        application: Application
    ): ReducerApplicationSetApplicationAction => {
        return createAction(ApplicationAction.SET_APPLICATION, application);
    };

    static fetchApplication = () => {
        return (dispatch, getState) => {
            const applicationData = {
                version: "0.0.2",
                checksum: "madafaka",
            }
            dispatch(ApplicationAction.setApplication(applicationData))

        }
    }
}

export default ApplicationAction;
