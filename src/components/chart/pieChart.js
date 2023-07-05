import { PieChartOptions } from "@/utils/chartOptions";
import Chart from "react-apexcharts";

const PieChart = ({series = []}) => {
  const state = {
    series,
    options: {
      chart: {
        type: "donut",
      },
      colors: ["#2772F0", "#FC5A5A"],
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 0,
          options: {
            chart: {
              width: 600,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          expandOnClick: true,
          offsetX: 0,
          offsetY: 0,
          customScale: 1,
          dataLabels: {
            offset: 0,
            minAngleToShowLabel: 10,
          },
          donut: {
            size: "65%",
            background: "transparent",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "22px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 600,
                color: undefined,
                offsetY: -10,
                formatter: function (val) {
                  return val;
                },
              },
              value: {
                show: true,
                fontSize: "14px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 400,
                color: "#040415",
                offsetY: 16,
                formatter: function (val) {
                  return val;
                },
              },
              total: {
                show: true,
                showAlways: false,
                label: "Total",
                fontSize: "22px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 600,
                color: "#373d3f",
                formatter: function (w) {
                  const avg = w.globals.seriesTotals.reduce((a, b) => {
                    return (a + b) / 2;
                  }, 0);
                  return `${avg} % `;
                },
              },
            },
          },
        },
      },
    },
  };
  return (
    <div className="py-4 lg:py-6 h-[280px] 2xl:h-[320px] ">
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        height={"100%"}
      />
    </div>
  );
};

export default PieChart;
