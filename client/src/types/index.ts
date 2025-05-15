export interface MenuItems {
	url: string;
	imgUrl: string;
	name: string;
	position: "LEFT" | "RIGHT";
}

export interface WorkTabContent {
	title: string;
	company: string;
	imgUrl: string;
	date: string;
	location: string;
	points: string[];
	id: string;
	skills: string[];
}

export interface WorkTabs {
	tabs: WorkTabContent[];
}

export interface ProjectInformation {
	id: string;
	liveSiteUrl?: string;
	repoUrl: string;
	imgUrl: string;
	title: string;
	tagline: string;
	description: string;
	stackTitles: string[];
	status: "CURRENT" | "PAST";
}