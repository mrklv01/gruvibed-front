import apiAxios from "@/app/api/api.interceptor"
import Cookies from "js-cookie"

export const UserService = {
  async getProfile() {
    const res = await apiAxios.get("/user/profile", { headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` } })
    return res.data
  }
}
