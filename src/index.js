import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";
// import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const domain = process.env.REACT_APP_AUTH_DOMAIN;
// const clientId = process.env.REACT_APP_CLIENT_ID;
root.render(
  // <Auth0Provider
  //   domain={domain}
  //   clientId={clientId}
  //   redirectUri={window.location.origin}
  // >
  <Provider store={store}>
    <App />
  </Provider>
  // </Auth0Provider>
);
