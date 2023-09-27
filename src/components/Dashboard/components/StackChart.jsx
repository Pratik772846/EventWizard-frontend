import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Refresh from "../../../hooks/useRefreshtoken.jsx";


const StackChart = () => {
  const [expenses, setExpenses] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await Refresh(); 
        const config = {
          headers: {
            'authorization': `Bearer ${accessToken}`
          }
        };

        const response = await axios.get(`http://localhost:3000/expense/${id}`, config); 
        setExpenses(response.data); 
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchData();
  }, [id]);

  const chartData = {
    labels: expenses.map(expense => expense.type),
    datasets: [
      {
        label: 'Amount',
        data: expenses.map(expense => expense.amount),
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
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
       
        ticks: {
          stepSize: 500,
          callback: (value) => `${value}`,
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
