import * as actionTypes from "./types";

export const hideOnboard = (hide) => (
    {
        type: actionTypes.hideOnboard,
        payload: hide,
    }
);
