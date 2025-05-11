import { useEffect, useState } from "react";
import type { WorkTabContent, WorkTabs } from "../../types";
import { fetchWorkTabContent } from "../../api";

const Work = () => {
	// Handle tab selection
	const [tabContent, setTabContent] = useState<WorkTabs | null>(null);
	const [activeTab, setActiveTab] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

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
		<div className='work__window window-body'>
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
				<div className='window-body'></div>
			</div>
		</div>
	);
};

export default Work;
// flex-grow-1 m-4
