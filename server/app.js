import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;
app.use(cors());

// Menu items
const menuItems = [
    {
        name: "About",
        imgUrl: "/icons/book-about.png",        
        url: "/about",
        position: "LEFT"
    },
    {
        name: "Work",
        imgUrl: "/icons/briefcase.png",
        url: "/work",
        position: "LEFT"
    },
    {
        name: "Projects",
        imgUrl: "/icons/projects.png",
        url: "/projects",
        position: "LEFT"
    },
    {
        name: "Contact",
        imgUrl: "/icons/phone-contact.png",
        url: "/contact",
        position: "LEFT"
    },
    {
        name: "Home",
        imgUrl: "/icons/home.png",
        url: "/",
        position: "RIGHT"
    },
    {
        name: "French",
        imgUrl: "/icons/globe.png",
        url: "",
        position: "RIGHT"
    },
];

// Work Page Tab Content
const workTabContent = {
    tabs: [
        {
            id: "work-1",
            title: "Intermediate Frontend Developer",
            company: "Asics Apps",
            imgUrl: "/images/aa-logo",
            points: [
                "Created pixel-perfect, reusable UI components based on Figma designs for the company's internal design system, improving consistency and collaboration across teams and company applications.",
                "Rewrote legacy pages via component-based architecture React SPA (TypeScript and Remix.js) powering Race Roster's CRM feature resulting in improved performance and maintainability.",
                "Developed and updated features for the core registration platform, mainly dynamic data-driven forms involving time, currency, and date handling in line with evolving business priorities, improving performance and reliability."
            ],
            skills: [
                "React",
                "TypeScript",
                "PHP",
                "GraphQL",
                "Testing",
                "Agile Methodology",
                "CRM Management",
                "Component Libraries",
            ]
        },
                {
            id: "work-2",
            title: "Fullstack Developer",
            company: "Art & Science",
            imgUrl: "/images/as-logo",
            points: [
                "Developed and maintained custom WordPress websites, including building themes, plugins, and responsive front-end interfaces tailored to client needs.",
                "Enhanced legacy PHP applications by resolving bugs, improving performance, and introducing new features to ensure long-term maintainability.",
                "Led demos and client-facing presentations, strengthening relationships and aligning development goals with stakeholder expectations.",
                "Mentored and onboarded an intern to own future deployments and ongoing support."
            ],
            skills: [
                "WordPress Development",
                "PHP",
                "Vue",
                "PSD Design to Code",
                "Mentorship",
                "Accessibility Audits",
            ]
        }
    ]
};

// serve the image files
app.use(express.static('public'));

// GET menu items
app.get('/api/menu-items', (req, res) => {
    res.json(menuItems);
});

// GET work page tab content
app.get('/api/tab-content', (req, res) => {
    res.json(workTabContent);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});