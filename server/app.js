import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors);

const aboutRoutes = require("./routes/about");
const workRoutes = require("./routes/work");
const projectSkillsRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");

app.use("/api/about", aboutRoutes);
app.use("/api/work", workRoutes);
app.use("/api/projects", projectSkillsRoutes);
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});