import IFilter from "./filters.type"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IFilter = {
  categoryId: ["", ""],
  title: [""],
  price: [0, 999990],
  resetFilter: false,
  manufacturerId: [],
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateSearch(state, action: PayloadAction<string>): void {
      state.title[0] = action.payload
    },
    updateMinPrice(state, action: PayloadAction<string>): void {
      action.payload == ""
        ? (state.price[0] = 0)
        : (state.price[0] = +action.payload)
    },
    updateMaxPrice(state, action: PayloadAction<string>): void {
      action.payload == ""
        ? (state.price[1] = 999990)
        : (state.price[1] = +action.payload)
    },
    updateCategory(state, action: PayloadAction<string>) {
      state.categoryId[0] = action.payload[0]
      state.categoryId[1] = action.payload[1]
    },
    changeResetFilter(state) {
      state.resetFilter = !state.resetFilter
    },
    toggleManufacture(state, action) {
      let checked = false
      state.manufacturerId.forEach((item: any) => {
        if (item == action.payload) checked = true
      })
      if (checked) {
        const newState = state.manufacturerId.filter(
          (item: any) => item !== action.payload
        )
        state.manufacturerId = newState
      } else {
        state.manufacturerId.push(action.payload)
      }
    },
    initialLoadOrder() {
      return initialState
    },
  },
  extraReducers: {},
})

export const {
  updateSearch,
  updateMinPrice,
  updateMaxPrice,
  updateCategory,
  initialLoadOrder,
  changeResetFilter,
  toggleManufacture,
} = filtersSlice.actions

export default filtersSlice.reducer
