import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import QuestionPage from "./components/QuestionPage";
import ResultPage from "./components/ResultPage";

const App = () => (
  <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" exact component={LandingPage} />
        <Route path="/questions" component={QuestionPage} />
        <Route path="/result" component={ResultPage} />
      </Routes>
    </Router>
  </BrowserRouter>
);

export default App;
