import connectDB from './config/db.js';
import express from 'express';
import dotenv from 'dotenv';
import main from "./routes/main.js";

dotenv.config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000;
app.listen(PORT,async()=>{
    console.log(`The server is runnig at port ${PORT}`)
    await connectDB();
})

app.use('/api',main)

app.get('/api/getdata',(req,res)=>{
    console.log("the get request");
    res.json('the fist api call');
    res
})