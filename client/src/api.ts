import type { MenuItems, WorkTabs } from "../src/types/index.ts";

const API_URL = "http://localhost:5000/api";

export const fetchMenuItems = async (): Promise<MenuItems[]> => {
    try {
        const response = await fetch(`${API_URL}/menu-items`);
        
        if(!response.ok){
            throw new Error(`Menu items could not be fetched: ${response.status}`);
        }

        const data = response.json();
        return data;
        
    } catch (error){
        console.error(`Error fetching menu items: ${error}`);
        return [];
    }
};

export const fetchWorkTabContent = async (): Promise<WorkTabs> => {
    try {
        const response = await fetch(`${API_URL}/tab-content`);

        if(!response.ok) {
            throw new Error(`Tab content could not be fetched: ${response.status}`);
        }

        const data = await response.json();
        
        return data;

    } catch (error) {
        console.error(`Error fetching tab content: ${error}`);
        return {tabs: []};
    }
}