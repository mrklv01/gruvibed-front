import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import Cookies from "js-cookie"

export const userApi = createApi({
  reducerPath: "api/user",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}/api`,
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${Cookies.get("accessToken")}`)
      return headers
    },
  }),
  endpoints: (build) => ({
    getMe: build.query({
      query: () => ({
        url: "user/profile",
      }),
      providesTags: () => [{ type: "User" }],
    }),
    getAllOrders: build.query({
      query: () => ({
        url: "order/all",
      }),
      providesTags: () => [{ type: "User" }],
    }),
    getAllOrderItemById: build.query({
      query: (id) => ({
        url: `order/orderItem/byId/${id}`,
      }),
      providesTags: () => [{ type: "User" }],
    }),
  }),
})

export const {
  useGetMeQuery,
  useGetAllOrdersQuery,
  useGetAllOrderItemByIdQuery,
} = userApi
