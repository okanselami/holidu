import axios from "axios";

export const httpBase = (contentType) => {
    const api = axios.create({
        headers: {
            Accept: "application/json",
            "Content-Type": contentType || "application/json",
        },
        responseType: "json",
    });

    return api;
};
