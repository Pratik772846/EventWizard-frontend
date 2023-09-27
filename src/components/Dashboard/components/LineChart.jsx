import React, { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Refresh from "../../../hooks/useRefreshtoken.jsx";

const LineChart = () => {
  const chartRef = useRef(null);
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
        console.log(response.data);
        setExpenses(response.data); 
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;
    if (chartInstance) {
      Chart.register(Chart.controllers.line, Chart.scaleService.getScaleConstructor('time'));
    }
  }, []);

  const lineChartData = [
    {
      label: 'Amount',
      data: expenses.map(expense => ({ x: expense.type, y: expense.amount })),
      color: 'blue',
    },
  ];

  const chartData = {
    datasets: lineChartData.map((data) => ({
      label: data.label,
      data: data.data,
      borderColor: data.color,
      backgroundColor: 'transparent',
      pointRadius: 4,
      pointBackgroundColor: 'white',
      pointBorderColor: data.color,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 2,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: data.color,
    })),
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category', 
      },
      y: {
        min: 0,
        ticks: {
          stepSize: 500,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'rgba(0, 0, 0, 0.8)', 
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 10,
    },
    elements: {
      line: {
        borderWidth: 1,
        fill: false,
      },
      point: {
        radius: 4,
        borderWidth: 1,
        backgroundColor: 'white',
        hoverRadius: 6,
        hoverBorderWidth: 2,
      },
    },
    backgroundColor: '#fff',
  };

  return (
    <div className="h-96">
      <Line ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
