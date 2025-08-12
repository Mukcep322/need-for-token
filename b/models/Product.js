import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    startPrice: {
      type: Number,
      required: true
    },
    endPrice: {
      type: Number
    },
    imageUrl: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    owner: String
  },
  {
    timestamps: true
  }
)

export default mongoose.model("Product", ProductSchema)
