import React from "../_snowpack/pkg/react";
import ReactDOM from "../_snowpack/pkg/react-dom";
import "./index.css.proxy.js";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker.js";
import debounce from "../_snowpack/pkg/lodash-es/debounce";
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
serviceWorker.unregister();
debounce(() => {
  console.log("lodash devounced");
});
