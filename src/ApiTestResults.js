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
import "./App.css";
function ApiTestResults() {
  const [ufsDiscussionResults, setUfsDiscussionResults] = React.useState([]);
  const [srwDiscussionResults, setSrwDiscussionResults] = React.useState([]);
  const [srwIssueResults, setSrwIssueResults] = React.useState([]);

  const panels = [
    {
      title: 'Panel 1',
      content: (
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
            </tr>
          </tbody>
        </table>
      )
    },
    {
      title: 'Panel 2',
      content: (
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
            </tr>
          </tbody>
        </table>
      )
    }
  ];

  const getRowClass = (answer) => {
    if (answer === "Yes") {
      return 'green-row';
    } else {
      return 'red-row';
    }
  };

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://epic-sandbox-srw.s3.amazonaws.com/discussion-data.json');
      const ufsDiscussionjsonData = await response.json();
      setUfsDiscussionResults(ufsDiscussionjsonData);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://epic-sandbox-srw.s3.amazonaws.com/discussion-srw-data.json');
      const srwDiscussionjsonData = await response.json();
      setSrwDiscussionResults(srwDiscussionjsonData);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://epic-sandbox-srw.s3.amazonaws.com/issue-srw-data.json');
      const srwIssuejsonData = await response.json();
      setSrwIssueResults(srwIssuejsonData);
    }
    fetchData();
  }, []);

      return (
        <div className="App">
        <div>
        <table style={{ border: "1px solid black" }}>
      <thead>
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "1px solid black" }}>Repository</th>
          <th style={{ border: "1px solid black" }}>Index</th>
          <th style={{ border: "1px solid black" }}>UFS Community Discussions</th>
          <th style={{ border: "1px solid black" }}>Initial Answer</th>
          <th style={{ border: "1px solid black" }}>ISO Date Time</th>
          <th style={{ border: "1px solid black" }}>Complete Flag</th>
        </tr>
      </thead>
      <tbody>
        {ufsDiscussionResults.map((row) => (
          <tr key={row.index} className={getRowClass(row.initial_answer)} style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>{row.repository}</td>
            <td style={{ border: "1px solid black" }}>{row.index}</td>
            <td style={{ border: "1px solid black" }}><a href={row.github_url} target="_blank" rel="noopener noreferrer">{row.github_url}</a></td>
            <td style={{ border: "1px solid black" }}>{row.initial_answer}</td>
            <td style={{ border: "1px solid black" }}>{row.iso_date_time}</td>
            <td style={{ border: "1px solid black" }}>{row.complete_flag}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div><table style={{ border: "1px solid black" }}>
      <thead>
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "1px solid black" }}>Repository</th>
          <th style={{ border: "1px solid black" }}>Index</th>
          <th style={{ border: "1px solid black" }}>Post Type</th>
          <th style={{ border: "1px solid black" }}>SRW Discussions</th>
          <th style={{ border: "1px solid black" }}>Initial Answer</th>
          <th style={{ border: "1px solid black" }}>ISO Date Time</th>
          <th style={{ border: "1px solid black" }}>Complete Flag</th>
        </tr>
      </thead>
      <tbody>
        {srwDiscussionResults.map((row) => (
          <tr key={row.index} className={getRowClass(row.initial_answer)} style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>{row.repository}</td>
            <td style={{ border: "1px solid black" }}>{row.index}</td>
            <td style={{ border: "1px solid black" }}>{row.post_type}</td>
            <td style={{ border: "1px solid black" }}><a href={row.github_url} target="_blank" rel="noopener noreferrer">{row.github_url}</a></td>
            <td style={{ border: "1px solid black" }}>{row.initial_answer}</td>
            <td style={{ border: "1px solid black" }}>{row.iso_date_time}</td>
            <td style={{ border: "1px solid black" }}>{row.complete_flag}</td>
          </tr>
        ))}
      </tbody>
    </table></div>
    <div><table style={{ border: "1px solid black" }}>
      <thead>
        <tr style={{ border: "1px solid black" }}>
          <th style={{ border: "1px solid black" }}>Repository</th>
          <th style={{ border: "1px solid black" }}>Index</th>
          <th style={{ border: "1px solid black" }}>Post Type</th>
          <th style={{ border: "1px solid black" }}>SRW Issues</th>
          <th style={{ border: "1px solid black" }}>Initial Answer</th>
          <th style={{ border: "1px solid black" }}>ISO Date Time</th>
          <th style={{ border: "1px solid black" }}>Complete Flag</th>
        </tr>
      </thead>
      <tbody>
        {srwIssueResults.map((row) => (
          <tr key={row.index} className={getRowClass(row.initial_answer)} style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>{row.repository}</td>
            <td style={{ border: "1px solid black" }}>{row.index}</td>
            <td style={{ border: "1px solid black" }}>{row.post_type}</td>
            <td style={{ border: "1px solid black" }}><a href={row.github_url} target="_blank" rel="noopener noreferrer">{row.github_url}</a></td>
            <td style={{ border: "1px solid black" }}>{row.initial_answer}</td>
            <td style={{ border: "1px solid black" }}>{row.iso_date_time}</td>
            <td style={{ border: "1px solid black" }}>{row.complete_flag}</td>
          </tr>
        ))}
      </tbody>
    </table></div>
    </div>
      );
  }

export default ApiTestResults;
