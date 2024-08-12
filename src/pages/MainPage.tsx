import { Container, Title } from "@mantine/core";
import ProductsList from "components/ProductsList";

const PRODUCT_NAMES = [
	"coros",
	"decathlon",
	"horl",
	"nexx",
	"powertronic_ecu",
	"ruroc",
	"toe_spacer",
];

const MainPage = () => {
	return (
		<Container size="lg" my="xl">
			<Title order={1} mb="md">
				My Product Tracking Dashboard
			</Title>
			<ProductsList products={PRODUCT_NAMES} />
		</Container>
	);
};

export default MainPage;
