import * as actionTypes from "../actions/types";

const initialState = {
    darktheme: false,
    hideOnboard: false,
    amadeustoken: false,
    amadeusclientid: "NGeC9Nn2TOk2HUjDYePcxQXON5EHIwGS",
    amadeusclientsecrate: "x9cWptPZV6rodwjP",
    amadeusgranttype: "client_credentials",
};

const preferenceReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.toggleTheme:
            let loadtheme = !state.darktheme;
            return {
                ...state,
                darktheme: loadtheme
            };
        case actionTypes.hideOnboard:
            return {
                ...state,
                hideOnboard: action.payload
            };
        case actionTypes.setAmadeusToken:
            return {
                ...state,
                amadeustoken: action.payload
            };
        default:
            return state;
    }
}

export default preferenceReducer;
