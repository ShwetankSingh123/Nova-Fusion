import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { store } from "./app/store";
import { FirebaseProvider } from "./context/Firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-b6h6sfcivlhkmdly.us.auth0.com"
    clientId="F1RuPRar1E4hBw9mWRrKRBm5qIPFkq5c"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <Provider store={store}>
        <FirebaseProvider>
          <App />
        </FirebaseProvider>
      </Provider>
    </React.StrictMode>
  </Auth0Provider>
);

reportWebVitals();
