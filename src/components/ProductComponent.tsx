import { Accordion, Title } from "@mantine/core";
import PriceChart from "components/PriceChart";
import PriceTable from "components/PriceTable";

const ProductComponent = ({ product }: { product: any }) => {
	const name: string = product[0].product;

	return (
		<>
			<Accordion variant="separated" my={10} radius={"xs"}>
				<Accordion.Item value={name}>
					<Accordion.Control>
						<Title size={"h3"}>{name}</Title>
					</Accordion.Control>
					<Accordion.Panel>
						<PriceChart product={product} />
						<PriceTable product={[...product].reverse()} />
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</>
	);
};

export default ProductComponent;
