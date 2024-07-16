import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";

const QuestionPage = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/questions")
      .then((response) => {
        setQuestions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the questions!", error);
        setLoading(false);
      });
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
    <Container maxWidth="md">
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        questions.map((question) => (
          <Box key={question.id} mt={5}>
            <FormControl component="fieldset">
              <FormLabel component="legend">{question.question}</FormLabel>
              <RadioGroup
                name={`question-${question.id}`}
                onChange={(e) =>
                  handleAnswerChange(question.id, parseInt(e.target.value))
                }
              >
                {question.options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={index}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        ))
      )}
      {!loading && (
        <Box textAlign="center" my={5}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default QuestionPage;
