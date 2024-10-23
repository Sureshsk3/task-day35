import express from "express";
import "dotenv/config";
import router from "./router/index.js";
const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use("/",router)
app.listen(port, () => console.log(`Server is Running in port ${port}`));
