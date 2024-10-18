import express from "express"
import cors from "cors"
import { ConnectDB } from "./config/db.js"


//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
ConnectDB();

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);   
})

// mongodb+srv://octan311:<db_password>@cluster0.qes2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0