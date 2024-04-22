import { LineChart } from "@mantine/charts";
import CustomChartTooltip from "./CustomChartTooltip";

//TODO: define prices type
const PriceChart = (prices: any) => {
	// const media_line = Number.parseFloat(media_paid as string);
	return (
		<LineChart
			h={200}
			data={[...prices].reverse()}
			dataKey="created"
			series={[{ name: "price", label: "Price", color: "yellow.9" }]}
			// referenceLines={[
			// 	{
			// 		y: media_line,
			// 		label: `Media paid ${media_paid}€`,
			// 		color: "indigo.6",
			// 	},
			// ]}
			tooltipProps={{
				content: ({ label, payload }) => (
					<CustomChartTooltip label={label} payload={payload} />
				),
			}}
			activeDotProps={{ r: 7, strokeWidth: 2, fill: "#fff" }}
			strokeWidth={1.5}
			unit="€"
			curveType="bump"
		/>
	);
};

export default PriceChart;
