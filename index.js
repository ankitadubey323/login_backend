import express from "express";
const app=express()
import dotenv from "dotenv";
import connection from "./src/config/db.js";


dotenv.config()
const PORT=process.env.PORT||3000

connection();


app.get("/",(req,res)=>{
    res.send ("your page")
})
app.listen(PORT,()=>{
    console.log(`your server start on http://localhost:${PORT}`)
})