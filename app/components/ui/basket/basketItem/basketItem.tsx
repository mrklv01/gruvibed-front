import React, { useState } from "react"
import styles from "../basket.module.scss"
import Product from "../../../../assets/productItem.jpg"
import Image from "next/image"
import Trash from "../../svg/trash"
import { useAppDispatch } from "@/app/hook/hook"
import {
  changeCount,
  plusCount,
  minusCount,
  toggleBasket,
} from "@/app/store/basket/basket.slice"
const BasketItem = ({
  img,
  id,
  description,
  priceWithDiscount,
  price,
  count,
}: any) => {
  const dispatch = useAppDispatch()
  const min = 1
  const max = 100

  const [value, setValue] = useState(count)

  const handleChange = (val: number) => {
    const value = Math.max(min, Math.min(max, Number(val)))
    dispatch(
      changeCount({
        id,
        value: +value,
      })
    )
    setValue(value)
  }
  return (
    <div className={styles.basket__form__products__product}>
      <div className={styles.basket__form__products__product__left}>
        <div className={styles.basket__form__products__product__left__img}>
          <Image
            src={`http://localhost:8080/api/files/${img}`}
            alt=''
            width={150}
            height={80}
          />
        </div>
        <div
          className={styles.basket__form__products__product__left__description}
        >
          <p
            className={
              styles.basket__form__products__product__left__description__title
            }
          >
            {description}
          </p>
          <p
            className={
              styles.basket__form__products__product__left__description__discount
            }
          >
            Скидка: {(100 - (priceWithDiscount * 100) / price).toFixed()}%
          </p>
          <p
            className={
              styles.basket__form__products__product__left__description__price
            }
          >
            Цена: {priceWithDiscount}тг.
          </p>
        </div>
      </div>
      <div className={styles.basket__form__products__product__center}>
        <div className={styles.basket__form__products__product__center__title}>
          <p>кол. шт.</p>
        </div>
        <div className={styles.basket__form__products__product__center__count}>
          <div
            className={
              styles.basket__form__products__product__center__count__change
            }
          >
            <button
              onClick={() => {
                dispatch(plusCount({ id }))
                handleChange(value - 1)
              }}
            >
              -
            </button>
          </div>
          <div
            className={
              styles.basket__form__products__product__center__count__value
            }
          >
            <input
              type='number'
              min={"1"}
              max={"100"}
              value={value}
              defaultValue={count}
              onChange={(e) => {
                handleChange(+e.target.value)
              }}
            />
          </div>
          <div
            className={
              styles.basket__form__products__product__center__count__change
            }
          >
            <button
              onClick={() => {
                dispatch(plusCount({ id }))
                handleChange(value + 1)
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className={styles.basket__form__products__product__right}>
        <div className={styles.basket__form__products__product__right__price}>
          <p
            className={
              styles.basket__form__products__product__right__price__title
            }
          >
            Сумма
          </p>

          <p
            className={
              styles.basket__form__products__product__right__price__usually
            }
          >
            {price}тг
          </p>
          <p
            className={
              styles.basket__form__products__product__right__price__discount
            }
          >
            {priceWithDiscount}тг
          </p>
        </div>
        <div
          className={styles.basket__form__products__product__right__delete}
          onClick={() => dispatch(toggleBasket({ id }))}
        >
          <Trash fill={"#005bcc"} />
        </div>
      </div>
    </div>
  )
}

export default BasketItem
