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
		<Paper px="sm" py="sm" withBorder shadow="md">
			<Text fw={500} mb={5}>
				{label}
			</Text>
			{payload.map((item: any) => (
				<>
					<Text key={item.name} c={item.color} fz="sm">
						{item.price}
						{item.currency}
					</Text>
				</>
			))}
		</Paper>
	);
};

export default CustomChartTooltip;
