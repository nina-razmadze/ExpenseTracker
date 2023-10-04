import React from "react";
import ChartBar from "./ChartBar/ChartBar";
import "./Chart.css";

export default function Chart() {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
