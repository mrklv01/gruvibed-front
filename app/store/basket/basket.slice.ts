import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    //@ts-ignore
    basket: Cookies.get("basket") ? JSON.parse(Cookies.get("basket")) : [],
    //@ts-ignore
    orderId: Cookies.get("orderId") ? JSON.parse(Cookies.get("orderId")) : 0,
  },
  reducers: {
    clearBasket(state) {
      state.basket = []
      Cookies.remove("basket")
    },
    toggleBasket(state, action) {
      let checked = false

      state.basket.forEach((item: any) => {
        if (item.id == action.payload.id) checked = true
      })
      if (checked) {
        const newState = state.basket.filter(
          (item: any) => item.id !== action.payload.id
        )
        state.basket = newState
      } else {
        state.basket.push(action.payload)
      }
      Cookies.set("basket", JSON.stringify(state.basket))
    },
    changeCount(state, action) {
      state.basket.map((item: any) =>
        item.id == action.payload.id
          ? (item.count = action.payload.value)
          : item
      )
      Cookies.set("basket", JSON.stringify(state.basket))
    },
    plusCount(state, action) {
      state.basket.map((item: any) =>
        item.id == action.payload.id
          ? item.count <= 100
            ? (item.count = item.count + 1)
            : item
          : item
      )
      Cookies.set("basket", JSON.stringify(state.basket))
    },
    minusCount(state, action) {
      state.basket.map((item: any) =>
        item.id == action.payload.id
          ? item.count >= 0
            ? (item.count = item.count - 1)
            : item
          : item
      )
      Cookies.set("basket", JSON.stringify(state.basket))
    },
    setOrderId(state, { payload }) {
      state.orderId = payload
      Cookies.set("orderId", payload)
    },
  },
})

export const {
  toggleBasket,
  changeCount,
  plusCount,
  minusCount,
  clearBasket,
  setOrderId,
} = basketSlice.actions

export default basketSlice.reducer
