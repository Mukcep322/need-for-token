import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import {UserController} from "./controllers/index.js"
import {registerValidation} from "./validations.js"

import handleValidationErrors from "./utils/handleValidationErr.js"

const App = express()

App.use(cors())
App.use(express.json())

mongoose
  .connect("mongodb+srv://admin:admin@nerv.jvg8rao.mongodb.net/")
  .then(() => {
    console.log("DB is connected")
  })
  .catch((err) => {
    console.log(err)
  })

App.post("/auth/register", (req, res) => {
  registerValidation, handleValidationErrors
  UserController.register
})
App.post("/auth/login", (req, res) => {})
App.get("/auth/getMe", (req, res) => {})

App.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log("Server OK")
})
