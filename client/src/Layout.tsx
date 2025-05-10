import { Outlet } from "react-router-dom";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";

const Layout = () => {
	return (
		<>
			<div className='d-md-flex justify-content-between mb-4'>
				<Menu />

				<div className='m-4'>
					<Outlet />
				</div>

				<SideMenu />
			</div>

			<Footer />
		</>
	);
};

export default Layout;
