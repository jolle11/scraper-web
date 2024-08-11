import ProductComponent from "components/ProductComponent";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import { Center, Loader, Button, Text, ButtonGroup } from "@mantine/core";

const ProductsList = ({
	products,
}: {
	products: string[];
}) => {
	const [isReady, setIsReady] = useState<boolean>(false);
	const [receivedProducts, setReceivedProducts] = useState<any>([]);
	const [filteredProducts, setFilteredProducts] = useState<any>([]);
	const [filterValue, setFilterValue] = useState<string>("all");

	const pb = new PocketBase(import.meta.env.VITE_POCKETHOST_URL);

	useEffect(() => {
		const fetchProducts = async () => {
			const fetchedProducts = await Promise.all(
				products.map((product) =>
					pb.collection(product).getFullList({ sort: "created" }),
				),
			);
			setReceivedProducts(fetchedProducts);
			setFilteredProducts(fetchedProducts);
			setIsReady(true);
		};

		fetchProducts();
	}, []);

	useEffect(() => {
		if (filterValue === "all") {
			setFilteredProducts(receivedProducts);
		} else {
			const limit = Number.parseInt(filterValue);
			setFilteredProducts(
				receivedProducts.map((product: any[]) => product.slice(-limit)),
			);
		}
	}, [filterValue, receivedProducts]);

	const handleFilterChange = (value: string) => {
		setFilterValue(value);
	};

	const filterOptions = [
		{ value: "7", label: "Last 7" },
		{ value: "15", label: "Last 15" },
		{ value: "30", label: "Last 30" },
		{ value: "60", label: "Last 60" },
		{ value: "90", label: "Last 90" },
		{ value: "all", label: "See all items" },
	];

	return (
		<>
			{isReady ? (
				<>
					<ButtonGroup style={{ marginBottom: "1rem" }}>
						{filterOptions.map((option) => (
							<Button
								key={option.value}
								variant={filterValue === option.value ? "filled" : "outline"}
								onClick={() => handleFilterChange(option.value)}
								size="sm"
								radius="xs"
							>
								{option.label}
							</Button>
						))}
					</ButtonGroup>
					{filteredProducts.map((product: any, index: number) => (
						<ProductComponent key={index} product={product} />
					))}
					<Center>
						<Text style={{ textAlign: "center" }}>
							I'm running this locally on my machine, so prices can be missing
							or something else (this trackings are personal but someone might
							be interested on something tracked here :P)
						</Text>
					</Center>
				</>
			) : (
				<Center>
					<Loader size={"xl"} mt={"xl"} />
				</Center>
			)}
		</>
	);
};

export default ProductsList;
