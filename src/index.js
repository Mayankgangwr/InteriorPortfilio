import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
//import Banner1 from "./banner1";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
