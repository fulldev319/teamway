import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div>
    <h1>Welcome to the Personality Test</h1>
    <Link to="/questions">Start Personality Test</Link>
  </div>
);

export default LandingPage;
