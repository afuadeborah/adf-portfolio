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
        url: "/about"
    },
    {
        name: "Work",
        imgUrl: "/icons/briefcase.png",
        url: "/work"
    },
    {
        name: "Projects",
        imgUrl: "/icons/projects.png",
        url: "/projects"
    },
    {
        name: "Contact",
        imgUrl: "/icons/phone-contact.png",
        url: "/contact"
    },
];

// serve the image files
app.use(express.static('public'));

// GET menu items
app.get('/api/menu-items', (req, res) => {
    res.json(menuItems);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});