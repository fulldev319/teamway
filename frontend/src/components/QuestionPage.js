import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/questions")
      .then((response) => setQuestions(response.data));
  }, []);

  const handleAnswerChange = (questionId, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionId - 1] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    axios.post("http://localhost:5000/submit", { answers }).then((response) => {
      navigate(`/result?type=${response.data.result}`);
    });
  };

  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>
          {question.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={index}
                onChange={() => handleAnswerChange(question.id, index)}
              />
              {option}
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuestionPage;
