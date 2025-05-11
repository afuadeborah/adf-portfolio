import aboutIcon from "../../assets/images/icons/book-about.png";
import adfPhoto from "../../assets/images/afua-deborah.jpg";
import consoleIcon from "../../assets/images/icons/console.png";
import usersIcon from "../../assets/images/icons/group.png";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className='window mx-4 my-2'>
			<div className='title-bar'>
				<h1 className='title-bar-text'>
					<img src={aboutIcon} alt='About icon' />
					About Afua Deborah
				</h1>
				<div className='title-bar-controls'>
					<button aria-label='Close'></button>
				</div>
			</div>

			<div className='about__window-container d-flex flex-column bg-white mb-3 p-3'>
				<div className='d-flex flex-column justify-content-around align-items-center'>
					<div>
						<img
							className='about__image'
							src={adfPhoto}
							alt='Afua Deborah standing in front of yellow background'
						/>
					</div>

					<div className='about__name-container ml-md-2'>
						<p className='lead about__pronounciation mt-3'>
							/ah-fwah dEb-ruh/
						</p>
					</div>
				</div>

				<div className='about__copy-container mx-3 my-4'>
					<p>
						Hello World! I'm Afua Deborah, a Frontend-Focused
						Fullstack Developer based out of Canada.
					</p>
					<p className='my-3'>
						Over the years, my professional journey has evolved from
						intern at a digital marketing agency to intermediate at
						a product, picking up various modern languages and
						frameworks from Python and PHP to feature build projects
						in React, Vue, and TypeScript.
					</p>
					<p className='my-3'>
						With years of experience as a frontend-focused fullstack
						developer, I've built and maintained registration
						platforms, legacy codebases, and developed
						customer-centric sites, apps, and dashboards across
						product and digital marketing teams. I bring a strong
						eye for design, a growing backend skill set, and a
						collaborative approach shaped by both creative and
						technical foundations.
					</p>
					<p className='my-3'>
						I'm excited to make the leap and continue refining my
						skills, hopefully with your company one day. Drop me a
						line and/or your favourite restaurant in Toronto or
						Montreal, check me out at:
					</p>

					<div className='d-flex justify-content-evenly mt-4'>
						<Link
							to='https://github.com/afuadeborah'
							target='_blank'
							rel='noopener noreferrer'
							className='about__social-link text-center text-black mb-5'
							aria-hidden='true'
							title="Go to Afua's Github"
						>
							<img
								src={consoleIcon}
								className='about__social'
								alt=''
							/>
							<p className='about__link mt-2 text-center'>
								Github
							</p>
						</Link>

						<Link
							to='https://www.linkedin.com/in/meet-afua-frimpong'
							target='_blank'
							rel='noopener noreferrer'
							className='about__social-link text-center text-black'
							aria-hidden='true'
							title="Go to Afua's LinkedIn"
						>
							<img
								src={usersIcon}
								className='about__social'
								alt=''
							/>
							<p className='about__link mt-2 text-center'>
								LinkedIn
							</p>
						</Link>
					</div>
				</div>
			</div>

			<div className='status-bar'>
				<p className='status-bar-field'>Press F1 for help</p>
				<p className='status-bar-field'>Slide 1</p>
				<p className='status-bar-field'>CPU Usage: 44%</p>
			</div>
		</div>
	);
};

export default About;
