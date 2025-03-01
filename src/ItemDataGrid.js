import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    red: {
      background: "#FD8369"
    }
  });

// Define columns for DataGrid
const columns = [
    { field: "repository", headerName: "Repository", width: 170 },
    { field: "index", headerName: "GitHub Id", width: 100 },
    { field: "post_type", headerName: "Post Type", width: 150 },
    { field: "iso_date_time", headerName: "Date Created", width: 200 },
    { field: "initial_answer", headerName: "Initial Answer?", width: 100},
    { field: "github_url", headerName: "Github URL", width: 500, renderCell: (params) => 
        <a href={params.row.github_url}>{params.row.github_url}</a> },
  ];
  
const ItemDataGrid = ({ endpoints }) => {
  const classes = useStyles(); // Use the makeStyles hook to get the custom styles
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
            endpoints.map(async (f) => {
                const response = await fetch(f);
                return await response.json();
            })
        );

        let jsonData = Array.prototype.concat.apply([], responses)
        jsonData = jsonData.map((j, index) => ({ ...j, id: index }));

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
        rows={data}
        columns={columns}
        getRowClassName={(params) => {
            return params.row.initial_answer === 'No' ? classes.red : "";
          }}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 30]}
      />
    </div>
  );
};

export default ItemDataGrid;
