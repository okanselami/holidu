import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";

import { ThemeProvider } from "styled-components";

import theme from "./theme";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
