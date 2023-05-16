import styles from "./CreateProduct.module.scss"
import { useState, useEffect } from "react"
import { useGetProductByIdQuery } from "@/app/store/admin/admin.api"
import apiAxios from "@/app/api/api.interceptor"
import Cookies from "js-cookie"

const UpdateProducts = ({ setIsShowUpdate, index, result }: any) => {
  const { data, isLoading } = useGetProductByIdQuery(index)

  console.log("product", data)
  const idUser = isLoading ? 0 : data?.id

  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [size, setSize] = useState("")
  const [priceWithDiscount, setPriceWithDiscount] = useState(0)
  const [transformationMechanism, setTransformationMechanism] = useState(
    isLoading ? "" : data.transformationMechanism
  )
  useEffect(() => {
    apiAxios
      .get(`product/by/${index}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      })
      .then((res) => {
        setTitle(res.data.title)
        setSlug(res.data.slug)
        setDescription(res.data.description)
        setPrice(res.data.price)
        setSize(res.data.size)
        setPriceWithDiscount(res.data.priceWithDiscount)
      })
  }, [])

  const updateProduct = async ({
    id,
    title,
    slug,
    description,
    price,
    size,
    priceWithDiscount,
  }: any) => {
    await apiAxios.patch(
      `product/admin/update/${id}`,
      {
        title,
        slug,
        description,
        price,
        size,
        priceWithDiscount,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      }
    )
    result.refetch()
  }

  return (
    <div className={styles.create__modal}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          // createUser({ title, slug })
          // updateUser({ id: idUser, login: login })
          updateProduct({
            id: idUser,
            title,
            slug,
            description,
            price,
            size,
            priceWithDiscount,
          })
          setIsShowUpdate(false)
        }}
        className={styles.create__modal__content}
      >
        <h3 className={styles.create__modal__content__title}>
          Обновление продукта
        </h3>
        <div className={styles.create__modal__content__block}>
          <button
            onClick={() => setIsShowUpdate(false)}
            className={styles.create__modal__content__close}
          >
            X
          </button>
          <div className={styles.create__modal__content__block__item}>
            <div className={styles.input}>
              <div className={styles.input__content}>
                <input
                  type='text'
                  placeholder='Название'
                  onChange={(e) => setTitle(e.target.value)}
                  defaultValue={isLoading ? "" : data.title}
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
                  defaultValue={isLoading ? "" : data.slug}
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
                  defaultValue={isLoading ? "" : data.description}
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
                  defaultValue={isLoading ? "" : data.price}
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
                  defaultValue={isLoading ? "" : data.size}
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
                  defaultValue={isLoading ? 0 : data.priceWithDiscount}
                />
                <label htmlFor=''>Цена со скидкой</label>
              </div>
            </div>
          </div>

          <button className={styles.button} type='submit'>
            Изменить продукт
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateProducts
