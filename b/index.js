import express from "express"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import {validationResult} from "express-validator"
import bcrypt from "bcrypt"

import {registerValidation, loginValidation} from "./validations/auth.js"
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
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }

    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const doc = new UserModel({
      ...req.body,
      passwordHash: hash
    })

    const user = await doc.save()

    const token = jwt.sign(
      {
        _id: user._id
      },
      "secret",
      {
        expiresIn: "30d"
      }
    )

    const {passwordHash, ...userData} = user._doc

    res.json({
      ...userData,
      token
    })
  } catch (err) {
    return res.status(500).json({
      error: err
    })
  }
})
app.post("/auth/login", loginValidation, async (req, res) => {
  try {
    const user = await UserModel.findOne({email: req.body.email})

    if (!user) {
      return res.status(400).json({
        // юзер не найден
        error: "Неверный логин или пароль"
      })
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    )
    if (!isValidPass) {
      return res.status(400).json({
        error: "Неверный логин или пароль"
      })
    }

    const token = jwt.sign(
      {
        _id: user._id
      },
      "secret",
      {
        expiresIn: "30d"
      }
    )

    res.json({
      token
    })
  } catch (err) {
    return res.json({
      error: err
    })
  }
})

app.listen(4444, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log("Server is running on port 4444")
})
