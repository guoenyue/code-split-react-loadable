import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import Routers from "./js/Routers";
import Store from "./js/Store";

ReactDOM.render(
    (<Provider store={Store}><Routers/></Provider>),
    document.getElementById("root")
);