import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: Cookies.get("favorite")
      ? //@ts-ignore
        JSON.parse(Cookies.get("favorite"))
      : [],
  },
  reducers: {
    toggleFavorite(state, action) {
      let checked = false

      state.favorite.forEach((item: any) => {
        if (item.id == action.payload.id) checked = true
        console.log(checked)
      })
      if (checked) {
        const newState = state.favorite.filter(
          (item: any) => item.id !== action.payload.id
        )
        state.favorite = newState
      } else {
        state.favorite.push(action.payload)
      }
      Cookies.set("favorite", JSON.stringify(state.favorite))
    },
  },
})

export const { toggleFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer
