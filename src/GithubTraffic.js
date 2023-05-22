import React from "react";
import TrafficDataGrid from "./TrafficDataGrid";
import "./App.css";

const traffic_enpoints = [
'https://epic-sandbox-srw.s3.amazonaws.com/github_traffic_data.json'
];

function GithubTraffic() {
  return (
    <div style={{ padding: 30 }}>
      <div>
        <h1>GitHub Traffic</h1>
        <p>List of Users and their commits to UFS Community</p>
        <p><a href="https://github.com/orgs/ufs-community">UFS Community Repositories</a></p>
        <TrafficDataGrid endpoints={traffic_enpoints} />
      </div>
    </div>
  );
}

export default GithubTraffic;
