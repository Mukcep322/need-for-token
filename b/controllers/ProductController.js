import ProductModel from "../models/Product.js"

export const createProduct = async (req, res) => {
  try {
    const doc = new ProductModel({
      ...req.body,
      owner: req.userId
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

export const getOneProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id)
    res.json(product)
  } catch (err) {
    console.log(err)
    res.status(500).json({error: err})
  }
}
export const editProduct = async (req, res) => {
  try {
    const productId = req.params.id

    await ProductModel.updateOne(
      {
        _id: productId
      },
      {
        title: req.body.title,
        startPrice: req.body.startPrice,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        count: req.body.count
      }
    )

    res.json({
      success: true
    })
  } catch (err) {
    res.status(500).json({
      message: "Не удалось редактировать токен"
    })
  }
}
