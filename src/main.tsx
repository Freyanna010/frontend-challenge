import { Provider as StoreProvider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import "./index.css";
import App from "./component/App/App.tsx";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/frontend-challenge">
    <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  </BrowserRouter>

);
