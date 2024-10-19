import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

// Register necessary components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

const TradingCurve = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'], // Replace with your time intervals
    datasets: [
      {
        label: 'AUD/USD Price',
        data: [0.675, 0.678, 0.676, 0.679, 0.675, 0.674, 0.677], // Replace with your price data
        borderColor: '#FFA500',
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Price',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative', height: '500px', width: '500%',left:'80px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default TradingCurve;
