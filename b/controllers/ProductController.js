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
    res.status(500).json({})
  }
}
export const editProduct = async (req, res) => {
  if (product.owner == req.userId) {
    try {
      const product = await ProductModel.findById(req.params.id)
      if (!product) {
        return res.status(404).json({
          message: "Токен не найден"
        })
      }

      const doc = new ProductModel({
        ...req.body
      })

      await doc.save(product)

      res.json(product)
    } catch (err) {
      res.status(500).json({
        message: "Не удалось редактировать токен"
      })
    }
  } else {
    return res.status(403).json({
      message: "Вы не можете редактировать чужой токен"
    })
  }
}
