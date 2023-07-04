import { options } from "@/utils/chartOptions";
import React, { Component, useState } from "react";
import Chart from "react-apexcharts";

const StackedChart = () => {
    //   const [state, setState] = useState(options);
    const state = options;
  return (
    <>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        height={"100%"}
      />
    </>
  );
};

export default StackedChart;
