import ProductModel from "../models/Product.js"

export const isOwner = async (req, res, next) => {
  const userId = req.userId

  const token = await ProductModel.findOne(req.productId)

  if (userId === token.owner) {
    next()
  } else {
    res.status(401).json({
      message: "Недостаточно прав"
    })
  }
}
