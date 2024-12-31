import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const App = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Vehicle Sales by Year",
    },
    xAxis: {
      categories: ["Sedan", "SUV", "Truck", "Electric", "Hybrid"], // Vehicle types
    },
    yAxis: {
      title: {
        text: "Units Sold",
      },
    },
    series: [
      {
        name: "2023",
        data: [1200, 1500, 800, 300, 450], // 2023 sales for each vehicle type
      },
      {
        name: "2024",
        data: [1300, 1600, 900, 450, 500], // 2024 sales for each vehicle type
      },
      {
        name: "2025",
        data: [1400, 1700, 950, 600, 550], // 2025 sales for each vehicle type
      },
    ],
  };

  return (
    <div className="min-h-[100vh]">
      <div className="flex items-center justify-center w-full mt-8">
        <h1 className="text-3xl font-bold">High Chart</h1>
      </div>

      <div className="mt-48 my-auto">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default App;
