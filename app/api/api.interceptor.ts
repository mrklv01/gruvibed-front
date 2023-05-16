import axios from "axios"
import { errorCatch, getContentType } from "@/app/api/api.helpers"
import { getAccessToken } from "@/app/services/auth/auth.helper"

// export const instance = axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: getContentType(),
// })
// instance.interceptors.request.use((config) => {
//   const accessToken = getAccessToken()

//   if (config && config.headers && accessToken)
//     config.headers.Authorization = `Bearer ${accessToken}`
//   return config
// })


const apiAxios = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: getContentType(),

})

export default apiAxios
