import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index.js";

import CreateSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = CreateSagaMiddleware();
const store = compose(applyMiddleware(sagaMiddleware))(createStore)(
    rootReducer
);

sagaMiddleware.run(rootSaga);

export default store;
