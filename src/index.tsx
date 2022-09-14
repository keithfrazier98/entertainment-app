import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactDOMClient from "react-dom/client";
import { GlobalProvider } from "./components/DataContext";

const container = document.getElementById("root");
// const container = body?.appendChild(document.createElement("div"))

if (!container) throw new Error("No body element was found in the document.");

const root = ReactDOMClient.createRoot(container);

root.render(
  <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
