const express = require("express")
const app = express()
app.use(express.json())
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
.then(console.log("Connected to MongoDB."))
.catch((err) => console.log(err))

app.use("/api/auth", authRoute)

app.use("/api/users", userRoute)

app.use("/api/posts", postRoute)

app.use("/api/categories", categoryRoute)

app.listen(5000, () => {
    console.log("Backend is running.")
})