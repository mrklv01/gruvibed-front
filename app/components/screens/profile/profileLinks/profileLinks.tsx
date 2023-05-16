import Link from "next/link"
import React from "react"
import styles from "../Profile.module.scss"

const ProfileLinks = () => {
  return (
    <div className={styles.ProfilePage__container__content__links}>
      <ul>
        <li>
          <Link href='/profile'>Профиль</Link>
        </li>
        <li>
          <Link href='/profile/orders'>Заказы</Link>
        </li>
        <li>
          <Link href='/profile/favorite'>Избранное</Link>
        </li>
      </ul>
    </div>
  )
}

export default ProfileLinks
