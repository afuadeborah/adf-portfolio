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
    points: string[];
    id: string;
    skills: string[];
}

export interface WorkTabs {
    tabs: WorkTabContent[];
}
