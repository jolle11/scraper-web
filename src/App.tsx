import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
