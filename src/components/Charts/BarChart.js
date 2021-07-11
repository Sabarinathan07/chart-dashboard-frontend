import { data, options } from "../Data/Data";
import { Bar,Chart } from "react-chartjs-2";

// defaults.global.tooltips.enabled = false;
Chart.defaults.plugins.legend.position = 'bottom';


const BarChart = () => {
	return (
		<div className="container">
		<div className='header'>
		  <h1 className='title'>Bar Chart</h1>
		  
		</div>
		<Bar data={data} options={options} />
	  </div>
	);
};

export default BarChart;
