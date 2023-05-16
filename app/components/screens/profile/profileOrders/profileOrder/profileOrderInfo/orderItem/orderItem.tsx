import React from "react"
import styles from "../../../../Profile.module.scss"
import Image from "next/image"
import Product from "../../../../../../../assets/productItem.jpg"

const OrderItem = ({ order, count, productPath }: any) => {
  const { product } = order
  return (
    <div
      className={
        styles.ProfilePage__container__content__order__content__product
      }
    >
      <div
        className={
          styles.ProfilePage__container__content__order__content__product__left
        }
      >
        <div
          className={
            styles.ProfilePage__container__content__order__content__product__left__img
          }
        >
          <Image
            src={`http://localhost:8080/api/files/${productPath}`}
            alt=''
            width={100}
            height={100}
          />
        </div>
        <div
          className={
            styles.ProfilePage__container__content__order__content__product__left__description
          }
        >
          <p
            className={
              styles.ProfilePage__container__content__order__content__product__left__description__title
            }
          >
            {product.title}
          </p>
          <p
            className={
              styles.ProfilePage__container__content__order__content__product__left__description__discount
            }
          >
            Скидка:{" "}
            {(
              100 -
              (product.priceWithDiscount * 100) / product.price
            ).toFixed()}
            %
          </p>
          <p
            className={
              styles.ProfilePage__container__content__order__content__product__left__description__price
            }
          >
            Цена: {product.priceWithDiscount} тг.
          </p>
        </div>
      </div>
      <div
        className={
          styles.ProfilePage__container__content__order__content__product__middle
        }
      >
        <div
          className={
            styles.ProfilePage__container__content__order__content__product__middle__title
          }
        >
          <p>Количество: {count}</p>
        </div>
      </div>
      <div
        className={
          styles.ProfilePage__container__content__order__content__product__right
        }
      >
        <div
          className={
            styles.ProfilePage__container__content__order__content__product__right__title
          }
        >
          <p>Сумма: {product.priceWithDiscount * count}тг</p>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
