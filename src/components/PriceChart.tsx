import { LineChart } from "@mantine/charts";
import useDateFormat from "hooks/utils/useDateFormat";
import CustomChartTooltip from "components/CustomChartTooltip";
import { IRecord } from "types/IRecord";

const PriceChart = ({ product }: { product: IRecord[] }) => {
	const formatDate = useDateFormat();

	const data = product.map((item) => ({
		id: item.collectionId,
		price: item.price,
		currency: item.currency ?? null,
		created: formatDate(item.created),
	}));

	const YTop = Math.ceil(data[0].price / 50) * 50;
	const lastElement = data.pop();
	return (
		<LineChart
			h={300}
			data={data}
			dataKey="created"
			series={[{ name: "price", label: "Price", color: "green.9" }]}
			activeDotProps={{ r: 4, strokeWidth: 2, fill: "#fff" }}
			dotProps={{ r: 2, strokeWidth: 1 }}
			strokeWidth={1}
			unit={lastElement?.currency}
			curveType="stepAfter"
			tooltipAnimationDuration={200}
			yAxisProps={{ domain: [0, YTop + 50] }}
			tooltipProps={{
				content: ({ label, payload }) => (
					<CustomChartTooltip label={label} payload={payload} />
				),
			}}
		/>
	);
};

export default PriceChart;
