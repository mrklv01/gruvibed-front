import apiAxios from "@/app/api/api.interceptor"

export const ProductService = {
    async getAllProducts() {
        const res = await apiAxios.get("/product/all")
        return res
    }
}