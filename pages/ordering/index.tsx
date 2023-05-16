import { NextPageAuth } from "@/app/providers/private.route.interface"
import dynamic from "next/dynamic"
import React from "react"

const Ordering = dynamic(
  () => import("@/app/components/screens/ordering/Ordering"),
  {
    ssr: false,
  }
)

const OrderingPage: NextPageAuth = () => {
  return <Ordering />
}

export default OrderingPage
