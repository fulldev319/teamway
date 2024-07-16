import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import QuestionPage from "./components/QuestionPage";
import ResultPage from "./components/ResultPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/questions" element={<QuestionPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  </Router>
);

export default App;
