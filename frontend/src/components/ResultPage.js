import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const result = params.get("type");

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Your Result
        </Typography>
        <Typography variant="h5" color="red">
          You are more of an {result}
        </Typography>
        <Box textAlign="center" mt={5}>
          <Button variant="contained" color="primary" onClick={handleHome}>
            Return to Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ResultPage;
