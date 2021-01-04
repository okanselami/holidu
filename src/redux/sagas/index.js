import { all } from "redux-saga/effects";

import offersSaga from "./offersSaga";
import favoriteSaga from "./favoriteSaga";
import filterSaga from "./filterSaga";

export default function* rootSaga() {
    yield all([offersSaga(), filterSaga(), favoriteSaga()]);
}
