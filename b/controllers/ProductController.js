import ProductModel from "../models/Product.js"

export const createProduct = async (req, res) => {
  try {
    const doc = new ProductModel({
      ...req.body
    })

    const product = await doc.save()

    res.json(product)
  } catch (err) {
    res.status(400).json(err)
  }
}

export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find()
    res.json(products)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "Не удалось получить товары"
    })
  }
}

export const updateProduct = async (req, res) => {}
