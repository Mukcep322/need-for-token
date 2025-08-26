import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "../../axios"

export const fetchProducts = createAsyncThunk(
  "/products/fetchProducts",
  async () => {
    const {data} = await axios.get("/products")
    return data
  }
)

const initialState = {
  tokens: {
    items: [],
    status: "loading"
  },
  collections: {
    items: [],
    status: "loading"
  }
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.tokens.items = []
        state.tokens.status = "loading"
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.tokens.items = action.payload
        state.tokens.status = "loaded"
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.tokens.items = []
        state.tokens.status = "error"
      })
  }
})

export const productsReducer = productSlice.reducer
