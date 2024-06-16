import React from "react";
import dot from "../assets/dots.png";
import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Paper,
  Chip,
} from "@mui/material";

const createData = (id, caption, name, treatment) => {
  return { id, caption, name, treatment };
};

const rows = [
  createData("#2001", "Caption", "Dalpo Aina", "Completed"),
  createData("#2002", "Caption", "Dalpo Aina", "In progress"),
  createData("#2003", "Caption", "Dalpo Aina", "Completed"),
  createData("#2004", "Caption", "Dalpo Aina", "Completed"),
  createData("#2005", "Caption", "Dalpo Aina", "Completed"),
  createData("#2006", "Caption", "Dalpo Aina", "In progress"),
  createData("#2007", "Caption", "Dalpo Aina", "In progress"),
  createData("#2008", "Caption", "Dalpo Aina", "Completed"),
  createData("#2009", "Caption", "Dalpo Aina", "Completed"),
  createData("#2010", "Caption", "Dalpo Aina", "Completed"),
  createData("#2011", "Caption", "Dalpo Aina", "Completed"),
  createData("#2012", "Caption", "Dalpo Aina", "Completed"),
  createData("#2013", "Caption", "Chi Baby", "Completed"),
];

const statusColor = (status) => {
  switch (status) {
    case "Completed":
      return "success";
    case "In progress":
      return "warning";
    default:
      return "default";
  }
};

const Table = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className="w-[1000px] h-[100%] flex flex-col items-center justify-center">
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Caption</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Treatment</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.caption}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.treatment}
                      color={statusColor(row.treatment)}
                    />
                  </TableCell>
                  <TableCell>
                    <button>
                      <img src={dot} alt="menu" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </Paper>
  );
};

export default Table;
