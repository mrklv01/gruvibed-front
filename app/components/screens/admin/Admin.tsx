import Link from "next/link"
import styles from "./Admin.module.scss"
import { useGetMeQuery } from "@/app/store/user/user.api"

const Admin = () => {
  const result = useGetMeQuery("")
  const { data, isLoading } = useGetMeQuery("")
  return (
    <div className={styles.admin}>
      <div className={styles.admin__container}>
        <h3>
          Здравствуйте - {isLoading ? "" : data?.login}. Вы находитесь в админ.
          панели
        </h3>
        <p></p>
        <ul className={styles.admin__content}>
          <Link href='/admin/users' className={styles.admin__content__link}>
            Пользователи
          </Link>
          <Link href='/admin/products' className={styles.admin__content__link}>
            Продукты
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Admin
