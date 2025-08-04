import express from "express"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import {validationResult} from "express-validator"
import bcrypt from "bcrypt"

import {registerValidation} from "./validations/auth.js"
import UserModel from "./models/User.js"

const app = express()
app.use(express.json())
mongoose
  .connect("mongodb+srv://admin:admin@nerv.jvg8rao.mongodb.net/bd")
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.log(err)
  })

app.post("/auth/register", registerValidation, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }

  const password = req.body.password
  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(password, salt)

  const doc = new UserModel({
    ...req.body,
    passwordHash: passwordHash
  })

  const user = await doc.save()

  res.json({
    user
  })
})

app.listen(4444, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log("Server is running on port 4444")
})
