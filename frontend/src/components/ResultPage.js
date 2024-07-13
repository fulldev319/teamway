import React from "react";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const result = params.get("type");

  return (
    <div>
      <h1>Your Result</h1>
      <p>You are more of an {result}</p>
    </div>
  );
};

export default ResultPage;
