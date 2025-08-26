import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import multer from "multer"

import {registerValidation, loginValidation} from "./validations/user.js"
import {ProductValid, countProductValid} from "./validations/product.js"
import {isOwner} from "./validations/isOwner.js"

import {handleValidationErrors, checkAuth} from "./utils/!index.js"

import {userController, productController} from "./controllers/!index.js"

const app = express()
app.use(express.json())
app.use(cors())
mongoose
  .connect("mongodb+srv://admin:admin@nerv.jvg8rao.mongodb.net/bd")
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.log(err)
  })

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads/")
  },
  filename: (_, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`
    cb(null, uniqueName)
  }
})

const upload = multer({storage})

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.filename}`
  })
})

// User routes
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  userController.register
)
app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  userController.login
)
app.get("/auth/me", checkAuth, userController.getMe)

app.patch(
  "/user/:id",
  checkAuth,
  handleValidationErrors,
  userController.editUser
)

app.delete(
  "/user/:id",
  checkAuth,
  handleValidationErrors,
  userController.deleteUser
)

// Product routes
app.post(
  "/products",
  checkAuth,
  ProductValid,
  countProductValid,
  handleValidationErrors,
  productController.createProduct
)

app.get("/products", productController.getAllProducts)

app.get("/products/:id", productController.getOneProduct)

app.patch(
  "/products/:id",
  checkAuth,
  isOwner,
  ProductValid,
  handleValidationErrors,
  productController.editProduct
)

app.delete(
  "/products/:id",
  checkAuth,
  isOwner,
  handleValidationErrors,
  productController.deleteProduct
)

app.listen(4444, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log("Server is running on port 4444")
})
