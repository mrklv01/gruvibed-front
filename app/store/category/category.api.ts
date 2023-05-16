import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import Cookies from "js-cookie"


export const categoryApi = createApi({
    reducerPath: 'api/category',
    tagTypes: ["Category"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/",
        prepareHeaders: (headers) => {
            headers.set("authorization", `Bearer ${Cookies.get("accessToken")}`)
            return headers
        },
    }),
    endpoints: (build) => ({
        getAll: build.query({
            query: () => ({
                url: "category/all",
            }),
            providesTags: () => [{ type: "Category" }]
        }),
    })
})

export const {
    useGetAllQuery
} = categoryApi