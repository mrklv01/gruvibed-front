import Link from "next/link"
import React from "react"
import styles from "../../Profile.module.scss"
import { useGetAllOrdersQuery } from "@/app/store/user/user.api"

const ProfileOrder = () => {
  const { data, isLoading } = useGetAllOrdersQuery("")
  console.log("data", data)
  return (
    <div className={styles.ProfilePage__container__content__orders__order}>
      {isLoading
        ? ""
        : data.map((order: any) => (
            <Link href={`/profile/orders/${order.id}`}>Заказ № {order.id}</Link>
          ))}
    </div>
  )
}

export default ProfileOrder
