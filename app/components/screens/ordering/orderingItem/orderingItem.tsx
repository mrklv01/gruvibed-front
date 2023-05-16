import React from "react"
import styles from "../Ordering.module.scss"

const OrderingItem = ({ description = "", count = 0, price = 0 }) => {
  return (
    <div className={styles.Ordering__container__content__right__items__item}>
      <div
        className={
          styles.Ordering__container__content__right__items__item__description
        }
      >
        <p>
          {description} <a>× {count}</a>
        </p>
      </div>
      <div
        className={
          styles.Ordering__container__content__right__items__item__price
        }
      >
        <p>{price * count}тг</p>
      </div>
    </div>
  )
}

export default OrderingItem
