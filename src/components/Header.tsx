import {
	Box,
	Burger,
	Button,
	Container,
	Drawer,
	Group,
	ScrollArea,
	useComputedColorScheme,
	useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HalfMoon, CandlestickChart, SunLight } from "iconoir-react";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false);
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("light", {
		getInitialValueInEffect: true,
	});
	const navigate = useNavigate();

	const toggleColorScheme = () =>
		setColorScheme(computedColorScheme === "light" ? "dark" : "light");

	const ColorSchemeIcon = computedColorScheme === "light" ? SunLight : HalfMoon;

	return (
		<Box style={{ boxShadow: "0px 0px 5px gray" }}>
			<Container size="lg">
				<Group justify="space-between" h="100%" py={12}>
					<Button
						onClick={() => navigate("/")}
						leftSection={<CandlestickChart />}
					>
						ODS
					</Button>

					<Group>
						<Button.Group visibleFrom="sm">
							<Button
								onClick={toggleColorScheme}
								variant="light"
								color="yellow"
								p={6}
								aria-label="Toggle color scheme"
							>
								<ColorSchemeIcon fontSize={14} />
							</Button>
						</Button.Group>
						<Burger
							opened={drawerOpened}
							onClick={toggleDrawer}
							hiddenFrom="sm"
						/>
					</Group>
				</Group>
			</Container>

			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size="100%"
				title="On Demand Scraping"
				hiddenFrom="sm"
				zIndex={1000000}
			>
				<ScrollArea h="calc(90vh - 60px)">
					<Link to="/">Home</Link>
				</ScrollArea>
				<Button
					onClick={toggleColorScheme}
					variant="light"
					color="yellow"
					fullWidth
					aria-label="Toggle color scheme"
				>
					<ColorSchemeIcon fontSize={14} />
					{computedColorScheme === "light" ? "Dark Mode" : "Light Mode"}
				</Button>
			</Drawer>
		</Box>
	);
}
