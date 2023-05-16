import {
  useDeleteUserMutation,
  useGetAllQuery,
} from "@/app/store/admin/admin.api"
import styles from "../Admin.module.scss"
import { useState } from "react"
import AdminModal from "@/app/components/ui/admin/modal/AdminModal"
import { IUser } from "@/app/services/user/user.interface"
import Link from "next/link"

const AdminUsers = () => {
  const result = useGetAllQuery("")
  const { data, isLoading } = useGetAllQuery("")
  const [deleteUser] = useDeleteUserMutation()
  const [index, setIndex] = useState(0)

  const removeUser = (id: number) => {
    deleteUser(id)
    result.refetch()
  }
  console.log(data)
  const [isShow, setIsShow] = useState(false)
  return (
    <div className={styles.admin__users}>
      <div className={styles.admin__container}>
        <div className={styles.admin__users__content}>
          <div className={styles.admin__users__content__block}>
            <h3 className={styles.admin__users__content__title}>
              Админ панель - Пользователи
            </h3>
            <p className={styles.admin__users__content__count}>
              Количество пользователей - {isLoading ? 0 : data.length}
            </p>
          </div>
          <Link className={styles.admin__users__content__back} href='/admin'>
            Вернуться к выбору
          </Link>
          <div className={styles.admin__users__content__items}>
            {isLoading
              ? []
              : data?.map((item: IUser, id: any) => (
                  <div className={styles.admin__users__content__items__item}>
                    <div
                      className={
                        styles.admin__users__content__items__item__info
                      }
                    >
                      <h3
                        className={
                          styles.admin__users__content__items__item__info__email
                        }
                      >
                        {isLoading ? "" : item?.email}
                      </h3>
                      <h3
                        className={
                          styles.admin__users__content__items__item__info__login
                        }
                      >
                        {isLoading ? "" : item?.login}
                      </h3>
                      <p
                        className={
                          styles.admin__users__content__items__item__info__phone
                        }
                      >
                        {isLoading ? "" : item?.phone}
                      </p>
                    </div>
                    <div
                      className={
                        styles.admin__users__content__items__item__buttons
                      }
                    >
                      <button
                        onClick={() => {
                          setIsShow(true)
                          setIndex(item.id)
                        }}
                        className={
                          styles.admin__users__content__items__item__buttons__update
                        }
                      >
                        Редактировать
                      </button>
                      <button
                        className={
                          styles.admin__users__content__items__item__buttons__remove
                        }
                        onClick={() => removeUser(item?.id)}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                ))}
            {isShow ? <AdminModal setIsShow={setIsShow} index={index} /> : ""}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminUsers
