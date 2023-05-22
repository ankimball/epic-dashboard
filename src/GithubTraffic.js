import React from "react";
import TrafficDataGrid from "./TrafficDataGrid";
import "./App.css";

const traffic_enpoints = [
'https://epic-sandbox-srw.s3.amazonaws.com/ufs-srweather-app.json'
];

function GithubTraffic() {
  return (
    <div style={{ padding: 30 }}>
      <div>
        <h1>GitHub Traffic</h1>
        <h2>UFS Short Range Weather App</h2>
        <p><a href="https://github.com/ufs-community/ufs-srweather-app">Short Range Weather App Repository</a></p>
        <TrafficDataGrid endpoints={traffic_enpoints} />
      </div>
    </div>
  );
}

export default GithubTraffic;
