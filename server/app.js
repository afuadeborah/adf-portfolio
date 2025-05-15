import express from "express";
import cors from "cors";
import { menuItems } from './data/menuItems.js';
import { workTabContent } from './data/workTabContent.js';
import { projectInfo } from './data/projectInfo.js';

const app = express();
const PORT = 5000;
app.use(cors());

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

// GET project information
app.get('/api/projects', (req, res) => {
  res.json(projectInfo);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
});