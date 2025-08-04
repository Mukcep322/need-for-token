import mongoose from "mongoose"

const UserSchma = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    avatarUrl: String
  },
  {
    timestamps: true
  }
)

export default mongoose.model("User", UserSchma)
