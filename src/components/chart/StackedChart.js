import { StackedBarChartoptions } from "@/utils/chartOptions";
import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";

const StackedChart = () => {
  //   const [state, setState] = useState(options);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  console.log(screenSize);
  const state = StackedBarChartoptions(screenSize);
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
