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

const BarChart = () => {
  // Data untuk grafik
  const data = {
    labels: ["BigMac", "Es Tea", "Lemon Tea"], // Label untuk sumbu X
    datasets: [
      {
        label: "Makanan", // Label dataset
        data: [100, 200, 50], // Data yang akan ditampilkan
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
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;