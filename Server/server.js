const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get('/',(req,res)=>{
    res.send("CivicFix API is running");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})