import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./index.css";

export default function BasicTable({ data }) {
  return (
    <TableContainer component={Paper} className="tableDiv">
      <Table
        sx={{ minWidth: 650, maxWidth: 900, margin: "auto" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>COMPANY NAME</TableCell>
            <TableCell>CONTACT NAME</TableCell>
            <TableCell>CITY</TableCell>
            <TableCell>REGION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.companyName}</TableCell>
              <TableCell>{row.contactName}</TableCell>
              <TableCell>{row?.address?.city}</TableCell>
              <TableCell>{row?.address?.region}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
