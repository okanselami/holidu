import { put, takeEvery } from "redux-saga/effects";

function* filter(action) {
    const filters = action.payload.reduce(
        (result, item) => ({
            ...result,
            [item["details"]["apartmentTypeTitle"]]: [
                ...(result[item["details"]["apartmentTypeTitle"]] || []),
                item,
            ],
        }),
        {}
    );
    yield put({ type: "ADD_NEW_FILTER", payload: filters });
}

function* filterSaga() {
    yield takeEvery("FILTER_REQUESTED", filter);
}

export default filterSaga;
