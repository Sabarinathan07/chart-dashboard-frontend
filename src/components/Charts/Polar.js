import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { data } from "../Data/Data";



const Polar = () => (
  <div className='container'>
    <div className='header'>
      <h1 className='title'>Polar Area Chart</h1>


    </div>
    <PolarArea data={data} />
  </div>
);

export default Polar;
