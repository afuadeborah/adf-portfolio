import purpleLogo from "../assets/images/purple-logo.svg";
import epaLogo from "../assets/images/epa-logo.svg";

const Welcome = () => {
	return (
		<div className='window welcome__window bg-black m-4 p-3 d-flex flex-column justify-content-between'>
			<div className='d-flex justify-content-between align-items-start'>
				<div className='d-flex mb-4 mb-md-2'>
					<img src={purpleLogo} height={55} width={33} alt='' />
					<div className='welcome__text-container'>
						<p className='welcome__text'>Welcome to my site!</p>
						<p className='welcome__text'>
							You can download my resume{" "}
							<a
								href='./src/assets/afua-deborah-frimpong--resume-download.pdf'
								className='welcome__download-link text-white'
								download='afua-deborah-resume'
							>
								here
							</a>
							.
						</p>
					</div>
				</div>
				<div className='d-none d-md-block'>
					<img src={epaLogo} height={120} width={200} alt='' />
				</div>
			</div>
			<div>
				<h1 className='welcome__heading-one welcome__animation'>
					Afua Deborah Frimpong
				</h1>
				<p className='welcome__text'>
					Frontend-Focused Fullstack Developer
				</p>
			</div>

			<div className='mt-5 mt-md-3'>
				<p className='welcome__text'>
					Click the <span className='text-white'>ABOUT</span> icon to
					begin.
				</p>
			</div>
		</div>
	);
};

export default Welcome;
