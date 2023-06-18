import React from 'react';
import { Bar } from 'react-chartjs-2';

const StackChart = () => {
  const chartData = {
    labels: ['2005', '2006', '2007', '2008', '2009', '2010', '2011'],
    datasets: [
      {
        label: 'Budget',
        data: [28, 44, 48, 50, 66, 78, 84],
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
      },
      {
        label: 'Expense',
        data: [10, 20, 30, 39, 50, 70, 100],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: 'rgba(0, 0, 0, 0.8)',
        formatter: (value, context) => {
          const budget = context.dataset.data[context.dataIndex];
          const expense = context.dataset.data2[context.dataIndex];

          if (expense > budget) {
            return 'More';
          } else if (expense < budget) {
            return 'Less';
          } else {
            return '';
          }
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        min: 0,
        max: 200,
        ticks: {
          stepSize: 20,
          callback: (value) => `${value} lakhs`,
        },
      },
    },
  };

  return (
    <div style={{ height: '420px' }}>
      <Bar data={chartData} options={chartOptions} plugins={['datalabels']} />
    </div>
  );
};

export default StackChart;
