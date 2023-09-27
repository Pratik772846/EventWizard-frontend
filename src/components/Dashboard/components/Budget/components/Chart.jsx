import React from 'react';
import LineChart from '../../LineChart';
import StackChart from '../../StackChart';
import PieChart from '../../PieChart';

const Chart = () => {
  return (
    <div className="w-full bg-red-100 h-96">
      <LineChart style={{ width: '100%', height: '60%' }} /> 
      <br />
      <StackChart style={{ width: '100%', height: '40%' }} /> 
    </div>
  );
};

export default Chart;
