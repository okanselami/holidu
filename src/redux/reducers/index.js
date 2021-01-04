import { combineReducers } from "redux";

import offers from "./offers";
import favorites from "./favorites";
import filters from "./filters";

const rootReducer = combineReducers({
    offers: offers,
    favorites: favorites,
    filters: filters,
});

export default rootReducer;
