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
import Pagination from "@mui/material/Pagination";
import { theme } from "../../themes/theme";
import useStyles from "./OrderListTable.styles";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";

const columns = [
  { field: "orderId", headerName: "Order ID", width: "15%", minWidth: 100 },
  { field: "user", headerName: "User", width: "20%", minWidth: 100 },
  { field: "project", headerName: "Project", width: "20%", minWidth: 100 },
  { field: "address", headerName: "Address", width: "25%", minWidth: 150 },
  { field: "date", headerName: "Date", width: "15%", minWidth: 100 },
  { field: "status", headerName: "Status", width: "10%", minWidth: 80 },
];

const data = [
  {
    orderId: "#CM0001",
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
    orderId: "#CM0002",
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
    orderId: "#CM0003",
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
    orderId: "#CM0004",
    user: {
      name: "User D",
      profile_url: "https://example.com/profiles/user-d",
    },
    project: "Project Delta",
    address: "321 Elm St",
    date: "2024-01-04",
    status: "Approved",
  },
  {
    orderId: "#CM0005",
    user: {
      name: "User E",
      profile_url: "https://example.com/profiles/user-e",
    },
    project: "Project Epsilon",
    address: "654 Maple Ave",
    date: "2024-01-05",
    status: "Rejected",
  },
  {
    orderId: "#CM0006",
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
    orderId: "#CM0007",
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
    orderId: "#CM0008",
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
    orderId: "#CM0009",
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
    orderId: "#CM0010",
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
    orderId: "#CM0011",
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
    orderId: "#CM0012",
    user: {
      name: "User L",
      profile_url: "https://example.com/profiles/user-l",
    },
    project: "Project Mu",
    address: "680 Cypress Dr",
    date: "2024-01-12",
    status: "In Progress",
  },
  {
    orderId: "#CM0013",
    user: {
      name: "User M",
      profile_url: "https://example.com/profiles/user-m",
    },
    project: "Project Nu",
    address: "791 Willow St",
    date: "2024-01-13",
    status: "Approved",
  },
  {
    orderId: "#CM0014",
    user: {
      name: "User N",
      profile_url: "https://example.com/profiles/user-n",
    },
    project: "Project Xi",
    address: "802 Oak Blvd",
    date: "2024-01-14",
    status: "Rejected",
  },
];

function getColor(status) {
  let color;

  switch (status) {
    case "In Progress":
      color = "blue";
      break;
    case "Pending":
      color = "lightblue";
      break;
    case "Completed":
      color = "green";
      break;
    case "Approved":
      color = "yellow";
      break;
    case "Rejected":
      color = "gray";
      break;
    default:
      color = theme.palette.text.primary;
  }

  return color;
}
const OrderListTable = ({ keyword }) => {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [hoveredRow, setHoveredRow] = useState(null);
  const rowsPerPage = 10;
  const classes = useStyles();
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
  const renderCellContent = (column, value, row) => {
    switch (column.field) {
      case "user":
        return (
          <Box className={classes.userCell}>
            <Avatar
              alt={value?.name}
              src={value?.profile_url}
              sx={{ width: 20, height: 20 }}
            />
            {value.name}
          </Box>
        );
      case "date":
        return (
          <Box className={classes.userCell}>
            <CalendarTodayOutlinedIcon />
            {value}
          </Box>
        );
      case "status":
        return (
          <Box className={classes.userCell} sx={{ color: getColor(value) }}>
            <Box className={classes.dot} sx={{ background: getColor(value) }} />
            {value}
          </Box>
        );
      case "address":
        return (
          <Box className={classes.userCell}>
            {value}
            {(hoveredRow === row.orderId || selected.includes(row.orderId)) && (
              <EventNoteOutlinedIcon />
            )}
          </Box>
        );
      default:
        return value;
    }
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" className={classes.headerCell}>
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
                  className={classes.checkboxChecked}
                />
              </TableCell>
              {columns.map((column, i) => (
                <TableCell
                  key={i}
                  style={{ width: column.width, minWidth: column.minWidth }}
                  className={classes.headerCell}
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
                      className={classes.checkboxChecked}
                    />
                  )}
                </TableCell>
                {columns.map((column, columnIndex) => {
                  const value = row[column.field];

                  return (
                    <TableCell
                      key={columnIndex}
                      style={{
                        width: column.width,
                        minWidth: column.minWidth,
                        fontSize: "1.2rem",
                        padding: "1rem .8rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {renderCellContent(column, row[column.field], row)}
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
        className={classes.pagination}
      />
    </Paper>
  );
};

export default OrderListTable;
