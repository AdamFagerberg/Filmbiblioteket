import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { initGA } from "./utils/analytics.js";
import { initGoogleTM } from "./utils/googleTM.js";
import App from "./App.jsx";
import "./index.css";

initGA();
initGoogleTM();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
