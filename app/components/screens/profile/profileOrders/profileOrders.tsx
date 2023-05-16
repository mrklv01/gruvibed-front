import React from "react"
import ProfileLinks from "../profileLinks/profileLinks"
import styles from "../Profile.module.scss"
import ProfileOrder from "./profileOrder/profileOrder"
import { useGetAllOrdersQuery } from "@/app/store/user/user.api"

const ProfileOrders = () => {

  return (
    <div className={styles.ProfilePage}>
      <div className={styles.ProfilePage__container}>
        <div className={styles.ProfilePage__container__content}>
          <div className={styles.ProfilePage__container__content__title}>
            <p>Ваши заказы</p>
          </div>
          <ProfileLinks />
          <div className={styles.ProfilePage__container__content__orders}>
            <ProfileOrder />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileOrders
