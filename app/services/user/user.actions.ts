import { createAsyncThunk } from "@reduxjs/toolkit"
import { AuthService } from "@/app/services/auth/auth.service"
import { IAuthForm } from "@/app/components/ui/auth-form/auth-form.interface"
import { AuthInterface } from "../auth/auth.interface"
import { saveToStorage } from "../auth/auth.helper"

export const register: any = createAsyncThunk<AuthInterface, IAuthForm>(
  "auth/register",
  //@ts-ignore
  async ({ email, password, login }: IAuthForm) => {
    try {
      const response = await AuthService.register(email, password, login)
      return response.data
    } catch (error) {
      return console.log(error)
    }
  }
)

export const login: any = createAsyncThunk<AuthInterface, IAuthForm>(
  "auth/login",
  //@ts-ignore
  async ({ email, password }: IAuthForm) => {
    try {
      const response = await AuthService.login(email, password)
      await saveToStorage(response.data)
      return response.data
    } catch (error) {
      return console.log(error)
    }
  }
)
