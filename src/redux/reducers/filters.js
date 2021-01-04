import * as type from "../types";

const initialState = {
    filter: [],
};

export default function favorites(state = initialState, action) {
    switch (action.type) {
        case type.FILTER_REQUESTED:
            return {
                ...state,
            };
        case type.ADD_NEW_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
}
