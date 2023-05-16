import apiAxios from "../../api/api.interceptor"
import { saveToStorage } from "@/app/services/auth/auth.helper"
import { AuthInterface } from "./auth.interface"
import { toast } from "react-toastify"

const regSucces = () => {
  toast.success("Успешная регистрация", {
    position: toast.POSITION.BOTTOM_RIGHT,
  })
}
const loginSucces = () => {
  toast.success("Успешная авторизация", {
    position: toast.POSITION.BOTTOM_RIGHT,
  })
}
const regError = () => {
  toast.error("Произошла ошибка", {
    position: toast.POSITION.BOTTOM_RIGHT,
  })
}
const loginError = () => {
  toast.error("Произошла ошибка", {
    position: toast.POSITION.BOTTOM_RIGHT,
  })
}

export const AuthService = {
  async register(email: string, password: string, login: string) {
    try {
      const res = await apiAxios.post<AuthInterface>("/auth/register", {
        email,
        password,
        login,
      })
      regSucces()
      return res
    } catch (error) {
      regError()
    }
  },
  async login(email: string, password: string) {
    try {
      const res = await apiAxios.post<AuthInterface>("/auth/login", {
        email,
        password,
      })
      loginSucces()
      return res
    } catch (error) {
      loginError()
    }
  },
}
