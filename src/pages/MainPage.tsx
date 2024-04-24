import { Container, Title } from "@mantine/core";
import ProductsList from "components/ProductsList";

const MainPage = () => {
	const productNameArray = [
		"decathlon",
		"nexx",
		"powertronic_ecu",
		"remarkable",
		"ruroc",
		"toe_spacer",
	];

	return (
		<Container size={"lg"} my={"xl"}>
			<Title>A website for my trackings</Title>
			<ProductsList products={productNameArray} />
		</Container>
	);
};

export default MainPage;
