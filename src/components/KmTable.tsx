import { Table } from "@mantine/core";

const KmTable = () => {
	return (
		<Table striped highlightOnHover>
			<Table.Thead>
				<Table.Tr>
					<Table.Th style={{ textAlign: "center" }}>KM</Table.Th>
					<Table.Th style={{ textAlign: "center" }}>Price</Table.Th>
					<Table.Th style={{ textAlign: "center" }}>Paid</Table.Th>
					<Table.Th style={{ textAlign: "center" }}>Created</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>
				{item?.map((i) => (
					<Table.Tr key={i.id}>
						<Table.Td style={{ textAlign: "center" }}>{i.product}</Table.Td>
						<Table.Td style={{ textAlign: "center" }}>{i.price}</Table.Td>
						<Table.Td style={{ textAlign: "center" }}>{i.currency}</Table.Td>
						<Table.Td style={{ textAlign: "center" }}>{i.created}</Table.Td>
					</Table.Tr>
				))}
			</Table.Tbody>
		</Table>
	);
};

export default KmTable;
