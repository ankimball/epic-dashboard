// import React, { useState } from "react";
// import { ResultsBox, ResultsBoxWrapper } from "./ResultsBox";
// import {
//   Box,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import "./App.css";
// function CICDpiepline () {
//   const [ufsDiscussionResults, setUfsDiscussionResults] = React.useState([]);
//   const [srwDiscussionResults, setSrwDiscussionResults] = React.useState([]);
//   const [srwIssueResults, setSrwIssueResults] = React.useState([]);
//   const [selectedArtifact, setSelectedArtifact] = useState('');

//   const panels = [
//     {
//       title: 'Panel 1',
//       content: (
//         <table>
//           <thead>
//             <tr>
//               <th>Column 1</th>
//               <th>Column 2</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Data 1</td>
//               <td>Data 2</td>
//             </tr>
//           </tbody>
//         </table>
//       )
//     },
//     {
//       title: 'Panel 2',
//       content: (
//         <table>
//           <thead>
//             <tr>
//               <th>Column 1</th>
//               <th>Column 2</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Data 1</td>
//               <td>Data 2</td>
//             </tr>
//           </tbody>
//         </table>
//       )
//     }
//   ];

//   const getRowClass = (answer) => {
//     if (answer === "SUCCESS") {
//       return 'green-row';
//     } 
//     if (answer === "ABORTED") {
//       return 'yellow-row';
//     } else {
//       return 'red-row';
//     }
//   };

//   const handleChange = (event) => {
//     setSelectedArtifact(event.target.value);
//   }

//   React.useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('https://github-repos-traffic.s3.amazonaws.com/ufs-srweather-app-dashboard-1.json');
//       const ufsDiscussionjsonData = await response.json();
//       console.log("Data: ", ufsDiscussionjsonData)
//       setUfsDiscussionResults(ufsDiscussionjsonData);
//     }
//     fetchData();
//   }, []);

//       return (
//         <div className="App">
//         <div>
//         <table style={{ border: "1px solid black" }}>
//       <thead>
//         <tr style={{ border: "1px solid black" }}>
//           <th style={{ border: "1px solid black" }}>Title</th>
//           {/* <th style={{ border: "1px solid black" }}>URL</th> */}
//           <th style={{ border: "1px solid black" }}>State</th>
//           <th style={{ border: "1px solid black" }}>Result</th>
//           <th style={{ border: "1px solid black" }}>Duration</th>
//           <th style={{ border: "1px solid black" }}>Timestamp</th>
//           <th style={{ border: "1px solid black" }}>pullRequest</th>
//           <th style={{ border: "1px solid black" }}>buildNumber</th>
//           <th style={{ border: "1px solid black" }}>Artifacts</th>
//         </tr>
//       </thead>
//       <tbody>
//         {ufsDiscussionResults.map((row) => (
//           <tr key={row.index} className={getRowClass(row.Result)} style={{ border: "1px solid black" }}>
//             <td style={{ border: "1px solid black" }}>{row.Title}</td>
//             {/* <td style={{ border: "1px solid black" }}>{row.URL}</td> */}
//             <td style={{ border: "1px solid black" }}>{row.State}</td>
//             <td style={{ border: "1px solid black" }}>{row.Result}</td>
//             <td style={{ border: "1px solid black" }}>{row.Duration}</td>
//             <td style={{ border: "1px solid black" }}>{row.Timestamp}</td>
//             <td style={{ border: "1px solid black" }}>{row.pullRequest}</td>
//             <td style={{ border: "1px solid black" }}>{row.buildNumber}</td>
//             <td style={{ border: "1px solid black" }}>
//                 <div>
//                   <select value={selectedArtifact} onChange={handleChange} style={{textAlign: 'left'}}>
//                     <option value="">Select an artifact</option>
//                     {row.Artifacts.map((artifact, index) => (
//                       <option key={index} value={artifact}>
//                         {artifact}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//           </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>
//     </div>
//       );
//   }

// export default CICDpiepline;

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

