import React from "react";
import "./styles/scss/styles.scss";
import "98.css";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";

const App: React.FC = () => {
	return (
		<div>
			{/* TODO: pass in current page */}
			<Home />
			<Footer />
		</div>
	);
};

export default App;
