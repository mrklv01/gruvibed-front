import React from "react"
import styles from "../../../Profile.module.scss"
import OrderItem from "./orderItem/orderItem"
import { useRouter } from "next/router"
import { useGetAllOrderItemByIdQuery } from "@/app/store/user/user.api"
import orders from "@/pages/profile/orders"

const ProfileOrderInfo = () => {
  const router = useRouter()

  const orderId = router.query.id
  const { data, isLoading } = useGetAllOrderItemByIdQuery(orderId)

  console.log(data, "data - single")
  const summ = data?.reduce(
    (acc: number, product: any) =>
      acc + product.product.priceWithDiscount * product.count,
    0
  )
  console.log(data)
  return (
    <div className={styles.ProfilePage}>
      <div className={styles.ProfilePage__container}>
        <div className={styles.ProfilePage__container__content}>
          <div className={styles.ProfilePage__container__content__order}>
            <div
              className={styles.ProfilePage__container__content__order__title}
            >
              <p>Информация о заказе</p>
            </div>
            <div
              className={styles.ProfilePage__container__content__order__content}
            >
              <div
                className={
                  styles.ProfilePage__container__content__order__content__status
                }
              >
                <p
                  className={
                    styles.ProfilePage__container__content__order__content__status__sending
                  }
                >
                  Статус: <a>отправлено</a>
                </p>
                <p
                  className={
                    styles.ProfilePage__container__content__order__content__status__date
                  }
                >
                  Создано: 25.03.23
                </p>
              </div>
              <div
                className={styles.ProfilePage__container__content__order__items}
              >
                {isLoading
                  ? []
                  : data.map((order: any) => (
                      <OrderItem
                        order={order}
                        count={order.count}
                        productPath={order.product.productPath}
                      />
                    ))}
                {/*<OrderItem data={data} />*/}
                {/*<OrderItem />*/}
              </div>
              <div
                className={
                  styles.ProfilePage__container__content__order__content__amount
                }
              >
                <p>Общая сумма: {summ}тг</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileOrderInfo
