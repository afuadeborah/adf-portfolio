import aboutIcon from "../../assets/images/icons/book-about.png";
import workIcon from "../../assets/images/icons/briefcase.png";
import projectsIcon from "../../assets/images/icons/projects.png";
import contactIcon from "../../assets/images/icons/phone-contact.png";
import Welcome from "../Welcome";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className='home__container d-md-flex justify-content-between mb-4'>
			<div className='flex-grow-1'>
				<Welcome />
			</div>

			<div className='d-none d-md-flex flex-column flex-shrink-1 window__icon-flex-container'>
				<div className='window__icon-container text-center text-right'>
					<Link to='/about'>
						<img
							src={aboutIcon}
							className='window__icon'
							alt='About icon'
						/>
						<p className='text-white mb-0 mt-2'>About</p>
					</Link>
				</div>

				<div className='window__icon-container text-center mt-4'>
					<Link to='/work'>
						<img
							src={workIcon}
							className='window__icon'
							alt='Work icon'
						/>
						<p className='text-white mb-0 mt-2'>Work</p>
					</Link>
				</div>

				<div className='window__icon-container text-center mt-4'>
					<Link to='/projects'>
						<img
							src={projectsIcon}
							className='window__icon'
							alt='Projects & Skills icon'
						/>
						<p className='text-white mb-0 mt-2'>Projects</p>
					</Link>
				</div>

				<div className='window__icon-container text-center mt-4'>
					<Link to='/contact'>
						<img
							src={contactIcon}
							className='window__icon'
							alt='Contact icon'
						/>
						<p className='text-white mb-0 mt-2'>Contact</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
