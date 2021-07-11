import React from 'react';
import { Pie } from 'react-chartjs-2';
import { data, options } from "../Data/Data";



const PieChart = () => (
  <div className='container'>
    <div className='header'>
      <h1 className='title'>Pie Chart</h1>
     
    </div>
    <Pie data={data} />
  </div>
);

export default PieChart;
