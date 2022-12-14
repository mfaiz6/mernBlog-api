import express from "express"
const app = express()
import dotenv from 'dotenv'
import mongoose from "mongoose"

dotenv.config()

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
.then(console.log("Connected to MongoDB."))
.catch((err) => console.log(err))

app.listen(5000, () => {
    console.log("Backend is running.")
})