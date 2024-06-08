const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
require("dotenv").config()
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/todos", require("./routes/todo.route"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resours note found" })
})
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message || "Something went worng" })
})

mongoose.connection.once("open", () => {
    console.log("SERVER RUNNING    ")
    app.listen(process.env.PORT, console.log("MONGO CONNECTED"))
})