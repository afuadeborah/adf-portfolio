import React from "react";
import { RouterProvider } from "react-router-dom";
import "./styles/scss/styles.scss";
import "98.css";
import router from "./router";

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
