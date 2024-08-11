import { Container, Group, Flex, Button } from "@mantine/core";
import { Github, Instagram, Linkedin, Twitter } from "iconoir-react";
import { Link } from "react-router-dom";

const SOCIAL_LINKS = [
	{ icon: Github, url: "https://github.com/jolle11", label: "GitHub" },
	{
		icon: Linkedin,
		url: "https://www.linkedin.com/in/jordi-oll%C3%A9-ballest%C3%A9-8398b181/",
		label: "LinkedIn",
	},
	{ icon: Twitter, url: "https://twitter.com/jordi0lle", label: "Twitter" },
	{
		icon: Instagram,
		url: "https://www.instagram.com/jordi0lle/",
		label: "Instagram",
	},
];

export function Footer() {
	return (
		<footer>
			<Container size="lg">
				<Flex justify="space-between" align="center" wrap="wrap" gap="md">
					<Link to="https://www.jordi-olle.com">
						<Button
							component="span"
							radius="xl"
							variant="gradient"
							gradient={{ from: "indigo", to: "green", deg: 135 }}
						>
							jordi0lle
						</Button>
					</Link>
					<Group gap={0} wrap="nowrap">
						{SOCIAL_LINKS.map(({ icon: Icon, url, label }) => (
							<Button
								key={url}
								component="a"
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								size="sm"
								color="green.9"
								variant="subtle"
								m={3}
								p={5}
								aria-label={label}
							>
								<Icon />
							</Button>
						))}
					</Group>
				</Flex>
			</Container>
		</footer>
	);
}
