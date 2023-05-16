import React, { useEffect, useState } from "react"
import styles from "./Header.module.scss"
import search from "../../../assets/search.svg"
import catalog from "../../../assets/catalog.svg"
import comparison from "../../../assets/comparison.svg"
import favourite from "../../../assets/favourite.svg"

import Link from "next/link"
import Image from "next/image"
import CatalogIco from "@/app/components/ui/svg/Catalog"
import HeaderIntro from "@/app/components/layout/header/header-intro/HeaderIntro"
import AuthForm from "../../ui/auth-form/AuthForm"
import Basket from "../../ui/basket/basket"
import { useAuth } from "@/app/hook/useAuth"
import { useQuery } from "@tanstack/react-query"
import { UserService } from "@/app/services/user/user.service"
import { useGetMeQuery } from "@/app/store/user/user.api"
import { useAppDispatch } from "@/app/hook/hook"
import { updateCategory, updateSearch } from "@/app/store/filter/filters.slice"
import LoginIco from "../../ui/svg/login"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { logout } from "@/app/services/user/user.slice"

const Header = () => {
  const router = useRouter()
  const { user } = useAuth()
  const result = useGetMeQuery("")
  const { data, isLoading } = useGetMeQuery("")
  useEffect(() => {
    user ? result.refetch() : ""
  }, [user])
  const dispatch = useAppDispatch()
  const [show, setShow] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <HeaderIntro />
        <div className={styles.header__content}>
          <div className={styles.header__content__logo}>
            <Link className={styles.header__content__logo__link} href='/'>
              Gruvi<span>bed</span>
            </Link>
          </div>
          <button className={styles.header__content__catalog}>
            <Link href={"catalog"}>
              <CatalogIco />
            </Link>
          </button>
          <div className={styles.header__content__search}>
            <input
              placeholder='Искать среди 5000 товаров!'
              onChange={(e) => dispatch(updateSearch(e.target.value))}
            />
            <Link
              href={"products"}
              //@ts-ignore
              onClick={() => dispatch(updateCategory(["", ""]))}
            >
              <Image src={search} alt='search' />
            </Link>
          </div>
          <div className={styles.header__content__navigation}>
            <Link
              className={styles.header__content__navigation__comparison}
              href='/compare'
            >
              <Image src={comparison} alt='comparison' />
              <p>Сравнение</p>
            </Link>
            <Link
              className={styles.header__content__navigation__favourite}
              href='/profile/favorite'
            >
              <Image src={favourite} alt='favourite' />
              <p>Избранное</p>
            </Link>
            {/* {user ?
              isLoading ? (
                <div>
                  <Link href={`/profile`}>{data.login}</Link>
                </div> : <AuthForm str={"login"} />
            )
            :""
            } */}
            {user ? (
              <div>
                <button
                  onClick={() => setShow(!show)}
                  className={styles.header__content__navigation__profile}
                >
                  <LoginIco />
                  <p>Профиль</p>
                </button>
                {show ? (
                  <div
                    className={
                      styles.header__content__navigation__profile__block
                    }
                  >
                    <Link href={`/profile`}>Профиль</Link>
                    <button
                      onClick={() => {
                        dispatch(logout())
                        router.replace("/")
                      }}
                    >
                      Выйти
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              // href={`/profile`}
              <AuthForm str={"login"} />
            )}
            {/* {user ? !isLoading ? (
              <div>
                <Link href={`/profile`}>{data?.login}</Link>
              </div>
            ) : <AuthForm str={"login"} /> : <AuthForm str={"login"} />} */}
            <Basket />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
