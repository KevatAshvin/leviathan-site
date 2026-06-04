"use client";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

import {
  statusChartData,
  volumeChartData,
} from "@/components/dashboard/dashboard-data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
);

const chartTooltipTheme = {
  backgroundColor: "rgba(15, 23, 42, 0.94)",
  titleColor: "#f1f5f9",
  bodyColor: "#cbd5e1",
  borderColor: "rgba(51, 65, 85, 0.9)",
  borderWidth: 1,
  padding: 12,
  cornerRadius: 10,
};

const legendTextColor = "#94a3b8";

export function OperationalVolumeChart() {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        ...chartTooltipTheme,
      },
    },
    scales: {
      x: {
        ticks: { color: legendTextColor, maxRotation: 24, font: { size: 11 } },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: legendTextColor,
          callback: (v) => Number(v).toLocaleString(),
        },
        grid: {
          color: "rgba(51, 65, 85, 0.45)",
          tickBorderDash: [4, 4],
        },
        border: { display: false },
      },
    },
  };

  const data = {
    labels: volumeChartData.labels,
    datasets: [
      {
        label: "Volume",
        data: volumeChartData.values,
        backgroundColor: [
          "rgba(56, 189, 248, 0.55)",
          "rgba(52, 211, 153, 0.55)",
          "rgba(251, 191, 36, 0.5)",
          "rgba(251, 113, 133, 0.5)",
        ],
        borderRadius: 8,
        borderSkipped: false,
        borderWidth: 0,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export function VerificationStatusChart() {
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "62%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: legendTextColor,
          padding: 14,
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 8,
          font: { size: 11 },
        },
      },
      tooltip: {
        ...chartTooltipTheme,
        callbacks: {
          label: (ctx) => {
            const v = ctx.raw as number;
            const sum = statusChartData.values.reduce((a, b) => a + b, 0);
            const pct = sum ? ((v / sum) * 100).toFixed(1) : "0";
            return ` ${v.toLocaleString()} (${pct}%)`;
          },
        },
      },
    },
  };

  const data = {
    labels: statusChartData.labels,
    datasets: [
      {
        data: statusChartData.values,
        borderWidth: 0,
        backgroundColor: [
          "rgba(52, 211, 153, 0.75)",
          "rgba(56, 189, 248, 0.75)",
          "rgba(251, 191, 36, 0.8)",
          "rgba(167, 139, 250, 0.75)",
          "rgba(251, 113, 133, 0.8)",
        ],
        hoverOffset: 6,
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
}
