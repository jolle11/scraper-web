import { Paper, Text } from "@mantine/core";

interface ChartTooltipProps {
	label: string;
	payload: Record<string, any>[] | undefined;
}

const CustomChartTooltip = ({ label, payload }: ChartTooltipProps) => {
	if (!payload) {
		return null;
	}

	return (
		<Paper px="sm" py="sm" withBorder radius={"xs"} shadow="md">
			<Text fw={500} mb={5}>
				{label}
			</Text>
			{payload.map((item) => (
				<Text key={item.payload.id} fz="sm">
					{item.payload.price}
					{item.payload.currency}
				</Text>
			))}
		</Paper>
	);
};

export default CustomChartTooltip;
