import apiAxios from "@/app/api/api.interceptor"
import styles from "./CreateProduct.module.scss"
import { useState } from "react"
import Cookies from "js-cookie"
import Field from "../field/Field"
const CreateProduct = ({ result, setIsShowCreate }: any) => {
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [size, setSize] = useState("")
  const [priceWithDiscount, setPriceWithDiscount] = useState(0)
  const [transformationMechanism, setTransformationMechanism] = useState("")
  const createUser = async ({
    title,
    slug,
    description,
    price,
    size,
    priceWithDiscount,
    transformationMechanism,
  }: any) => {
    await apiAxios.post(
      `product/admin/create`,
      {
        title,
        slug,
        description,
        price,
        size,
        priceWithDiscount,
        transformationMechanism,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      }
    )
    result.refetch()
    setIsShowCreate(false)
  }
  return (
    <div className={styles.create__modal}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          createUser({
            title,
            slug,
            description,
            price,
            size,
            priceWithDiscount,
            transformationMechanism,
          })
          // updateUser({ id: idUser, login: login })
        }}
        className={styles.create__modal__content}
      >
        <button
          onClick={() => setIsShowCreate(false)}
          className={styles.create__modal__content__close}
        >
          X
        </button>
        <h3 className={styles.create__modal__content__title}>
          Создание продукта
        </h3>
        <div className={styles.create__modal__content__block}>
          <div className={styles.create__modal__content__block__item}>
            <div className={styles.input}>
              <div className={styles.input__content}>
                <input
                  type='text'
                  placeholder='Название'
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor=''>Название</label>
              </div>
            </div>
          </div>
          <div className={styles.create__modal__content__block__item}>
            <div className={styles.input}>
              <div className={styles.input__content}>
                <input
                  type='text'
                  placeholder='Ссылка'
                  onChange={(e) => setSlug(e.target.value)}
                />
                <label htmlFor=''>Ссылка</label>
              </div>
            </div>
          </div>
          <div className={styles.create__modal__content__block__item}>
            <div className={styles.input}>
              <div className={styles.input__content}>
                <input
                  type='text'
                  placeholder='Описание'
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor=''>Описание</label>
              </div>
            </div>
          </div>
          <div className={styles.create__modal__content__block__item}>
            <div className={styles.input}>
              <div className={styles.input__content}>
                <input
                  type='text'
                  placeholder='Цена'
                  onChange={(e) => setPrice(+e.target.value)}
                />
                <label htmlFor=''>Цена</label>
              </div>
            </div>
          </div>
          <div className={styles.create__modal__content__block__item}>
            <div className={styles.input}>
              <div className={styles.input__content}>
                <input
                  type='text'
                  placeholder='Размер'
                  onChange={(e) => setSize(e.target.value)}
                />
                <label htmlFor=''>Размер</label>
              </div>
            </div>
          </div>
          <div className={styles.create__modal__content__block__item}>
            <div className={styles.input}>
              <div className={styles.input__content}>
                <input
                  type='text'
                  placeholder='Цена со скидкой'
                  onChange={(e) => setPriceWithDiscount(+e.target.value)}
                />
                <label htmlFor=''>Цена со скидкой</label>
              </div>
            </div>
          </div>
          <div className={styles.create__modal__content__block__item}>
            <div className={styles.input}>
              <div className={styles.input__content}>
                <input
                  type='text'
                  placeholder='Механизм трансформации'
                  onChange={(e) => setTransformationMechanism(e.target.value)}
                />
                <label htmlFor=''>Механизм трансформации</label>
              </div>
            </div>
          </div>
          <button className={styles.button} type='submit'>
            Создать продукт
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateProduct
