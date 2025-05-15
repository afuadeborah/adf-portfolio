import { useEffect, useState } from "react";
import projectsIcon from "../../assets/images/icons/projects.png";
import type { ProjectInformation } from "../../types";
import { fetchProjects } from "../../api";
import { Link } from "react-router-dom";
import consoleIcon from "../../assets/images/icons/console.png";
import satelliteIcon from "../../assets/images/icons/satellite.png";

const Projects = () => {
	const [currentProjects, setCurrentProjects] = useState<
		ProjectInformation[] | null
	>([]);
	const [pastProjects, setPastProjects] = useState<ProjectInformation[] | null>(
		[]
	);
	const [activeTab, setActiveTab] = useState<string>("CURRENT");
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// TODO: Update this before deploying
	const serverUrl = "http://localhost:5000";

	useEffect(() => {
		const getProjects = async () => {
			try {
				const projectList = await fetchProjects();

				const current = projectList.filter(
					(project) => project.status === "CURRENT"
				);
				const past = projectList.filter((project) => project.status === "PAST");

				setCurrentProjects(current);
				setPastProjects(past);
				setLoading(false);
			} catch (error) {
				setError("Unable to fetch projects.");
				setLoading(false);
			}
		};

		getProjects();
	}, []);

	const handleTabClick = (tabId: ProjectInformation["id"]) => {
		setActiveTab(tabId);
	};

	const activeTabContent =
		activeTab === "CURRENT" ? currentProjects : pastProjects;

	return (
		<div className='window projects__window flex-grow-1 mx-4 my-2'>
			<div className='title-bar'>
				<h1 className='title-bar-text'>
					<img src={projectsIcon} alt='Projects icon' />
					Projects
				</h1>
				<div className='title-bar-controls'>
					<button aria-label='Close'></button>
				</div>
			</div>

			<div className='window-body'>
				<menu role='tablist'>
					<li role='tab' aria-selected={activeTab === "CURRENT"}>
						<button onClick={() => handleTabClick("CURRENT")} value='current'>
							Current
						</button>
					</li>
					<li role='tab' aria-selected={activeTab === "PAST"}>
						<button onClick={() => handleTabClick("PAST")} value='past'>
							Past
						</button>
					</li>
				</menu>

				<div className='window' role='tabpanel'>
					<div className='window-body'>
						<div className='projects__content-container d-flex flex-wrap justify-content-around align-items-stretch'>
							{activeTabContent &&
								activeTabContent.map((project) => (
									<div
										key={project.id}
										className='projects__active-tab-container'
									>
										<div className='d-flex justify-content-center'>
											<img
												src={`${serverUrl}${project.imgUrl}`}
												width={300}
												height={160}
											/>
										</div>

										<div className='projects__info-container mt-3 pb-2'>
											<p className='project__title'>{project.title}</p>
											<p className='my-2'>{project.tagline}</p>
											<p>{project.description}</p>
										</div>

										<ul className='tree-view'>
											<div className='px-2'>
												<li
													className={
														project.liveSiteUrl ?? "d-flex align-items-center"
													}
												>
													{project.liveSiteUrl && (
														<Link
															className='d-block text-decoration-underline'
															to={project.liveSiteUrl}
															target='_blank'
															rel='noopener noreferrer'
															aria-hidden='true'
															title={`Go to ${project.title} Live Site`}
														>
															<img
																className='projects__icon'
																src={satelliteIcon}
																alt=''
															/>
															Live Link
														</Link>
													)}
												</li>

												<li className='d-flex align-items-center mt-2'>
													<Link
														className='d-block text-decoration-underline'
														to={project.repoUrl}
														target='_blank'
														rel='noopener noreferrer'
														aria-hidden='true'
														title={`Go to ${project.title} repo on Github`}
													>
														<img
															className='projects__icon'
															src={consoleIcon}
															alt=''
														/>
														Github Link
													</Link>
												</li>
											</div>

											<details open className='mt-4'>
												<summary>Made With</summary>
												<ul>
													{project.stackTitles.map((stack, index) => (
														<li key={`stack-${index}`}>{stack}</li>
													))}
												</ul>
											</details>
										</ul>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>

			<div className='status-bar'>
				<p className='status-bar-field'>Press F1 for help</p>
				<p className='status-bar-field'></p>
				<p className='status-bar-field'>CPU Usage: 88%</p>
			</div>
		</div>
	);
};

export default Projects;
