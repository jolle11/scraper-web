import { Center, Table, Text } from "@mantine/core";
import useDateFormat from "hooks/utils/useDateFormat";
import { IRecord } from "types/IRecord";

const PriceTable = ({ product }: { product: IRecord[] }) => {
	const formatDate = useDateFormat();
	const variableHeight = 35 * product.length + 70;

	return (
		<>
			<Table.ScrollContainer
				minWidth={500}
				h={product.length < 16 ? variableHeight : 500}
				my={20}
				type="native"
				style={{
					borderColor: "#CED4DA",
					borderWidth: "1px",
					borderStyle: "solid",
				}}
			>
				<Table
					striped
					stickyHeader
					stickyHeaderOffset={-5}
					withTableBorder
					highlightOnHover
				>
					<Table.Thead>
						<Table.Tr h={50}>
							<Table.Th style={{ textAlign: "center" }}>Price</Table.Th>
							<Table.Th style={{ textAlign: "center" }}>Currency</Table.Th>
							<Table.Th style={{ textAlign: "center" }}>Created</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{product?.map((p) => (
							<Table.Tr key={p.id}>
								<Table.Td style={{ textAlign: "center" }}>{p.price}</Table.Td>
								<Table.Td style={{ textAlign: "center" }}>
									{p.currency}
								</Table.Td>
								<Table.Td style={{ textAlign: "center" }}>
									{formatDate(p.created)}
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</Table.ScrollContainer>
			<Center>
				<Text>Some elements may be missing or without currency</Text>
			</Center>
		</>
	);
};

export default PriceTable;
