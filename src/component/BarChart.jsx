import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { barChartData, options } from "./chart/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  return <div className="h-108 border border-gray-200 rounded-md p-5 mt-5 "><p className="font-bold text-sm pb-4">Monthly Financial Summary (September)</p> <Bar options={options} data={barChartData} /></div>;
};
export default BarChart;
