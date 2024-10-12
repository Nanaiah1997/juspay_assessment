import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Avatar,
  Box,
} from "@mui/material";
import Pagination from "@mui/material/Pagination"; // Make sure this import is correct based on your setup
import { theme } from "../../themes/theme";

const columns = [
  { field: "orderId", headerName: "Order ID", width: "15%", minWidth: 100 },
  { field: "user", headerName: "User", width: "20%", minWidth: 100 },
  { field: "project", headerName: "Project", width: "20%", minWidth: 100 },
  { field: "address", headerName: "Address", width: "25%", minWidth: 150 },
  { field: "date", headerName: "Date", width: "15%", minWidth: 100 },
  { field: "status", headerName: "Status", width: "10%", minWidth: 80 },
];

// const data = [
//   {
//     orderId: 1,
//     user: "User A",
//     project: "Project Alpha",
//     address: "123 Main St",
//     date: "2024-01-01",
//     status: "Pending",
//   },
//   {
//     orderId: 2,
//     user: "User B",
//     project: "Project Beta",
//     address: "456 Oak Ave",
//     date: "2024-01-02",
//     status: "Completed",
//   },
//   {
//     orderId: 3,
//     user: "User C",
//     project: "Project Gamma",
//     address: "789 Pine Rd",
//     date: "2024-01-03",
//     status: "In Progress",
//   },
//   {
//     orderId: 4,
//     user: "User D",
//     project: "Project Delta",
//     address: "321 Elm St",
//     date: "2024-01-04",
//     status: "Pending",
//   },
//   {
//     orderId: 5,
//     user: "User E",
//     project: "Project Epsilon",
//     address: "654 Maple Ave",
//     date: "2024-01-05",
//     status: "Completed",
//   },
//   {
//     orderId: 6,
//     user: "User F",
//     project: "Project Zeta",
//     address: "987 Birch Blvd",
//     date: "2024-01-06",
//     status: "In Progress",
//   },
//   {
//     orderId: 7,
//     user: "User G",
//     project: "Project Eta",
//     address: "135 Oak Ct",
//     date: "2024-01-07",
//     status: "Pending",
//   },
//   {
//     orderId: 8,
//     user: "User H",
//     project: "Project Theta",
//     address: "246 Cedar Dr",
//     date: "2024-01-08",
//     status: "Completed",
//   },
//   {
//     orderId: 9,
//     user: "User I",
//     project: "Project Iota",
//     address: "357 Spruce St",
//     date: "2024-01-09",
//     status: "In Progress",
//   },
//   {
//     orderId: 10,
//     user: "User J",
//     project: "Project Kappa",
//     address: "468 Willow Way",
//     date: "2024-01-10",
//     status: "Pending",
//   },
//   {
//     orderId: 11,
//     user: "User K",
//     project: "Project Lambda",
//     address: "579 Fir Ct",
//     date: "2024-01-11",
//     status: "Completed",
//   },
//   {
//     orderId: 12,
//     user: "User L",
//     project: "Project Mu",
//     address: "680 Cypress Dr",
//     date: "2024-01-12",
//     status: "In Progress",
//   },
//   // Add more rows as needed
// ];
const data = [
  {
    orderId: 1,
    user: {
      name: "User A",
      profile_url: "https://example.com/profiles/user-a",
    },
    project: "Project Alpha",
    address: "123 Main St",
    date: "2024-01-01",
    status: "Pending",
  },
  {
    orderId: 2,
    user: {
      name: "User B",
      profile_url: "https://example.com/profiles/user-b",
    },
    project: "Project Beta",
    address: "456 Oak Ave",
    date: "2024-01-02",
    status: "Completed",
  },
  {
    orderId: 3,
    user: {
      name: "User C",
      profile_url: "https://example.com/profiles/user-c",
    },
    project: "Project Gamma",
    address: "789 Pine Rd",
    date: "2024-01-03",
    status: "In Progress",
  },
  {
    orderId: 4,
    user: {
      name: "User D",
      profile_url: "https://example.com/profiles/user-d",
    },
    project: "Project Delta",
    address: "321 Elm St",
    date: "2024-01-04",
    status: "Pending",
  },
  {
    orderId: 5,
    user: {
      name: "User E",
      profile_url: "https://example.com/profiles/user-e",
    },
    project: "Project Epsilon",
    address: "654 Maple Ave",
    date: "2024-01-05",
    status: "Completed",
  },
  {
    orderId: 6,
    user: {
      name: "User F",
      profile_url: "https://example.com/profiles/user-f",
    },
    project: "Project Zeta",
    address: "987 Birch Blvd",
    date: "2024-01-06",
    status: "In Progress",
  },
  {
    orderId: 7,
    user: {
      name: "User G",
      profile_url: "https://example.com/profiles/user-g",
    },
    project: "Project Eta",
    address: "135 Oak Ct",
    date: "2024-01-07",
    status: "Pending",
  },
  {
    orderId: 8,
    user: {
      name: "User H",
      profile_url: "https://example.com/profiles/user-h",
    },
    project: "Project Theta",
    address: "246 Cedar Dr",
    date: "2024-01-08",
    status: "Completed",
  },
  {
    orderId: 9,
    user: {
      name: "User I",
      profile_url: "https://example.com/profiles/user-i",
    },
    project: "Project Iota",
    address: "357 Spruce St",
    date: "2024-01-09",
    status: "In Progress",
  },
  {
    orderId: 10,
    user: {
      name: "User J",
      profile_url: "https://example.com/profiles/user-j",
    },
    project: "Project Kappa",
    address: "468 Willow Way",
    date: "2024-01-10",
    status: "Pending",
  },
  {
    orderId: 11,
    user: {
      name: "User K",
      profile_url: "https://example.com/profiles/user-k",
    },
    project: "Project Lambda",
    address: "579 Fir Ct",
    date: "2024-01-11",
    status: "Completed",
  },
  {
    orderId: 12,
    user: {
      name: "User L",
      profile_url: "https://example.com/profiles/user-l",
    },
    project: "Project Mu",
    address: "680 Cypress Dr",
    date: "2024-01-12",
    status: "In Progress",
  },
  // Add more rows as needed
];

const OrderListTable = ({ alwaysOnEditMode, keyword }) => {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [hoveredRow, setHoveredRow] = useState(null);
  const rowsPerPage = 10;

  const handleSelect = (orderId) => {
    setSelected((prev) => {
      if (prev.includes(orderId)) {
        return prev.filter((id) => id !== orderId);
      } else {
        return [...prev, orderId];
      }
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1); // Adjust for zero-based index
  };

  const filteredRows = keyword
    ? data.filter((row) => row.user.includes(keyword))
    : data;
  const count = Math.ceil(filteredRows.length / rowsPerPage);
  const startIndex = page * rowsPerPage;
  const paginatedData = filteredRows.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <Paper sx={{ background: theme.palette.background.main }}>
      <TableContainer sx={{ background: theme.palette.background.main }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                padding="checkbox"
                sx={{
                  background: theme.palette.background.main,
                }}
              >
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < filteredRows.length
                  }
                  checked={selected.length === filteredRows.length}
                  onChange={() => {
                    if (selected.length === filteredRows.length) {
                      setSelected([]);
                    } else {
                      setSelected(filteredRows.map((row) => row.orderId));
                    }
                  }}
                  sx={{
                    "&.Mui-checked, &.MuiCheckbox-indeterminate": {
                      color: theme.palette.text.primary,
                    },
                  }}
                />
              </TableCell>
              {columns.map((column, i) => (
                <TableCell
                  key={i}
                  sx={{
                    width: column.width,
                    minWidth: column.minWidth,
                    background: theme.palette.background.main,
                  }}
                  title={column.headerName}
                >
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow
                key={row.orderId}
                onMouseEnter={() => setHoveredRow(row.orderId)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <TableCell padding="checkbox">
                  {(hoveredRow === row.orderId ||
                    selected.includes(row.orderId)) && (
                    <Checkbox
                      checked={selected.includes(row.orderId)}
                      onChange={() => handleSelect(row.orderId)}
                      sx={{
                        "&.Mui-checked": {
                          color: theme.palette.text.primary,
                        },
                      }}
                    />
                  )}
                </TableCell>
                {columns.map((column, columnIndex) => {
                  const value = row[column.field];

                  return (
                    <TableCell
                      key={columnIndex}
                      sx={{
                        width: column.width,
                        minWidth: column.minWidth,
                        fontSize: "1.2rem",
                        padding: "1rem .8rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {column.field === "user" ? (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: ".5rem",
                          }}
                        >
                          <Avatar
                            alt={value?.name}
                            src={value?.profile_url}
                            sx={{ width: 20, height: 20 }}
                          />
                          {value.name}
                        </Box>
                      ) : (
                        value
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={count}
        onChange={handleChangePage}
        page={page + 1}
        sx={{
          float: "right",
          marginTop: "1rem",
          "& .Mui-selected": {
            borderRadius: "1rem",
          },
        }}
      />
    </Paper>
  );
};

export default OrderListTable;
