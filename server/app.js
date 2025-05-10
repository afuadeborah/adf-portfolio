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

// serve the image files
app.use(express.static('public'));

// GET menu items
app.get('/api/menu-items', (req, res) => {
    res.json(menuItems);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});