import axios from "axios";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

import "./datatable.scss";
import { useState } from "react";

interface DataTableProps {
  slug: string;
  columns: GridColDef[];
  rows: object[];
}

const DataTable = ({ slug, columns, rows }: DataTableProps) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      slug = slug === "users" ? "userRows" : slug;
      await axios.delete(`https://dilfoods.onrender.com/${slug}/${id}`);
      console.log(`Row with ID ${id} deleted successfully.`);
      setLoading(false);
    } catch (error) {
      console.error("Error deleting row:", error);
    }
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${slug}/${params.row?.id}`}>
            <img src="view.svg" alt="View User" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="delete.svg" alt="Delete User" />
          </div>
        </div>
      );
    },
  };

  if (loading) {
    <div>Loading...</div>;
  }
  return (
    <div className="dataTable">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          className="dataGrid"
          rows={rows}
          columns={[...columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: {
                debounceMs: 500,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
      </Box>
    </div>
  );
};

export default DataTable;
