import { httpBase } from "./httpBaseUtil";

export const getReq = (
    endpoint = "/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien"
) => {
    const API = "https://api.holidu.com";
    return httpBase()
        .get(API + endpoint)
        .then((r) => r.data);
};
