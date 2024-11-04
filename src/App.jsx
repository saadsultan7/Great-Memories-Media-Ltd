import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import QuotePage from "./components/Quote-page";
import Calculator from "./components/Calculator";

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quote" element={<QuotePage />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </Router>
  );
}
