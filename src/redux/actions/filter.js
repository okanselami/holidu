import * as type from "../types";

export function getFilters(offers) {
    return {
        type: type.FILTER_REQUESTED,
        payload: offers,
    };
}
