import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./LogIn";
import MatrizRobot from "./MatrizRobot";
import esMessages from "./locales/es.json";
import enMessages from "./locales/en.json";
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = { es: esMessages, en: enMessages };

function App() {
  const [locale, setLocale] = useState("es");
  const changeLanguage = (e) => {
    setLocale(e.target.value);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <div>
        <label>
          <FormattedMessage id="app.language" defaultMessage="Idioma" />:
          <select onChange={changeLanguage} value={locale}>
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </label>
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
