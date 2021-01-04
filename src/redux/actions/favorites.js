import * as type from "../types";

export function favoriteOffer(offer) {
    return {
        type: type.FAVORITE_REQUESTED,
        payload: offer,
    };
}
