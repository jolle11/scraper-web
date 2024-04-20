import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/notifications/styles.css";

const theme = createTheme({
	// fontFamily: "DM Sans, sans-serif",
	// fontFamilyMonospace: "DM Sans, sans-serif",
	// headings: { fontFamily: "DM Sans, sans-serif" },
	defaultRadius: "xl",
	primaryColor: "indigo",
	primaryShade: 7,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MantineProvider theme={theme}>
			<App />
		</MantineProvider>
	</React.StrictMode>,
);
