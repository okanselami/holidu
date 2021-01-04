import * as type from "../types";

const initialState = {
    favorites: [],
};

export default function favorites(state = initialState, action) {
    switch (action.type) {
        case type.FAVORITE_REQUESTED:
            return {
                ...state,
            };
        case type.ADD_FAVORITE_OFFER:
            return {
                ...state,
                favorites: state.favorites.concat(action.payload),
            };
        case type.REMOVE_FAVORITE_OFFER:
            return {
                ...state,
                favorites: action.payload,
            };
        default:
            return state;
    }
}
