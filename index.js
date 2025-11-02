import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/employeeRoute.js"

const app = express()
app.use(bodyParser.json())

dotenv.config()

const PORT = process.env.PORT || 5001
const MONGOURl = process.env.MONGO_URL


app.use("/api/employees", route)

mongoose.connect(MONGOURl).then(() => {
  console.log("Database Connected Successfully")

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}).catch(error => console.log(error))