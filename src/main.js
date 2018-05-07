import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";

import { App } from "./app";
import { store } from "./store";

const hello = "Hello world!";

const render = () => {
    ReactDOM.render(
        <App store={store} hello={hello} />,
        document.querySelector("#app")
    );
};

store.subscribe(render);
render();

module.hot.accept();