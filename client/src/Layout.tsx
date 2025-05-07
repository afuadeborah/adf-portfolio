import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const Layout = () => {
	return (
		<>
			<div className='d-md-flex justify-content-around mb-4'>
				<div className='m-4'>
					<Outlet />
				</div>
				<Menu />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
