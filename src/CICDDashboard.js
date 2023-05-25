import React, { useEffect, useState } from "react";
import ArtifactDataGrid from "./ArtifactDataGrid";
import "./App.css";
const artifact_data_endpoint = ["https://github-repos-traffic.s3.amazonaws.com/ufs-srweather-app-dashboard-1.json"]

function CICDpiepline() {
  return (
    <div style={{ padding: 30 }}>
        <div>
          <h1>Jenkins Build History</h1>
          <ArtifactDataGrid endpoints={artifact_data_endpoint} />
        </div>
    </div>
  );
}

export default CICDpiepline;
