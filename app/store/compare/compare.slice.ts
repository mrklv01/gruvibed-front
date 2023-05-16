import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    //@ts-ignore
    compare: Cookies.get("compare") ? JSON.parse(Cookies.get("compare")) : [],
  },
  reducers: {
    toggleCompare(state, action) {
      let checked = false

      state.compare.forEach((item: any) => {
        if (item.id == action.payload.id) checked = true
        console.log(checked)
      })
      if (checked) {
        const newState = state.compare.filter(
          (item: any) => item.id !== action.payload.id
        )
        state.compare = newState
      } else {
        state.compare.push(action.payload)
      }
      Cookies.set("compare", JSON.stringify(state.compare))
    },
  },
})

export const { toggleCompare } = compareSlice.actions

export default compareSlice.reducer
