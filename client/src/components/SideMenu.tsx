import { useState, useEffect } from "react";
import { fetchMenuItems } from "../api";
import { Link, useLocation } from "react-router-dom";
import type { MenuItems } from "../types";

const SideMenu = () => {
	const [menuItems, setMenuItems] = useState<MenuItems[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// TODO: Update this before deploying
	const serverUrl = "http://localhost:5000";
	const location = useLocation();

	useEffect(() => {
		const getMenuItems = async () => {
			try {
				const items = await fetchMenuItems();
				const sideMenu = items.filter(
					(item) => item.position === "RIGHT"
				);

				setMenuItems(sideMenu);
				setLoading(false);
			} catch (error) {
				setError("Unable to load menu items.");
				setLoading(false);
			}
		};

		getMenuItems();
	}, [location.pathname]);

	const isHomePage = location.pathname === "/";

	return (
		<div className='d-none d-md-flex flex-column flex-shrink-1 right-icon-container'>
			{menuItems.map((item, index) => {
				// Don't show the Home icon on the homepage
				if (item.name === "Home" && isHomePage) {
					return null;
				}

				return (
					<Link
						key={index}
						to={item.url}
						className='text-center mb-5'
					>
						<img
							src={`${serverUrl}${item.imgUrl}`}
							className='window__icon'
							alt={`${item.name} icon`}
						/>
						<p className='window__icon-text text-white mt-2'>
							{item.name}
						</p>
					</Link>
				);
			})}{" "}
		</div>
	);
};

export default SideMenu;
