// src/components/AddQuestionForm.js
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddQuestionForm = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([""]);
  const [message, setMessage] = useState("");

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, event) => {
    const newOptions = options.slice();
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/questions", {
        question,
        options,
      });
      setMessage(response.data.message);
      setQuestion("");
      setOptions([""]);
    } catch (error) {
      setMessage("Failed to add question.");
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, p: 4 }}>
      <Typography variant="h6">Add New Question</Typography>
      <TextField
        fullWidth
        label="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        sx={{ mt: 2 }}
      />
      {options.map((option, index) => (
        <TextField
          key={index}
          fullWidth
          label={`Option ${index + 1}`}
          value={option}
          onChange={(e) => handleOptionChange(index, e)}
          sx={{ mt: 2 }}
        />
      ))}
      <Button
        variant="outlined"
        color="primary"
        onClick={handleHome}
        sx={{ mt: 2 }}
      >
        Back
      </Button>
      <Button
        variant="contained"
        onClick={handleAddOption}
        sx={{ mt: 2, ml: 2 }}
      >
        Add Option
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2, ml: 2 }}
      >
        Submit
      </Button>
      {message && (
        <Typography variant="body2" color="info" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default AddQuestionForm;
