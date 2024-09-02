import express from "express"
import connectDB from "./DataBase/database.js"
const  db = process.env.MONGO_DB || "mongodb://localhost:27017/sc"
const port = process.env.PORT || 8000
import createStu from "./Schema/studentScheme.js"

connectDB(db)

const app = express()



app.get('/',(req,res,next)=>{
    res.send("server is running")
})

app.listen(port,()=>console.log("ready"))
