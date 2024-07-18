import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./Resources/fonts/walsheim/GTWalsheimPro-Medium.ttf";
import "./Resources/fonts/walsheim/GTWalsheimPro-Regular.ttf";
import "./Resources/fonts/walsheim/GTWalsheimPro-Light.ttf";
import "./Resources/fonts/walsheim/GTWalsheimPro-Bold.ttf";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-ox710sb7vz2anbkm.us.auth0.com"
    clientId="bAa1Tnpw1pJ8zTGYDrj7S1XIY5aCKsxa"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/react-ecommerce-store", // Ensure this matches the allowed callback URL in Auth0
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
