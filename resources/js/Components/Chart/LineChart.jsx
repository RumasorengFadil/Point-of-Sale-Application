import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
} from "chart.js";

// Register chart.js components
ChartJS.register(
    CategoryScale,
    BarElement,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({ summary = {} }) => {
    // Data untuk grafik
    const data = {
        labels: summary.labels, // Label sumbu X
        datasets: [
          {
            label: summary.label,
            data: summary.transactions, // Data sumbu Y
            borderColor: "rgba(75,192,192,1)", // Warna garis
            backgroundColor: "rgba(75,192,192,0.2)", // Warna area bawah garis
            tension: 0.4, // Membuat garis lebih halus
            pointBorderColor: "rgba(75,192,192,1)", // Warna titik
            pointBackgroundColor: "#fff",
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
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
                beginAtZero: true,
            },
        },
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
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
