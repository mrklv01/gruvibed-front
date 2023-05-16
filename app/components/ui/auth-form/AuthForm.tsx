import { useOnClickOutside } from "@/app/hook/hook"
import React, { FC, useEffect, useRef, useState, forwardRef } from "react"
import Field from "../field/Field"
import { IAuthForm } from "./auth-form.interface"
import styles from "./AuthForm.module.scss"
import { SubmitHandler, useForm } from "react-hook-form"
import { validEmail } from "./auth.valid"
import LoginIco from "../svg/login"
import { useAction } from "@/app/hook/useAction"
import { toast } from "react-toastify"

const AuthForm = (str: any) => {
  const [type, setType] = useState("login")
  const [isShow, setIsShow] = useState(false)
  const { register: registerAuth, login } = useAction()

  const escape = useRef<HTMLElement>(null)
  const outside = useRef<HTMLElement>(null)

  useEffect(() => {
    console.log(type)
  }, [type])

  const handleEscape = (event: any) => {
    if (event.keyCode == 27) setIsShow(false)
  }

  useOnClickOutside(outside, () => setIsShow(false))

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<IAuthForm>({
    defaultValues: {
      email: "",
      password: "",
      login: "",
    },
    mode: "onChange",
  })

  useEffect(() => {
    if (isShow) document.addEventListener("keydown", handleEscape, false)
    return () => {
      document.addEventListener("keydown", handleEscape, false)
    }
  }, [handleEscape, isShow])

  const onSubmit: SubmitHandler<IAuthForm> = async (values) => {
    if (type == "register") {
      registerAuth(values)
      setIsShow(false)
    } else {
      login(values)
      setIsShow(false)
    }
  }

  return (
    <div className={styles.auth__wrapper}>
      <div onClick={() => setIsShow(!isShow)} className={styles.auth__login}>
        <LoginIco />
        <p>Вход</p>
      </div>

      {isShow && (
        //@ts-ignore
        <div className={styles.auth__modal} ref={escape}>
          <form
            className={styles.auth__form}
            //@ts-ignore
            ref={outside}
            onSubmit={handleSubmit(onSubmit)}
          >
            {type === "register" ? (
              <h3 className={styles.auth__form__title}>Регистрация</h3>
            ) : type == "login" ? (
              <h3 className={styles.auth__form__title}>Авторизация</h3>
            ) : (
              <h3 className={styles.auth__form__title}>Регистрация</h3>
            )}
            <div className={styles.auth__form__input__roles}></div>
            <Field
              {...register("email", {
                required: "Email required",
                pattern: {
                  value: validEmail,
                  message: "Not validate e-mail",
                },
              })}
              placeholder='antonanton@gmail.com'
              error={errors.email}
              label='Электронная почта  *'
              autoComplete='off'
            />
            {type == "register" ? (
              <Field
                {...register("login", {
                  required: "Login required",
                })}
                placeholder='Majest228'
                error={errors.email}
                label='Login  *'
                autoComplete='off'
              />
            ) : (
              ""
            )}
            <Field
              {...register("password", {
                required: "Password required",
                minLength: {
                  value: 8,
                  message: "Пароль должен быть более 8-ми символов",
                },
              })}
              placeholder='Пароль'
              error={errors.password}
              label='Пароль  *'
              type='password'
            />

            {type == "login" ? (
              <button type='submit' className={styles.auth__button}>
                Войти
              </button>
            ) : (
              <button type='submit' className={styles.auth__button}>
                Зарегистрироваться
              </button>
            )}

            {type == "login" ? (
              <div className={styles.auth__footer}>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    //@ts-ignore
                    setType(type == "register" ? "login" : "register")
                  }}
                  className={styles.auth__swap}
                >
                  Зарегистрироваться
                </button>
              </div>
            ) : (
              <div className={styles.auth__footer}>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setType(type == "register" ? "login" : "register")
                  }}
                  className={styles.auth__swap}
                >
                  Войти{" "}
                </button>
                <span>в существующий профиль</span>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  )
}

export default AuthForm
