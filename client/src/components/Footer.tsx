import windowsIcon from "../assets/images/icons/windows-icon.png";
import connectIcon from "../assets/images/icons/conn-dialup-ok.png";
import speakerIcon from "../assets/images/icons/loudspeaker-wave.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
	const time = new Date();
	const formattedTime = time.toLocaleString([], {
		hour: "numeric",
		minute: "2-digit",
	});

	// Pass in the current page to the "clicked" tab
	const location = useLocation();

	const getCurrentPage = () => {
		const path = location.pathname;

		if (path === "/") return "Home";
		// remove leading slash, capitalize first letter, rejoin the full string
		return path.substring(1).charAt(0).toUpperCase() + path.substring(2);
	};

	return (
		<footer className='footer d-flex justify-content-between align-items-center'>
			<div className='d-flex'>
				<div>
					<button className='footer__start-button default'>
						<img
							src={windowsIcon}
							className='start__icon mr-2'
							alt='Windows Start icon'
						/>
						Start
					</button>
				</div>
				<div className='footer__active-program'>{getCurrentPage()}</div>
			</div>

			<div className='status-bar-field flex-grow-0 text-uppercase footer__time-box d-flex justify-content-between'>
				<div className='d-flex'>
					<div className='footer__icon'>
						<img src={connectIcon} alt='Connection OK icon' />
					</div>
					<div className='footer__icon'>
						<img src={speakerIcon} alt='Speaker icon' />
					</div>
				</div>
				{formattedTime}
			</div>
		</footer>
	);
};

export default Footer;
