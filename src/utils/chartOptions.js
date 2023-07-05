export const StackedBarChartoptions = (screenSize) => {
  const options = {
    series: [
      {
        name: "Profit",
        group: "budget",
        data: [
          44000, 55000, 41000, 67000, 22000, 43000, 44000, 55000, 41000, 67000,
          22000, 43000,
        ],
      },
      {
        name: "Loss",
        group: "budget",
        data: [
          13000, 36000, 20000, 8000, 13000, 27000, 0, 36000, 20000, 8000, 13000,
          27000,
        ],
      },
    ],
    options: {
      title: {
        text: "Earnings Summary",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "500",
          fontFamily: undefined,
          color: "#263238",
        },
      },
      grid: {
        strokeDashArray: 15,
      },
      chart: {
        type: "bar",
        stacked: true,
      },
      stroke: {
        width: 0.5,
        lineCap: "10px",
      },
      dataLabels: {
        formatter: (val) => {
          return val / 1000 + "K";
        },
      },
      tooltip: {
        theme: "dark",
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sap",
          "Oct",
          "Nov",
          "Des",
        ],
      },
      fill: {
        opacity: 1,
      },
      colors: ["#2772F0", "#FC5A5A"],
      yaxis: {
        labels: {
          formatter: (val) => {
            return val / 1000 + "K";
          },
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius:
            screenSize.width < 390
              ? 5
              : screenSize.width > 390 && screenSize.width < 1000
              ? 10
              : screenSize.width > 1000 && screenSize.width < 1450
              ? 15
              : screenSize.width > 1450 && screenSize.width < 1930
              ? 25
              : 35,
          borderRadiusWhenStacked: "last",
          borderRadiusApplication: "end",
        },
      },
    },
  };
  return options;
};

export const PieChartOptions = () => {
  const options = {
    series: [44, 55, 13, 33],
    options: {
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
      },
    },
  };
  return options;
};
