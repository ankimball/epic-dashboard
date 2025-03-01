import React from "react";
import ItemDataGrid from "./ItemDataGrid";
import "./App.css";

const discussionEndpoints = [
  'https://epic-sandbox-srw.s3.amazonaws.com/discussions-NOAA-EMC-UPP.json',
  'https://epic-sandbox-srw.s3.amazonaws.com/discussions-NOAA-EPIC-land-offline_workflow.json',
  'https://epic-sandbox-srw.s3.amazonaws.com/discussions-ufs-community-land-DA_workflow.json',
  'https://epic-sandbox-srw.s3.amazonaws.com/discussions-ufs-community-ufs-weather-model.json',
  'https://epic-sandbox-srw.s3.amazonaws.com/discussions-ufs-community-ufs-srweather-app.json'
];

const issueEndpoints = [
  'https://epic-sandbox-srw.s3.amazonaws.com/issues-NOAA-EMC-UPP.json',
  'https://epic-sandbox-srw.s3.amazonaws.com/issues-NOAA-EPIC-land-offline_workflow.json',
  'https://epic-sandbox-srw.s3.amazonaws.com/issues-ufs-community-land-DA_workflow.json',
  'https://epic-sandbox-srw.s3.amazonaws.com/issues-ufs-community-ufs-weather-model.json',
  'https://epic-sandbox-srw.s3.amazonaws.com/issues-ufs-community-ufs-srweather-app.json'
];

function ApiTestResults() {
    return (
      <div style={{ padding: 30 }}>
        <div>
          <h1>Discussions</h1>
          <p>Includes: ufs-srweather-app, ufs-weather-model, UPP, land-DA_workflow, and NOAA-EPIC/land-offline_workflow</p>
          <p><a href="https://github.com/orgs/ufs-community/discussions">UFS Community Discussions</a></p>
          <ItemDataGrid endpoints={discussionEndpoints} />
        </div>
        <div>
          <h1>Issues</h1>
          <p>IIncludes: ufs-srweather-app, ufs-weather-model, UPP, land-DA_workflow, and NOAA-EPIC/land-offline_workflow</p>
          <ItemDataGrid endpoints={issueEndpoints} />
        </div>
      </div>
    );
}

export default ApiTestResults;
