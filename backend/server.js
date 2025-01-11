import express from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import 'dotenv/config'

// app config
const app = express()
const port = 5000


// middlewares
app.use(express.json())
app.use(cors())

// db connection
connectDB()

app.get("/", (req, res) => {
  res.send("working")
});

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))