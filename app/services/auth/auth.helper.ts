import Cookies from "js-cookie"
import { IAuthTokens } from "@/app/services/auth/auth.interface"

export const getAccessToken = () => {
  const accessToken = Cookies.get("accessToken")
  return accessToken || null
}

export const saveTokensStorage = (data: IAuthTokens) => {
  Cookies.set("accessToken", data.accessToken, { expires: 1 })
  Cookies.set("refreshToken", data.refreshToken, { expires: 1 })
}

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem("user") || "{}")
}

export const saveToStorage = (data: any) => {
  saveTokensStorage(data)
  localStorage.setItem("user", JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
  Cookies.remove("accessToken")
  Cookies.remove("refreshToken")
  localStorage.removeItem("user")
}
