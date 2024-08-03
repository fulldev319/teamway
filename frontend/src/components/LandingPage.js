import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    // return;
  }

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Personality Test
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/questions"
          sx={{ mt: 2 }}
        >
          Start Personality Test
        </Button>
        <Button
          component={Link}
          to="/add-question"
          variant="contained"
          sx={{ mt: 2, ml: 2 }}
        >
          Add New Question
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
