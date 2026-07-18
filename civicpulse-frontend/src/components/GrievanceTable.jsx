import { DataGrid } from "@mui/x-data-grid";

function GrievanceTable({ grievances }) {

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 220 },
    { field: "category", headerName: "Category", width: 170 },
    { field: "priority", headerName: "Priority", width: 120 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "assignedOfficer", headerName: "Officer", width: 180 },
  ];

  return (
    <div
      style={{
        height: 500,
        width: "100%",
        background: "white",
        borderRadius: "10px",
      }}
    >
      <DataGrid
        rows={grievances}
        columns={columns}
        pageSizeOptions={[5, 10]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
      />
    </div>
  );
}

export default GrievanceTable;