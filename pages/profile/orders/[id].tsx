import React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import apiAxios from "@/app/api/api.interceptor"
import dynamic from "next/dynamic"

const OrderInfo = dynamic(
  () =>
    import(
      "@/app/components/screens/profile/profileOrders/profileOrder/profileOrderInfo/profileOrderInfo"
    ),
  {
    ssr: false,
  }
)

const ProfileOrderInfo = ({ orderItem }: any) => {
  //@ts-ignore
  return <OrderInfo orderItem={orderItem} />
}

export default ProfileOrderInfo
