import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import Chart from 'chart.js/auto';
import 'chart.js/dist/chart.min.js';
import 'chartjs-adapter-moment/dist/chartjs-adapter-moment.min.js';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;
    if (chartInstance) {
      Chart.register(Chart.controllers.line, Chart.scaleService.getScaleConstructor('time'));
    }
  }, []);

  const lineChartData = [
    {
      label: 'Budget',
      data: [
        { x: moment('2005-01-01'), y: 28 },
        { x: moment('2006-01-01'), y: 44 },
        { x: moment('2007-01-01'), y: 48 },
        { x: moment('2008-01-01'), y: 50 },
        { x: moment('2009-01-01'), y: 66 },
        { x: moment('2010-01-01'), y: 78 },
        { x: moment('2011-01-01'), y: 84 },
      ],
      color: 'blue',
    },
    {
      label: 'Expense',
      data: [
        { x: moment('2005-01-01'), y: 10 },
        { x: moment('2006-01-01'), y: 20 },
        { x: moment('2007-01-01'), y: 30 },
        { x: moment('2008-01-01'), y: 39 },
        { x: moment('2009-01-01'), y: 50 },
        { x: moment('2010-01-01'), y: 70 },
        { x: moment('2011-01-01'), y: 100 },
      ],
      color: 'green',
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
        type: 'time',
        time: {
          unit: 'year',
          displayFormats: {
            year: 'YYYY',
          },
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (value) => `${value}%`,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'rgba(0, 0, 0, 0.8)', // Color for legend labels
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
