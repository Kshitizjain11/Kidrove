import express from 'express'
import dotenv from 'dotenv';
import { DatabaseConnect } from "./config/db.js";
import cors from 'cors'
import registrationRoute from "./routes/registrationRoute.js";
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

DatabaseConnect()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.status(200).json({"message":"Sever working perfectly"})
})

app.use("/enquiry",registrationRoute)

app.listen(PORT,()=>{
    console.log(`Server running successfully at PORT : ${PORT}`)
})