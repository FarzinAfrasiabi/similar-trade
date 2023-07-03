import React, { Component } from "react";
import Chart from "react-apexcharts";

const StickChart = () => {
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };
  return (
    <>
      <div className="flex h-full max-h-[600px]">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="500"
        />
      </div>
    </>
  );
};

export default StickChart;
