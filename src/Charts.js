import BarChart from "./components/Charts/BarChart";
import LineChart from "./components/Charts/LineChart";
import PieChart from "./components/Charts/PieChart";
import DoughnutChart from "./components/Charts/DoughnutChart";
import Polar from "./components/Charts/Polar";

const Chart = () => {
	return (
		<div>
			<BarChart />
			<PieChart />
			<LineChart />
			<DoughnutChart />
			<Polar />
		</div>
	);
};

export default Chart;
