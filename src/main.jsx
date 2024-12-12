import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

import { AuthProvider } from "react-oidc-context";

import { Provider } from "react-redux";
import store from "./ReduxStore/appStore.js";

const cognitoAuthConfig = {
  authority:
    "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_sYO4lgO3T",
  client_id: "44atgttl25bga3nahgbvgf54kv",
  redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "email openid phone",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider {...cognitoAuthConfig}>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
