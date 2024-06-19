import React from "react";
import plus from "../../assets/plus.png";
import avatar from "../../assets/avatars.png";
import logo from "../../assets/hospital-logo.png";
import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Paper,
} from "@mui/material";

const createData = (illness, doctor, date) => {
  return { illness, doctor, date };
};

const rows = [
  createData("Blood Pressure", "Dr. Tayo", "16/06/24"),
  createData("Blood Pressure", "Dr. Tayo", "16/06/24"),
  createData("Blood Pressure", "Dr. Tayo", "16/06/24"),
  createData("Blood Pressure", "Dr. Tayo", "16/06/24"),
  createData("Blood Pressure", "Dr. Tayo", "16/06/24"),
  createData("Blood Pressure", "Dr. Tayo", "16/06/24"),
  createData("Blood Pressure", "Dr. Tayo", "16/06/24"),
  createData("Blood Pressure", "Dr. Tayo", "16/06/24"),
  createData("Blood Pressure", "Dr. Tayo", "16/06/24"),
  createData("Blood Pressure", "Dr. Tayo", "16/06/24"),
  createData("Blood Pressure", "Dr. Tayo", "16/06/24"),
  createData("Blood Pressure", "Dr. Tayo", "16/06/24"),
  createData("Blood Pressure", "Dr. Tayo", "16/06/24"),
];

const MedHistory = () => {
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
    <div className="w-[100%] px-[200px] flex flex-col items-center justify-center">
      <button className="flex flex-row items-center justify-center absolute top-[60px] right-[60px] w-[170px] h-[52px] bg-[#DAF0FA] rounded-[8px]">
        <img src={plus} alt="plus sign" />
        <p className="text-[16px] font-[700] pr-[10px]">Add new record</p>
      </button>
      <div className="relative w-[100%] flex flex-row items-center justify-center">
        <div className="flex flex-row items-baseline justify-start w-[100%] mt-[120px]">
          <div className="flex flex-col items-center justify-center w-[150px]">
            <img src={avatar} width={60} alt="Patient Avatar" />
            <h1 className="text-[18px] font-[700]">ID: 20101</h1>
          </div>
          <input
            className="w-[265px] h-[40px] mt-[15px] mb-[38px] p-[15px] text-[14px] font-[400] bg-[#f5f5f5] rounded-[8px] border-[1px] border-[#a5a5a5] outline-[#f5f5f5] "
            type="search"
            name="search"
            id="search"
            placeholder="&#xF002; Search"
            style={{ fontFamily: "Arial, FontAwesome" }}
          />
        </div>
      </div>
      <Paper className="w-[100%] h-[100%] flex flex-col items-center justify-center">
        <TableContainer>
          <MuiTable>
            <TableHead>
              <TableRow>
                <TableCell>Treatment</TableCell>
                <TableCell>Created by</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex flex-row items-center justify-start gap-[10px]">
                        <img src={logo} width={20} alt="Hospital logo" />{" "}
                        {row.illness}
                      </div>
                    </TableCell>
                    <TableCell>{row.doctor}</TableCell>
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
    </div>
  );
};

export default MedHistory;
