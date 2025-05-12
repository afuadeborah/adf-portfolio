import { useEffect, useState } from "react";
import type { WorkTabContent, WorkTabs } from "../../types";
import { fetchWorkTabContent } from "../../api";
import workIcon from "../../assets/images/icons/briefcase.png";

const Work = () => {
	// Handle tab selection
	const [tabContent, setTabContent] = useState<WorkTabs | null>(null);
	const [activeTab, setActiveTab] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// TODO: Update this before deploying
	const serverUrl = "http://localhost:5000";

	useEffect(() => {
		const getTabContent = async () => {
			try {
				const content = await fetchWorkTabContent();
				setTabContent(content);

				// set first tab to be active if content is not null and there is data in the tabs array
				if (content && content.tabs && content.tabs.length > 0) {
					setActiveTab(content.tabs[0].id);
				}

				setLoading(false);
			} catch (error) {
				setError("Unable to load content.");
				setLoading(false);
			}
		};

		getTabContent();
	}, []);

	const handleTabClick = (tabId: WorkTabContent["id"]) => {
		setActiveTab(tabId);
	};

	// grab the content for the selected tab
	const activeTabContent = tabContent?.tabs.find(
		(tab) => tab.id === activeTab
	);

	return (
		<div className='window work__window'>
			<div className='title-bar'>
				<h1 className='title-bar-text'>
					<img src={workIcon} alt='Work icon' />
					Work Experience & Skills
				</h1>
				<div className='title-bar-controls'>
					<button aria-label='Close'></button>
				</div>
			</div>

			<div className='window-body'>
				<menu role='tablist'>
					{tabContent != null &&
						tabContent.tabs.map((tab) => (
							<li
								key={tab.id}
								role='tab'
								aria-selected={activeTab === tab.id}
							>
								<button
									onClick={() => handleTabClick(tab.id)}
									value={`#${tab.id}`}
								>
									{tab.company}
								</button>
							</li>
						))}
				</menu>

				<div className='window' role='tabpanel'>
					<div className='window-body'>
						{activeTabContent && (
							<div className='work__content-container'>
								<div className='d-flex'>
									<div className='work__image-container mr-4'>
										<img
											src={`${serverUrl}${activeTabContent.imgUrl}`}
											width={200}
											height={200}
											alt={`${activeTabContent.company} logo`}
										/>
									</div>

									<div className='work__experience-container p-2'>
										<h1 className='work__company-title'>
											{activeTabContent.company}
										</h1>
										<h2 className='my-3'>
											{activeTabContent.title}
										</h2>
										<p className='work__location'>
											{activeTabContent.location}
										</p>
										<span className='text-uppercase'>
											{activeTabContent.date}
										</span>
									</div>
								</div>

								<ul className='work__experience-list tree-view mt-3'>
									<details open className='mt-2'>
										<summary>What did I get up to?</summary>
										<ul>
											{activeTabContent.points.map(
												(point, index) => (
													<li key={`point-${index}`}>
														{point}
													</li>
												)
											)}
										</ul>
									</details>

									<details className='mt-4'>
										<summary>Top Skills</summary>
										<ul>
											{activeTabContent.skills.map(
												(skill, index) => (
													<li
														key={`point-${index}-${index}`}
													>
														{skill}
													</li>
												)
											)}
										</ul>
									</details>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
