import React from "react";
import { ResultsBox, ResultsBoxWrapper } from "./ResultsBox";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function IntegrationTestResults() {
  const [testResults, setTestResults] = React.useState({});

  const getRowColor = (testResult) => {
    if (testResult.includes("success")) {
      return "lightgreen";
    } else {
      return "lightpink";
    }
  };

  const fetchHeaders = {
    "cache-control": "no-store",
  };

  React.useEffect(() => {
    fetch(
      "https://spire-test-dashboard.s3-us-gov-west-1.amazonaws.com/test-results/integration-test-result.json",
      { headers: fetchHeaders }
    ).then((res) => res.json().then((data) => setTestResults(data)));
  }, []); //eslint-disable-line

  let resultsBody;
  let testSuites = [];
  let overallStatus = "";

  if (Object.keys(testResults).length > 0) {
    resultsBody = testResults.body;
    Object.keys(resultsBody).forEach((key) => {
      if (key !== "Overall SPIRE Status") {
        testSuites.push(key);
      } else {
        overallStatus = resultsBody[key];
      }
    });
    if (resultsBody) {
      return (
        <ResultsBoxWrapper>
          <ResultsBox>
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" flexDirection="column">
                <Typography fontWeight="bold" fontSize="18px">
                  Integration Test Results
                </Typography>
                <Typography fontSize="18px">
                  Latest Run: {testResults.time_ran}
                </Typography>
              </Box>
              <Box
                padding="5px"
                border="1px solid black"
                backgroundColor={
                  overallStatus === "Success" ? "lightgreen" : "lightpink"
                }
              >
                <Typography fontWeight="bold" fontSize="18px">
                  Overall EPIC Integration Test Status: {overallStatus}
                </Typography>
              </Box>
            </Box>
            {testSuites.map((testSuite) => {
              return (
                <Accordion
                  defaultExpanded
                  sx={{ width: "100%", backgroundColor: "lightGray" }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{testSuite}</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ padding: "0px", backgroundColor: "white" }}
                  >
                    <Box display="flex" flexDirection="column" gap="10px">
                      {resultsBody[testSuite]
                        ? resultsBody[testSuite][0].map((testResult) => {
                            return (
                              <Box
                                display="flex"
                                alignItems="center"
                                minHeight="50px"
                                border="1px solid black"
                                style={{
                                  backgroundColor: getRowColor(testResult),
                                }}
                              >
                                <Typography sx={{ padding: "10px" }}>
                                  {testResult}
                                </Typography>
                              </Box>
                            );
                          })
                        : null}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </ResultsBox>
        </ResultsBoxWrapper>
      );
    } else {
      return null;
    }
  }
}

export default IntegrationTestResults;
