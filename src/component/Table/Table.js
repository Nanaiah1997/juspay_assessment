import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import cx from "classnames"; // Ensure you have this library for classnames handling
import { theme } from "../../themes/theme";

const columns = [
  { field: "name", headerName: "Name", width: "25%", minWidth: 100 },
  { field: "price", headerName: "Price", width: "25%", minWidth: 100 },
  { field: "quantity", headerName: "Quantity", width: "25%", minWidth: 100 },
  { field: "amount", headerName: "Amount", width: "25%", minWidth: 100 },
];

const data = [
  { name: "Product A", price: 10, quantity: 2, amount: 20 },
  { name: "Product B", price: 15, quantity: 1, amount: 15 },
  { name: "Product C", price: 20, quantity: 3, amount: 60 },
];

const DashboardTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table
        stickyHeader
        sx={{ background: `${theme.palette.secondary.main}40` }}
      >
        <TableHead>
          <TableRow>
            {columns.map((column, i) => (
              <TableCell
                key={i}
                sx={{
                  width: column.width,
                  minWidth: column.minWidth,
                  padding: ".8rem",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  background: `${theme.palette.secondary.main}40`,
                }}
                title={column.headerName}
              >
                {column.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, columnIndex) => {
                const value = row[column.field];
                return (
                  <TableCell
                    key={columnIndex}
                    sx={{
                      width: column.width,
                      minWidth: column.minWidth,
                      borderBottom: "none",
                    }}
                  >
                    {column.field === "amount" || column.field === "price"
                      ? `$${value.toFixed(2)}`
                      : value}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTable;
