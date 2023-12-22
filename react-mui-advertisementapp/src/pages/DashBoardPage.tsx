import React from "react";

import TableComponent from "../components/TableComponent";
import ToggleTableComponent from "../components/ToggleTableComponent";

const DashBoardPage = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "50%", padding: "20px" }}>
          <TableComponent />
        </div>
        <div style={{ flex: "50%", padding: "20px" }}>
          <ToggleTableComponent />
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
