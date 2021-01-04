import * as type from "../types";

export function getOffers(offers) {
    return {
        type: type.GET_OFFERS_REQUESTED,
        payload: offers,
    };
}
