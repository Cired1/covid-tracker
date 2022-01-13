import styles from "./Chart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ country, confirmed, deaths, recovered }) => {
  return (
    <div className={styles.wrapper}>
      <Bar
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            tooltips: {
              callbacks: {
                label: function (tooltipItem) {
                  return tooltipItem.yLabel;
                },
              },
            },
            title: {
              display: true,
              text:
                country === "Globales"
                  ? `Casos de Covid ${country}`
                  : `Casos de Covid en ${country}`,
                  color: "#05b584",
            },
          },
        }}
        data={{
          labels: ["Infectados", "Defunciones", "Recuperados"],
          datasets: [
            {
              label: [""],
              data: [confirmed, deaths, recovered],
              backgroundColor: [
                "#f77427",
                "#ec314b",
                "#05b584",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
