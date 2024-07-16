import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";

const ResultPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const result = params.get("type");

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Your Result
        </Typography>
        <Typography variant="h5" color="red">
          You are more of an {result}
        </Typography>
      </Box>
    </Container>
  );
};

export default ResultPage;
