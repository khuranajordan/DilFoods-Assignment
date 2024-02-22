import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

import "./datatable.scss";

interface DataTableProps {
  slug: string;
  columns: GridColDef[];
  rows: object[];
}

const DataTable = ({ slug, columns, rows }: DataTableProps) => {
  const handleDelete = (id: number) => {
    // delete the row
    // axios.delete(`/api/${slug}/id`)
    console.log({ id });
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
