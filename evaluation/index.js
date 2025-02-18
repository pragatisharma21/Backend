import express from "express"
import dotenv from "dotenv"
import jobSeekerRoutes from "./src/Routes/seeker.routes.js"
import employerRoutes from "./src/Routes/employer.routes.js"
import jobRoutes from "./src/Routes/job.routes.js"
import applicationRoutes from "./src/Routes/application.routes.js"
import analyticsRoutes from "./src/Routes/analytics.routes.js"
import connectDbb from "./src/utils/db.js"
import CORS from "cors";
import { errorHandler } from "./src/Middleware/errorhandler.js"
import logger from "./src/Middleware/requestlogger.js"

dotenv.config()
const app = express();


app.use(CORS({
    origin: ["*"],
    credentials: true
}));

app.use(express.json())
app.use("/seeker", jobSeekerRoutes);
app.use("/employer", employerRoutes);
app.use("/job", jobRoutes);
app.use("/application", applicationRoutes);
app.use("/analytics", analyticsRoutes);

app.use(errorHandler)
app.use(logger);

connectDbb()
 const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`)
})