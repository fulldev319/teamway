import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

const LandingPage = () => (
  <Container maxWidth="sm">
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Personality Test
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/questions"
      >
        Start Personality Test
      </Button>
    </Box>
  </Container>
);

export default LandingPage;
