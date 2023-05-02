import React from "react";
import ItemDataGrid from "./ItemDataGrid";
import "./App.css";

const discussionEndpoints = [
  'https://epic-sandbox-srw.s3.amazonaws.com/discussion-data.json',
  'https://epic-sandbox-srw.s3.amazonaws.com/discussion-srw-data.json',
  'https://epic-sandbox-srw.s3.amazonaws.com/discussion-upp-data.json'
];

const issueEndpoints = [
  'https://epic-sandbox-srw.s3.amazonaws.com/issue-srw-data.json',
  'https://epic-sandbox-srw.s3.amazonaws.com/issue-upp-data.json'
];

function ApiTestResults() {
    return (
      <div style={{ padding: 30 }}>
        <div>
          <h1>Discussions</h1>
          <p>Includes: ufs-community, ufs-srweather-app, UPP</p>
          <ItemDataGrid endpoints={discussionEndpoints} />
        </div>
        <div>
          <h1>Issues</h1>
          <p>Includes: ufs-community, ufs-srweather-app, UPP</p>
          <ItemDataGrid endpoints={issueEndpoints} />
        </div>
      </div>
    );
}

export default ApiTestResults;
