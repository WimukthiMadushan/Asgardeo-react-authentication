import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Container,
} from "@mui/material";

const ContainerPage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ width: 350, boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title="Welcome to Asgardeo Auth App" />
        <CardContent>
          <Typography variant="body1">
            You have successfully logged in. You can Access this Page
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContainerPage;
