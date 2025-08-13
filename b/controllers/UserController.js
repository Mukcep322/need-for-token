import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

import UserModel from "../models/User.js"

export const register = async (req, res) => {
  try {
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
      "base64",
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
}

export const login = async (req, res) => {
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
      "base64",
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
}

export const editUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId)

    await UserModel.updateOne(
      {
        _id: user._id
      },
      {
        username: req.body.username,
        imageUrl: req.body.imageUrl
      }
    )
    res.json({
      success: true
    })
  } catch (err) {
    res.status(500).json({
      message: "Не удалось обновить данные"
    })
  }
}

export const deleteUser = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.userId).then(
      res.status(200).json({
        success: true
      })
    )
  } catch (err) {
    res.status(500).json({
      message: "Не удалось удалить пользователя"
    })
  }
}

export const getMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId)
    if (!user) {
      res.status(400).json({
        error: "Ошибка, попоробуйте позже"
      })
    }

    const {...userData} = user._doc

    res.json(userData)
  } catch (err) {
    res.status(500).json({
      message: "Нет доступа"
    })
  }
}
