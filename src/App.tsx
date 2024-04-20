import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
	return (
		<Router>
			<Header />
			<div className="app">
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
