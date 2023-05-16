import React, { useEffect, useState } from "react"
import styles from "./Ordering.module.scss"
import { useAppDispatch, useAppSelector } from "@/app/hook/hook"
import apiAxios from "@/app/api/api.interceptor"
import dynamic from "next/dynamic"
import { useGetMeQuery } from "@/app/store/user/user.api"
import Cookies from "js-cookie"
import { useAuth } from "@/app/hook/useAuth"
import Link from "next/link"
import { clearBasket, setOrderId } from "@/app/store/basket/basket.slice"
import { toast } from "react-toastify"

const OrderingItem = dynamic(() => import("./orderingItem/orderingItem"), {
  ssr: false,
})

const Ordering = () => {
  const { basket, orderId } = useAppSelector((state) => state.basket)
  const [status, setStatus] = useState(false)
  console.log(basket)
  const notify = () => {
    toast.error("Пройдите авторизацию для оформления заказа", {
      position: toast.POSITION.BOTTOM_RIGHT,
    })
  }

  const { user } = useAuth()
  const dispatch = useAppDispatch()
  const { data, isLoading } = useGetMeQuery("")
  const summ = basket.reduce(
    (acc: any, product: any) => acc + product.priceWithDiscount * product.count,
    0
  )
  const [products, setProducts] = useState([])
  async function getProducts() {
    const { data: products } = await apiAxios.get("product/all")
    return setProducts(products)
  }
  useEffect(() => {
    getProducts()
  }, [])
  const selectedProducts: any = {}
  products.forEach((item: any) =>
    basket.forEach((product: any) => {
      if (item.id == product.id) {
        selectedProducts[product.id] = item
      }
    })
  )

  //create order

  const createOrder = async () => {
    {
      user
        ? await apiAxios
            .post(
              "order/create",
              { id: user.id },
              {
                headers: {
                  Authorization: `Bearer ${Cookies.get("accessToken")}`,
                },
              }
            )
            .then((res) => {
              dispatch(setOrderId(res.data.id))
              basket.forEach((item: any) =>
                apiAxios.post(
                  `order/orderitem/${res.data.id}`,
                  {
                    productId: item.id,
                    count: item.count,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${Cookies.get("accessToken")}`,
                    },
                  }
                )
              )
            })
            .then((res) => {
              apiAxios.patch(
                `order/update-status/${Cookies.get("orderId")}`,
                {},
                {
                  headers: {
                    Authorization: `Bearer ${Cookies.get("accessToken")}`,
                  },
                }
              )
              dispatch(clearBasket())
              setStatus(true)
            })
        : notify()
    }
  }

  //

  return (
    <div className={styles.Ordering}>
      <div className={styles.Ordering__container}>
        <div className={styles.Ordering__container__content}>
          <div className={styles.Ordering__container__content__left}>
            <div className={styles.Ordering__container__content__left__title}>
              <h3>Детали оплаты</h3>
            </div>
            <div className={styles.Ordering__container__content__left__title}>
              <h2>Адрес:</h2>
              <p>{data?.address}</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                createOrder()
              }}
              className={styles.Ordering__container__content__left__form}
            >
              <div
                className={
                  styles.Ordering__container__content__left__form__input
                }
              >
                <h2>Заказчик:</h2>
                {isLoading ? "" : <p>{data?.name}</p>}
              </div>
              <div
                className={
                  styles.Ordering__container__content__left__form__input
                }
              >
                <h2>Номер телефона:</h2>
                {isLoading ? "" : <p>{data?.phone}</p>}
              </div>
              <div
                className={
                  styles.Ordering__container__content__left__form__submit
                }
              >
                <button type={"submit"}>Подтвердить заказ</button>
              </div>
            </form>
          </div>
          <div className={styles.Ordering__container__content__right}>
            <div className={styles.Ordering__container__content__right__title}>
              <h3>Ваш заказ</h3>
            </div>
            <div className={styles.Ordering__container__content__right__items}>
              {basket.map((product: any) => (
                <OrderingItem
                  price={selectedProducts[product.id]?.priceWithDiscount}
                  count={product.count}
                  description={product.title}
                />
              ))}
            </div>
            <div className={styles.Ordering__container__content__right__sum}>
              <div
                className={
                  styles.Ordering__container__content__right__sum__title
                }
              >
                <p>Итого</p>
              </div>
              <div
                className={
                  styles.Ordering__container__content__right__sum__value
                }
              >
                <p>{summ}тг</p>
              </div>
            </div>
            <div
              className={
                styles.Ordering__container__content__right__additionally
              }
            >
              <div
                className={
                  styles.Ordering__container__content__right__additionally__title
                }
              >
                <p>Оплата при доставке</p>
              </div>
              <div
                className={
                  styles.Ordering__container__content__right__additionally__description
                }
              >
                <p>
                  Оплата наличными или банковской картой при доставке заказа.
                </p>

                <p>
                  Персональная информация будет использована в рамках
                  обслуживания клиента.
                </p>
              </div>
            </div>
          </div>
        </div>
        {status ? (
          <Link href={`/profile/orders/${orderId}`}>
            Ваш заказ готов под номером {orderId}
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Ordering
