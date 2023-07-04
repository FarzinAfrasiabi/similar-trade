let width = window.innerWidth;
export const options = {
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
        13000, 36000, 20000, 8000, 13000, 27000, 13000, 36000, 20000, 8000,
        13000, 27000,
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
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: width > 1000 ? 25 : 10,
      },
    },
  },
};
