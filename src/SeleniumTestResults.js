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
function SeleniumTestResults() {
  const [testResults, setTestResults] = React.useState({});

  const getRowColor = (testResult) => {
    if (!testResult.toLowerCase().includes("error")) {
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
      "https://epic-sandbox-srw.s3.amazonaws.com/selenium-data.json",
      { headers: fetchHeaders }
    ).then((res) => res.json().then((data) => setTestResults(data)));
  }, []); //eslint-disable-line

  let resultsBody;
  let testSuites = [];
  let overallStatus;

  if (Object.keys(testResults).length > 0) {
    resultsBody = testResults.body;
    testSuites = Object.keys(resultsBody);
    overallStatus = testResults.statusCode;

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
                  Selenium Test Results
                </Typography>
                <Typography fontSize="18px">
                  Latest Run: {testResults.time_ran}
                </Typography>
              </Box>
              <Box
                padding="5px"
                border="1px solid black"
                backgroundColor={
                  overallStatus === 200 ? "lightgreen" : "lightpink"
                }
              >
                <Typography fontWeight="bold" fontSize="18px">
                  Overall EPIC Selenium Test Status:{" "}
                  {overallStatus === 200 ? "Success" : "Failure"}
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
                      {resultsBody[testSuite] &&
                      typeof resultsBody[testSuite].result_list === "object" ? (
                        resultsBody[testSuite].result_list.map((testResult) => {
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
                      ) : resultsBody[testSuite] &&
                        typeof resultsBody[testSuite].result_list ===
                          "string" ? (
                        <Box
                          display="flex"
                          alignItems="center"
                          minHeight="50px"
                          border="1px solid black"
                          style={{
                            backgroundColor: getRowColor(
                              resultsBody[testSuite].result_list
                            ),
                          }}
                        >
                          <Typography sx={{ padding: "10px" }}>
                            {resultsBody[testSuite].result_list}
                          </Typography>
                        </Box>
                      ) : null}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </ResultsBox>
        </ResultsBoxWrapper>
      );
    }
  }
}

export default SeleniumTestResults;
