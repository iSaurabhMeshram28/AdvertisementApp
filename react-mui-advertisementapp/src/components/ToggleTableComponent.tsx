// components/ToggleTableComponent.tsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Switch,
  FormControlLabel,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  TableSortLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { toggleTableData } from "../mockToggleTableData";

const ToggleTableComponent = () => {
  const [showTable, setShowTable] = useState(false);

  const [sorting, setSorting] = useState({ column: "", order: "asc" });
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

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
    id: toggleTableData.length + 1,
    Group: "Total",
    Clicks: toggleTableData.reduce((total, row) => total + row.Clicks, 0),
    Cost: toggleTableData.reduce((total, row) => total + row.Cost, 0),
    Conversions: toggleTableData.reduce(
      (total, row) => total + row.Conversions,
      0
    ),
    Revenue: toggleTableData.reduce((total, row) => total + row.Revenue, 0),
  };

  // Add the total row to the mockTableData
  const tableDataWithTotal = [...toggleTableData, totalRow];

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

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 36,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M64 256V160H224v96H64zm0 64H224v96H64V320zm224 96V320H448v96H288zM448 256H288V160H448v96zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  const pieParams = { height: 400, margin: { right: 5 } };
  const palette = ["#FF823C", "#0096FF", "#323C46"];
  return (
    <Card style={{ height: "500px" }}>
      <CardContent style={{ padding: "0px", position: "relative" }}>
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
        {!showTable && (
          <div
            style={{
              position: "absolute",
              top: "15px", // Adjust the top position as needed
              right: "35px", // Adjust the right position as needed
              display: "flex",
              alignItems: "center",
            }}
          >
            <Select
              value={selectedOption}
              onChange={handleSelectChange}
              variant="outlined"
              style={{
                marginRight: "18px",
                backgroundColor: "white",
                height: "30px", // Adjust the height as needed
                width: "120px",
                fontFamily: "Adobe Clean, sans-serif"
              }}
            >
              <MenuItem style={{fontFamily: "Adobe Clean, sans-serif"}} value="option1">Clicks</MenuItem>
              <MenuItem style={{fontFamily: "Adobe Clean, sans-serif"}} value="option2">Cost</MenuItem>
              <MenuItem style={{fontFamily: "Adobe Clean, sans-serif"}} value="option3">Conversions</MenuItem>
              <MenuItem style={{fontFamily: "Adobe Clean, sans-serif"}} value="option4">Revenue</MenuItem>
            </Select>
            
          </div>
        )}
         <div
            style={{
              position: "absolute",
              top: "15px", // Adjust the top position as needed
              right: "15px", // Adjust the right position as needed
              display: "flex",
              alignItems: "center",
            }}
          >
            {questionMarkSVG}
          </div>
        <Divider />

        <div style={{ height: "430px", overflowY: "auto" }}>
          {showTable ? (
            /* Your table rendering code here */
            <Box>
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
                            textAlign: header === "Group" ? "left" : "right",
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
                              textAlign: header === "Group" ? "left" : "right",
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
              <Divider />
            </Box>
          ) : (
            <Box position="relative" style={{ minHeight: "430px" }}>
              <PieChart
                colors={palette}
                series={[
                  {
                    data: [
                      { id: 1, value: 40, label: "40% Male" },
                      { id: 2, value: 35, label: "35% Female" },
                      { id: 3, value: 25, label: "25% Unknown" },
                    ],
                    innerRadius: 100,
                    outerRadius: 150,
                    paddingAngle: 2,
                    cornerRadius: 5,
                    startAngle: -90,
                    endAngle: 360,
                    cx: 300,
                    cy: 200,
                  },
                ]}
                {...pieParams}
              />
            </Box>
          )}
        </div>

        <FormControlLabel
          control={
            <MaterialUISwitch
              checked={showTable}
              onChange={() => setShowTable(!showTable)}
              color="primary"
            />
          }
          label=""
          labelPlacement="start"
          style={{
            position: "absolute",
            bottom: "8px",
            right: "20px",
            zIndex: 1,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default ToggleTableComponent;
