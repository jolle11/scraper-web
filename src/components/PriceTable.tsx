import { Table, ScrollArea } from "@mantine/core";
import useDateFormat from "hooks/utils/useDateFormat";
import type { IRecord } from "types/IRecord";

interface IPriceTableProps {
	product: IRecord[];
}

const TABLE_HEADER_HEIGHT = 50;
const TABLE_ROW_HEIGHT = 35;
const MAX_VISIBLE_ROWS = 15;

const PriceTable = ({ product }: IPriceTableProps) => {
	const formatDate = useDateFormat();
	const tableHeight = Math.min(
		product.length * TABLE_ROW_HEIGHT + TABLE_HEADER_HEIGHT,
		MAX_VISIBLE_ROWS * TABLE_ROW_HEIGHT + TABLE_HEADER_HEIGHT,
	);

	return (
		<ScrollArea
			h={tableHeight}
			type="always"
			offsetScrollbars
			style={{ marginTop: 10 }}
		>
			<Table
				striped
				highlightOnHover
				stickyHeader
				stickyHeaderOffset={-1}
				withTableBorder
				withColumnBorders
			>
				<Table.Thead>
					<Table.Tr>
						<Table.Th ta="center">Price</Table.Th>
						<Table.Th ta="center">Currency</Table.Th>
						<Table.Th ta="center">Created</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{product.map((item) => (
						<Table.Tr key={item.id}>
							<Table.Td ta="center">{item.price}</Table.Td>
							<Table.Td ta="center">{item.currency}</Table.Td>
							<Table.Td ta="center">{formatDate(item.created)}</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</ScrollArea>
	);
};

export default PriceTable;
