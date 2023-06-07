import React from "react";
import ReactDOM from "react-dom/client.js";
import App from "./App.jsx";
import "/node_modules/normalize.css/normalize.css";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "http://e8274302ae0e4c2aa79318e776f41bc1@localhost:9000/2",
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/sgvn-be\.com\/api/],
    }),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 1.0,
  environment: "dev",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
