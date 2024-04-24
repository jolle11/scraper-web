import { Table, Title } from "@mantine/core";
import useDateFormat from "hooks/utils/useDateFormat";
import { IRecord } from "types/IRecord";

const PriceTable = ({ product }: { product: IRecord[] }) => {
	const formatDate = useDateFormat();
	return (
		<>
			<Title size={"h3"}>Last 20 prices</Title>
			<Table striped highlightOnHover>
				<Table.Thead>
					<Table.Tr>
						<Table.Th style={{ textAlign: "center" }}>Price</Table.Th>
						<Table.Th style={{ textAlign: "center" }}>Currency</Table.Th>
						<Table.Th style={{ textAlign: "center" }}>Created</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{product?.map((p, index) => (
						<Table.Tr key={p.id}>
							<Table.Td
								style={{ textAlign: "center" }}
								display={`${index > 20 ? "none" : ""}`}
							>
								{p.price}
							</Table.Td>
							<Table.Td
								style={{ textAlign: "center" }}
								display={`${index > 20 ? "none" : ""}`}
							>
								{p.currency}
							</Table.Td>
							<Table.Td
								style={{ textAlign: "center" }}
								display={`${index > 20 ? "none" : ""}`}
							>
								{formatDate(p.created)}
							</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</Table>
		</>
	);
};

export default PriceTable;
