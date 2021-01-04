import { call, put, takeEvery } from "redux-saga/effects";
import { getReq } from "../../utils/httpUtil";

function* fetchOffers(action) {
    try {
        const offers = yield call(getReq, action.payload);
        yield put({ type: "GET_OFFERS_SUCCESS", offers: offers });
    } catch (error) {
        yield put({ type: "GET_OFFERS_FAILED", message: error.message });
    }
}

function* offersSaga() {
    yield takeEvery("GET_OFFERS_REQUESTED", fetchOffers);
}

export default offersSaga;
