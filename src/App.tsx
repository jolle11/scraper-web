import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { Footer } from "components/Footer";
import { Header } from "components/Header";

function App() {
	return (
		<Router>
			<Header />
			<div className="app">
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
