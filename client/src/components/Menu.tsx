import { useState, useEffect } from "react";
import { fetchMenuItems } from "../api";
import { Link } from "react-router-dom";
import type { MenuItems } from "../types";

const Menu = () => {
	const [menuItems, setMenuItems] = useState<MenuItems[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// TODO: Update this before deploying
	const serverUrl = "http://localhost:5000";

	useEffect(() => {
		const getMenuItems = async () => {
			try {
				const items = await fetchMenuItems();
				const mainMenu = items.filter(
					(item) => item.position === "LEFT"
				);

				setMenuItems(mainMenu);
				setLoading(false);
			} catch (error) {
				setError("Unable to load menu items.");
				setLoading(false);
			}
		};

		getMenuItems();
	}, []);

	return (
		<div className='d-none d-md-flex flex-column flex-shrink-1 window__icon-flex-container'>
			{menuItems.map((item, index) => (
				<Link key={index} to={item.url} className='text-center mb-3'>
					<img
						src={`${serverUrl}${item.imgUrl}`}
						className='window__icon'
						alt={`${item.name} icon`}
					/>
					<p className='window__icon-text text-white mt-2'>
						{item.name}
					</p>
				</Link>
			))}
		</div>
	);
};

export default Menu;
