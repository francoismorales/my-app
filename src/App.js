import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import LogIn from "./LogIn";
import MatrizRobot from "./MatrizRobot";
import esMessages from "./locales/es.json";
import enMessages from "./locales/en.json";

const messages = { es: esMessages, en: enMessages };

function App() {
  const [locale, setLocale] = useState("es");

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <div>
          <Routes>
            <Route index element={<LogIn />} />
            <Route path="/matrizRobot" element={<MatrizRobot />} />
          </Routes>
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;
