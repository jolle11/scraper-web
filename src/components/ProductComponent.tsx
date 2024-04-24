import { Title } from "@mantine/core";
import { IRecord } from "types/IRecord";
import PriceChart from "components/PriceChart";
import PriceTable from "components/PriceTable";

const ProductComponent = ({ product }: { product: IRecord[] }) => {
	const name: string = product[0].product;

	return (
		<>
			<Title pb={20} pt={50}>
				{name}
			</Title>
			<PriceChart product={product} />
			<PriceTable product={[...product].reverse()} />
		</>
	);
};

export default ProductComponent;
