import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from './LogIn';
import MatrizRobot from './MatrizRobot';


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LogIn />} />
        <Route path="/matrizRobot" element={<MatrizRobot />} />
      </Routes>
    </Router>
  );
}

export default App;
