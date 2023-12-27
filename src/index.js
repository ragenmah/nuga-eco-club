import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import languages from "./_mock/languages";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import i18nBackend from "i18next-http-backend";

const fallbackLng = ["en"];
const availableLanguages = ["en", "np"];
i18n
  //   .use(i18nBackend)
  .use(initReactI18next)
  .init({
    resources: languages,
    lng: "en",
    fallbackLng: "en",
    // whitelist: availableLanguages,
    interpolation: {
      escapeValue: true,
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
