import { createSlice } from "@reduxjs/toolkit"
import { login, register } from "./user.actions"
import { removeTokensStorage } from "../auth/auth.helper"
import { toast } from "react-toastify"

const regError = () => {
  toast.error("Произошла ошибка", {
    position: toast.POSITION.BOTTOM_RIGHT,
  })
}
const initialState = {
  user:
    typeof window !== "undefined"
      ? localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null
      : null,
  isLoading: false,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      removeTokensStorage()
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
  },
})

export const { logout } = userSlice.actions
