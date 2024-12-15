import { Container, Title, Alert } from "@mantine/core";
import { WarningCircle } from "iconoir-react";
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
			<Alert
				icon={<WarningCircle width="1rem" height="1rem" />}
				title="Project Discontinued"
				color="red"
				mb="xl"
			>
				This project is no longer actively maintained and has been discontinued.
				The information shown may not be up to date.
			</Alert>
			<Title order={1} mb="md">
				My Product Tracking Dashboard
			</Title>
			<ProductsList products={PRODUCT_NAMES} />
		</Container>
	);
};

export default MainPage;
