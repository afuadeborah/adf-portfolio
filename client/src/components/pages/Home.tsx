import aboutIcon from "../../assets/images/icons/book-about.png";
import workIcon from "../../assets/images/icons/briefcase.png";
import projectsIcon from "../../assets/images/icons/projects.png";
import contactIcon from "../../assets/images/icons/phone-contact.png";
import Welcome from "../Welcome";

const Home = () => {
	return (
		<div className='d-md-flex justify-content-between mb-4'>
			<div className='flex-grow-1 m-4'>
				<Welcome />
			</div>
			<div className='d-none d-md-flex flex-column flex-shrink-1 window__icon-flex-container'>
				<div className='window__icon-container text-center text-right'>
					<img
						src={aboutIcon}
						className='window__icon'
						alt='About icon'
					/>
					<p className='text-white mb-0 mt-2'>About</p>
				</div>
				<div className='window__icon-container text-center mt-4'>
					<img
						src={workIcon}
						className='window__icon'
						alt='Work icon'
					/>
					<p className='text-white mb-0 mt-2'>Work</p>
				</div>
				<div className='window__icon-container text-center mt-4'>
					<img
						src={projectsIcon}
						className='window__icon'
						alt='Projects & Skills icon'
					/>
					<p className='text-white mb-0 mt-2'>Projects</p>
				</div>
				<div className='window__icon-container text-center mt-4'>
					<img
						src={contactIcon}
						className='window__icon'
						alt='Contact icon'
					/>
					<p className='text-white mb-0 mt-2'>Contact</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
