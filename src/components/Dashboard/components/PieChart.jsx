import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const expenses = [
    {
      "amount": 2000,
      "type": "cloth",
      "_id": "64b6a0654110da722390c5f7"
    },
    {
      "amount": 1000,
      "type": "Misc",
      "_id": "64b7a9caaa5b1559eec37a96"
    }
    ,
    {
      "amount": 2000,
      "type": "food",
      "_id": "64b7a9caaa5b1559eec37a97"
    }
  ];

  const totalBudget = 6000;

  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  const percentages = expenses.map(expense => (expense.amount / totalExpense) * 100);

  const colors = Array.from({ length: expenses.length }, () =>
    '#' + (Math.random().toString(16) + '000000').slice(2, 8)
  );

  const chartData = {
    labels: expenses.map(expense => expense.type),
    datasets: [
      {
        data: percentages,
        backgroundColor: colors,
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
    },
  };

  return (
    <div style={{ height: '420px' }}>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
