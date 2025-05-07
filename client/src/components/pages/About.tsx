import aboutIcon from "../../assets/images/icons/book-about.png";
import adfPhoto from "../../assets/images/afua-deborah.jpg";

const About = () => {
	return (
		<div className='window m-4'>
			<div className='title-bar'>
				<h1 className='title-bar-text'>
					<img src={aboutIcon} alt='About icon' />
					About Afua Deborah
				</h1>
				<div className='title-bar-controls'>
					<button aria-label='Close'></button>
				</div>
			</div>

			<div className='about__window-container d-flex flex-column bg-white mb-3 py-1'>
				<div className='d-flex'>
					<div>
						<img
							className='about__image'
							src={adfPhoto}
							alt='Afua Deborah standing in front of yellow background'
						/>
					</div>

					<div className='about__name-container ml-md-2'>
						<h2>Afua Deborah Frimpong</h2>
						<p className='lead about__pronounciation'>
							/ah-fwah dEb-ruh/
						</p>
					</div>
				</div>

				<div>
					<p>
						Hello World! I'm Afua Deborah, a Frontend-Focused
						Fullstack Developer based out of Canada.
					</p>
					<p>
						Over the years, my professional journey has evolved from
						intern at a digital marketing agency to intermediate at
						a product, utilizing various modern languages and
						frameworks from Python and PHP to projects in React,
						Vue, and TypeScript.
					</p>
					<p>Additional content to test scrolling...</p>
					<p>More content to ensure we have enough to scroll.</p>
					<p>
						Even more content to make sure scrolling is necessary.
					</p>
					<p>
						This should definitely create enough content to scroll.
					</p>
					<p>
						If we're still not scrolling, there's a CSS issue to
						fix.
					</p>
					<p>Let's add even more content just to be sure.</p>
					<p>
						This should be plenty of content to trigger scrolling.
					</p>
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
