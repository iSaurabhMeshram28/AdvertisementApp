import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardContent,
  Typography,
  Divider,
  TableSortLabel,
} from "@mui/material";
import { tableData } from "../mockData";

const TableComponent = () => {
  const [sorting, setSorting] = useState({ column: "", order: "asc" });

  const handleSort = (column: string) => {
    setSorting((prevSorting) => ({
      column,
      order:
        prevSorting.column === column && prevSorting.order === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const totalRow = {
    id: tableData.length + 1,
    Campaigns: "Total",
    Clicks: tableData.reduce((total, row) => total + row.Clicks, 0),
    Cost: tableData.reduce((total, row) => total + row.Cost, 0),
    Conversions: tableData.reduce((total, row) => total + row.Conversions, 0),
    Revenue: tableData.reduce((total, row) => total + row.Revenue, 0),
  };

  // Add the total row to the mockTableData
  const tableDataWithTotal = [...tableData, totalRow];

  const headers = Object.keys(tableDataWithTotal[0]).filter(
    (header) => header !== "id"
  );

  const sortedData = [...tableDataWithTotal].sort((a, b) => {
    const aValue = (a as any)[sorting.column];
    const bValue = (b as any)[sorting.column];

    if (sorting.order === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  // Remove the Total row from the sorted data
  const sortedDataWithoutTotal = sortedData.filter(
    (row) => row.id !== totalRow.id
  );

  // Append the Total row at the end
  const finalSortedData = [...sortedDataWithoutTotal, totalRow];

  const questionMarkSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      width="24"
      viewBox="0 0 512 512"
    >
      ,{" "}
      <path
        fill="#A9A9A9"
        d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
      />
    </svg>
  );

  return (
    <Card style={{ height: "500px" }}>
      <CardContent style={{ padding: "0px", position: "relative"  }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            fontWeight: "bold",
            fontFamily: "Adobe Clean, sans-serif",
            padding: "10px",
            paddingLeft: "13px",
          }}
        >
          Ads Insights
        </Typography>
        <div
          style={{
            position: "absolute",
            top: "15px", // Adjust the top position as needed
            right: "15px", // Adjust the right position as needed
          }}
        >
          {questionMarkSVG}
        </div>
        <Divider />
        <TableContainer>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell
                    key={index}
                    style={{
                      fontWeight: "bold",
                      fontFamily: "Adobe Clean, sans-serif",
                      textAlign: header === "Campaigns" ? "left" : "right",
                    }}
                  >
                    <TableSortLabel
                      active={sorting.column === header}
                      direction={
                        sorting.column === header
                          ? (sorting.order as "asc" | "desc")
                          : undefined
                      }
                      onClick={() => handleSort(header)}
                    >
                      {header}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {finalSortedData.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor:
                      rowIndex === finalSortedData.length - 1
                        ? "#FAFAFA"
                        : "inherit",
                  }}
                >
                  {headers.map((header, columnIndex) => (
                    <TableCell
                      key={columnIndex}
                      style={{
                        fontFamily: "Adobe Clean, sans-serif",
                        textAlign: header === "Campaigns" ? "left" : "right",
                        color: header ? "#808080" : "#666",
                      }}
                    >
                      {header === "Cost" || header === "Revenue"
                        ? `USD ${row[header].toLocaleString()}`
                        : (row as any)[header].toLocaleString()}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default TableComponent;

