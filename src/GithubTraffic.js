import React from "react";
import TrafficDataGrid from "./TrafficDataGrid";
import "./App.css";

const repo_list = ' https://noaa-epic-prod-jenkins-artifacts.s3.amazonaws.com/jobs/infrastructure/dashboard-contributors/repo_files.txt'

const srwa_enpoint = ['https://noaa-epic-prod-jenkins-artifacts.s3.amazonaws.com/jobs/infrastructure/dashboard-contributors/18/ufs-srweather-app.json'];
const mrwa_enpoint = ['https://github-repos-traffic.s3.amazonaws.com/ufs-mrweather-app.json'];
const ccpp_endpoint = ['https://github-repos-traffic.s3.amazonaws.com/ccpp-physics.json'];
const catc_endpoint = ['https://github-repos-traffic.s3.amazonaws.com/CATChem.json'];
const hafs_endpoint = ['https://github-repos-traffic.s3.amazonaws.com/HAFS.json'];
const lada_endpoint = ['https://github-repos-traffic.s3.amazonaws.com/land-DA.json'];
const ldaw_endpoint = ['https://github-repos-traffic.s3.amazonaws.com/land-DA_workflow.json'];
const ufut_endpoint = ['https://noaa-epic-prod-jenkins-artifacts.s3.amazonaws.com/jobs/infrastructure/dashboard-contributors/18/UFS_UTILS.json'];
const rtma_endpoint = ['https://github-repos-traffic.s3.amazonaws.com/ufs-rtma-app.json'];
const tart_endpoint = ['https://github-repos-traffic.s3.amazonaws.com/ufs-test-artifacts.json'];
const wemo_endpoint = ['https://github-repos-traffic.s3.amazonaws.com/ufs-weather-model.json'];
const wfto_endpoint = ['https://github-repos-traffic.s3.amazonaws.com/workflow-tools.json'];
const s2sa_endpoint = ['https://github-repos-traffic.s3.amazonaws.com/ufs-s2s-app.json'];
const s2sm_endpoint = ['https://github-repos-traffic.s3.amazonaws.com/ufs-s2s-model.json'];
const egst_endpoint = ['https://github-repos-traffic.s3.amazonaws.com/EPIC-GST.json'];

function GithubTraffic() {
  
  
  return (
    <div style={{ padding: 30 }}>
      <div>
        <h1>CCPP Physics</h1>
        <p><a href="https://github.com/ufs-community/ccpp-physics">CCPP Physics Repository</a></p>
        <TrafficDataGrid endpoints={ccpp_endpoint} />
      </div>
      <div>
        <h1>Configurable Atmospheric Chemistry</h1>
        <p><a href="https://github.com/ufs-community/CATChem">CATChem Repository</a></p>
        <TrafficDataGrid endpoints={catc_endpoint} />
      </div>
      <div>
        <h1>EPIC GST</h1>
        <p><a href="https://github.com/ufs-community/EPIC-GST">EPIC GST Repository</a></p>
        <TrafficDataGrid endpoints={egst_endpoint} />
      </div> 
      <div>
        <h1>Hurricane Analysis and Forecast System</h1>
        <p><a href="https://github.com/ufs-community/HAFS">HAFS Repository</a></p>
        <TrafficDataGrid endpoints={hafs_endpoint} />
      </div>
      <div>
        <h1>Land Data Assimilation System</h1>
        <p><a href="https://github.com/ufs-community/land-DA">Land-DA Repository</a></p>
        <TrafficDataGrid endpoints={lada_endpoint} />
      </div>
      <div>
        <h1>Land Data Assimilation System Workflow</h1>
        <p><a href="https://github.com/ufs-community/land-DA_workflow">Land-DA Workflow Repository</a></p>
        <TrafficDataGrid endpoints={ldaw_endpoint} />
      </div>
      <div>
        <h1>Medium Range Weather Application</h1>
        <p><a href="https://github.com/ufs-community/ufs-mrweather-app">MRW App Repository</a></p>
        <TrafficDataGrid endpoints={mrwa_enpoint} />
      </div>
      <div>
        <h1>Real Time Mesoscale Analysis Application</h1>
        <p><a href="https://github.com/ufs-community/ufs-rtma-app">UFS RTMA App Repository</a></p>
        <TrafficDataGrid endpoints={rtma_endpoint} />
      </div>
      <div>
        <h1>Short Range Weather Applicaiton</h1>
        <p><a href="https://github.com/ufs-community/ufs-srweather-app">SRW App Repository</a></p>
        <TrafficDataGrid endpoints={srwa_enpoint} />
      </div>
      <div>
        <h1>UFS Subseasonal to Seasonal Applicaiton</h1>
        <p><a href="https://github.com/ufs-community/ufs-s2s-app">UFS S2S Application Repository</a></p>
        <TrafficDataGrid endpoints={s2sa_endpoint} />
      </div> 
      <div>
        <h1>UFS Subseasonal to Seasonal Model</h1>
        <p><a href="https://github.com/ufs-community/ufs-s2s-model">UFS S2S Model Repository</a></p>
        <TrafficDataGrid endpoints={s2sm_endpoint} />
      </div>      
      <div>
        <h1>UFS Test Artifacts</h1>
        <p><a href="https://github.com/ufs-community/ufs-test-artifacts">UFS Test Artifacts Repository</a></p>
        <TrafficDataGrid endpoints={tart_endpoint} />
      </div>
      <div>
        <h1>UFS Utilities</h1>
        <p><a href="https://github.com/ufs-community/UFS_UTILS">UFS UTILS Repository</a></p>
        <TrafficDataGrid endpoints={ufut_endpoint} />
      </div>
      <div>
        <h1>UFS Weather Model</h1>
        <p><a href="https://github.com/ufs-community/ufs-weather-model">UFS Weather Model Repository</a></p>
        <TrafficDataGrid endpoints={wemo_endpoint} />
      </div>
      <div>
        <h1>Unified Workflow Tools</h1>
        <p><a href="https://github.com/ufs-community/workflow-tools">Workflow Tools Repository</a></p>
        <TrafficDataGrid endpoints={wfto_endpoint} />
      </div>
    </div>
  );
}

export default GithubTraffic;
