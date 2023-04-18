import React from "react";
import "./App.css";
import TestDashboard from "./TestDashboard";
import { Box } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        sx={{ color: "white", backgroundColor: "green" }}
      >
        Unclassified
      </Box>
      <TestDashboard />
    </React.Fragment>
  );
}

export default App;
