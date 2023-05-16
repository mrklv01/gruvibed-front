import React, { useState, useEffect } from "react"
import styles from "./AdmimModal.module.scss"
import {
  useGetAllQuery,
  useGetByIdQuery,
  useUpdateProfileMutation,
} from "@/app/store/admin/admin.api"
import apiAxios from "@/app/api/api.interceptor"
import Cookies from "js-cookie"
import axios from "axios"

const AdminModal = ({ index, setIsShow }: any) => {
  const result = useGetByIdQuery("")
  const resALL = useGetAllQuery("")
  const { data, isLoading } = useGetByIdQuery(index)
  const [login, setLogin] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    apiAxios
      .get(`user/admin/profile/${index}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      })
      .then((res) => {
        setLogin(res.data.login)
        setEmail(res.data.email)
        setPassword(res.data.password)
        setPhone(res.data.phone)
      })
  }, [])
  const idUser = isLoading ? 0 : data?.id

  const updateUser = async ({ id, login, email, password, phone }: any) => {
    await apiAxios.put(
      `user/admin/updateAccount/${id}`,
      {
        login,
        email,
        password,
        phone,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      }
    )
    resALL.refetch()
  }

  return (
    <div className={styles.admin__modal}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          updateUser({ id: idUser, login: login, email, password, phone })
        }}
        className={styles.admin__modal__content}
      >
        <button
          onClick={() => setIsShow(false)}
          className={styles.admin__modal__content__close}
        >
          X
        </button>
        <h3 className={styles.admin__modal__content__title}>
          Редактирование пользователя
        </h3>
        <div className={styles.admin__modal__content__block}>
          <div className={styles.admin__modal__content__block__login}>
            <div className={styles.input}>
              <div className={styles.input__content}>
                <input
                  type='text'
                  placeholder='Логин'
                  onChange={(e) => setLogin(e.target.value)}
                  defaultValue={isLoading ? "" : data.login}
                />
                <label htmlFor=''>Логин</label>
              </div>
            </div>
            <div className={styles.input}>
              <div className={styles.input__content}>
                <input
                  type='email'
                  placeholder='Почта'
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={isLoading ? "" : data.email}
                />
                <label htmlFor=''>Почта</label>
              </div>
            </div>
            <div className={styles.input}>
              <div className={styles.input__content}>
                <input
                  type='password'
                  placeholder='Пароль'
                  onChange={(e) => setPassword(e.target.value)}
                  defaultValue={isLoading ? "" : data.password}
                />
                <label htmlFor=''>Пароль</label>
              </div>
            </div>
            <div className={styles.input}>
              <div className={styles.input__content}>
                <input
                  type='text'
                  placeholder='Телефон'
                  onChange={(e) => setPhone(e.target.value)}
                  defaultValue={isLoading ? "" : data.phone}
                />
                <label htmlFor=''>Телефон</label>
              </div>
            </div>
          </div>
          <button className={styles.button} type='submit'>
            Обновить
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdminModal
