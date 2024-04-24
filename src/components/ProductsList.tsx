import ProductComponent from "components/ProductComponent";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import { IRecord } from "types/IRecord";
import { Center, Loader } from "@mantine/core";

const ProductsList = ({
	products,
}: {
	products: string[];
}) => {
	const [isReady, setIsReady] = useState<boolean>(false);

	const pb = new PocketBase(import.meta.env.VITE_POCKETHOST_URL);

	const [receivedProducts, setReceivedProducts] = useState<IRecord[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const fetchedProducts = await Promise.all(
				products.map((product) =>
					pb.collection(product).getFullList({ sort: "created" }),
				),
			);
			setReceivedProducts(fetchedProducts);
			setIsReady(true);
		};

		fetchProducts();
	}, []);

	return (
		<>
			{isReady ? (
				receivedProducts.map((product) => (
					<ProductComponent product={product} />
				))
			) : (
				<Center>
					<Loader size={"xl"} mt={"xl"} />
				</Center>
			)}
		</>
	);
};

export default ProductsList;
