import { select, put, takeEvery } from "redux-saga/effects";

function* favorite(action) {
    const {
        favorites: { favorites },
    } = yield select();

    if (!favorites.includes(action.payload)) {
        yield put({ type: "ADD_FAVORITE_OFFER", payload: action.payload });
    } else {
        const removedFavorites = favorites.filter(
            (favorite) => favorite !== action.payload
        );

        yield put({ type: "REMOVE_FAVORITE_OFFER", payload: removedFavorites });
    }
}

function* favoriteSaga() {
    yield takeEvery("FAVORITE_REQUESTED", favorite);
}

export default favoriteSaga;
