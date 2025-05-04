import express from "express"
import {ENV_VARS} from "./config/envVars.js"
import {connectDB} from "./config/db.js"
import authRoutes from "./routes/authRoute.js"
import HomeServiceRoute from "./routes/HomeServiceRoute.js"
import Booking from "./routes/Booking.js"
import BabyRoute from "./routes/BabyRoute.js"
import PetRoute from "./routes/PetRoute.js"

const app=express()
const PORT=ENV_VARS.PORT
app.use(express.json())
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/homeService",HomeServiceRoute)
app.use("/api/v1/booking",Booking)
app.use("/api/v1/BabyService",BabyRoute)
app.use("/api/v1/pet",PetRoute)
app.listen(PORT,()=>{
    console.log("server started at"+PORT)
    connectDB()
})