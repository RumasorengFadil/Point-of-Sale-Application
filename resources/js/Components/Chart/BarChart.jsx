// BarChart.jsx
import React from "react";
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

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({salesSummary}) => {
  // Data untuk grafik
  const data = {
    labels: salesSummary.product_name, // Label untuk sumbu X
    datasets: [
      {
        label: salesSummary.category_name, // Label dataset
        data: salesSummary.total_product_sold, // Data yang akan ditampilkan
        backgroundColor: "#1A72DD", // Warna batang
        borderColor: "rgba(75, 192, 192, 1)", // Warna border batang
        borderWidth: 1, // Lebar border
      },
    ],
  };

  // Opsi untuk konfigurasi chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        text: "Monthly Revenue",
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
    // scales: {
    //   y: {
    //     beginAtZero: true, // Memulai skala sumbu Y dari nol
    //     ticks: {
    //       stepSize: 1000, // Jarak antar nilai pada sumbu Y
    //     },
    //     suggestedMin: 0,
    // suggestedMax: 1000,
    //   },
    // },
  };
  

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;