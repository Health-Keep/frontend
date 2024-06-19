import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import lock from "../assets/lock.png";
// import dot from "../assets/dots.png";
import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Paper,
  // Chip,
} from "@mui/material";

const createData = (id, name, date) => {
  return { id, name, date };
};

const dataRow = [
  createData("#2001", "Dalpo Aina", "12/06/24"),
  createData("#2002", "Dalpo Aina", "12/06/24"),
  createData("#2003", "Dalpo Aina", "12/06/24"),
  createData("#2004", "Dalpo Aina", "12/06/24"),
  createData("#2005", "Dalpo Aina", "12/06/24"),
  createData("#2006", "Dalpo Aina", "12/06/24"),
  createData("#2007", "Dalpo Aina", "12/06/24"),
  createData("#2008", "Dalpo Aina", "12/06/24"),
  createData("#2009", "Dalpo Aina", "12/06/24"),
  createData("#2010", "Dalpo Aina", "12/06/24"),
  createData("#2011", "Dalpo Aina", "12/06/24"),
  createData("#2012", "Dalpo Aina", "12/06/24"),
  createData("#2013", "Chi Baby", "12/06/24"),
];

// const statusColor = (status) => {
//   switch (status) {
//     case "Completed":
//       return "success";
//     case "In progress":
//       return "warning";
//     default:
//       return "default";
//   }
// };

const Table = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();
  const { accessGranted } = useAuth();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlePatientAccess = (e) => {
    e.preventDefault();

    if (accessGranted === true) {
      navigate("/searchcard");
    } else {
      navigate("/requestaccess");
    }
  };

  const rows = dataRow.filter((row) => {
    const searchLower = props.search.toLowerCase();
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchLower)
    );
  });

  return (
    <Paper className="w-[1000px] h-[100%] flex flex-col items-center justify-center">
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              <TableCell>ID Number</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date of reg.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Link to="/searchcard">{row.id}</Link>
                  </TableCell>
                  <TableCell>
                    <Link onClick={(e) => handlePatientAccess(e)}>
                      <div className="flex flex-row items-center gap-[10px]">
                        <p>{row.name}</p>
                        {accessGranted === false ? (
                          <img src={lock} alt="Lock icon" />
                        ) : (
                          ""
                        )}
                      </div>
                    </Link>
                  </TableCell>
                  {/* <TableCell>
                    <Chip
                      label={row.treatment}
                      color={statusColor(row.treatment)}
                    />
                  </TableCell> */}
                  <TableCell>{row.date}</TableCell>
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
