import { data, options } from "../Data/Data";
import { Line } from "react-chartjs-2";

const LineChart = () => (
    <div className='container'>
      <div className='header'>
        <h1 className='title'>Line Chart</h1>
       
      
      </div>
      <Line data={data} options={options} />
    </div>
  );
  
  export default LineChart;
  