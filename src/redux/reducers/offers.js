import * as type from "../types";

const initialState = {
    offers: [],
    metaData: [],
    loading: false,
    error: null,
    nextPage: null,
};

export default function offers(state = initialState, action) {
    switch (action.type) {
        case type.GET_OFFERS_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case type.GET_OFFERS_SUCCESS:
            return {
                ...state,
                loading: false,
                offers: state.offers.concat(action.offers.offers),
                metaData: action.offers.metaData,
                nextPage: action.offers.metaData.cursor.nextPage,
            };
        case type.GET_OFFERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };
        default:
            return state;
    }
}
