import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import QuestionPage from "./components/QuestionPage";
import ResultPage from "./components/ResultPage";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/questions" component={QuestionPage} />
      <Route path="/result" component={ResultPage} />
    </Switch>
  </Router>
);

export default App;
