import React, { useEffect, useState } from "react"
import apiAxios from "@/app/api/api.interceptor"
import styles from "./Profile.module.scss"
import ProfileLinks from "./profileLinks/profileLinks"
import { useGetMeQuery } from "@/app/store/user/user.api"
import Field from "../../ui/field/Field"
import { useForm } from "react-hook-form"
import Cookies from "js-cookie"
import Link from "next/link"
const ProfilePage = () => {
  const [typetest, setType] = useState(false)

  const { data, isLoading } = useGetMeQuery("")
  const resALL = useGetMeQuery("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [login, setLogin] = useState("")
  const [pass, setPass] = useState("")
  const [address, setAddress] = useState("")
  useEffect(() => {
    apiAxios
      .get("user/profile", {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      })
      .then((res) => {
        setName(res.data.name)
        setEmail(res.data.email)
        setLogin(res.data.login)
        setAddress(res.data.setAddress)
      })
  }, [])
  const updateUser = async ({ login, name, email, pass }: any) => {
    await apiAxios.put(
      `user/profile/update`,
      {
        login,
        name,
        email,
        password: pass,
        address,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      }
    )
    resALL.refetch()
  }
  console.log(data)
  return (
    <div className={styles.ProfilePage}>
      <div className={styles.ProfilePage__container}>
        <div className={styles.ProfilePage__container__content}>
          <div className={styles.ProfilePage__container__content__title}>
            <p>Данные профиля</p>
          </div>
          <ProfileLinks />
          <div className={styles.ProfilePage__content}>
            {typetest ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  updateUser({ login, name, email, pass })
                  setType(false)
                }}
              >
                <div className={styles.ProfilePage__content__change}>
                  <div className={styles.input}>
                    <div className={styles.input__content}>
                      <input
                        placeholder='Дмитрий'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                      <label>Имя</label>
                    </div>
                  </div>
                  <div className={styles.input}>
                    <div className={styles.input__content}>
                      <input
                        placeholder='test@gmail.com'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      <label>Почта</label>
                    </div>
                  </div>
                  <div className={styles.input}>
                    <div className={styles.input__content}>
                      <input
                        placeholder='Test'
                        onChange={(e) => setLogin(e.target.value)}
                        value={login}
                      />
                      <label>Логин</label>
                    </div>
                  </div>
                  <div className={styles.input}>
                    <div className={styles.input__content}>
                      <input
                        placeholder='*****'
                        onChange={(e) => setPass(e.target.value)}
                      />
                      <label>Пароль</label>
                    </div>
                  </div>
                  <div className={styles.input}>
                    <div className={styles.input__content}>
                      <input
                        placeholder='Улица бейбитшелик'
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                      />
                      <label>Адрес</label>
                    </div>
                  </div>
                </div>
                <button type='submit' className={styles.ProfilePage__change}>
                  Сохранить данные
                </button>
              </form>
            ) : (
              <>
                <div className={styles.ProfilePage__content__items}>
                  <span>Имя</span>
                  <p>{isLoading ? "" : data.name}</p>
                </div>
                <div className={styles.ProfilePage__content__items}>
                  <span>Электронная почта</span>
                  <p>{isLoading ? "" : data.email}</p>
                </div>
                <div className={styles.ProfilePage__content__items}>
                  <span>Логин</span>
                  <p>{isLoading ? "" : data.login}</p>
                </div>
                <div className={styles.ProfilePage__content__items}>
                  <span>Адрес</span>
                  <p>{isLoading ? "" : data.address}</p>
                </div>
              </>
            )}
          </div>
          {typetest ? (
            <></>
          ) : (
            <button
              onClick={() => setType(true)}
              className={styles.ProfilePage__change}
            >
              Изменить данные
            </button>
          )}
        </div>
        {isLoading ? (
          ""
        ) : data.isAdmin ? (
          <Link className={styles.ProfilePage__link} href='/admin'>
            Админ панель
          </Link>
        ) : (
          ""
        )}
        {/*  */}
      </div>
    </div>
  )
}

export default ProfilePage
