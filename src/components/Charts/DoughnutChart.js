import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { data } from "../Data/Data";



const DoughnutChart = () => (
  <div className='container'>
    <div className='header'>
      <h1 className='title'>Doughnut Chart</h1>
    
    </div>
    <Doughnut data={data} />
  </div>
);

export default DoughnutChart;

