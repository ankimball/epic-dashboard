import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";


// Define columns 
const columns = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 500 },
  { field: "commits", headerName: "Commits", width: 100 }
];

const TrafficDataGrid = ({ endpoints }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          endpoints.map(async (f) => {
            const response = await fetch(f);
            const data = await response.json();
            return data;
          })
        );

        let jsonData = Array.prototype.concat.apply([], responses);
        jsonData = jsonData.map((j, index) => ({ ...j, traffic: j.traffic.map((t, i) => ({ ...t, id: i + 1 })), id: index + 1 }));

        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [endpoints]);

  return (
    <div style={{ height: 500, width: "100%" }}>
        <DataGrid
        rowHeight={40}
        getRowId={(row) => row.id}
        rows={data.length > 0 ? data[0].traffic : []}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 30]}
        />
    </div>
  );
};

export default TrafficDataGrid;
