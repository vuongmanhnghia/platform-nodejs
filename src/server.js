import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();

// config view engine
viewEngine(app);

// init all web routes
initWebRoutes(app);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
	console.log(`App is running at the port ${PORT}`);
});
