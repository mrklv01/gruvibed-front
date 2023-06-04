import React, { useState } from "react"
import styles from "./productCard.module.scss"
import Image from "next/image"
import Sofa from "../../../assets/sofa-example.jpg"
import Comparison from "../svg/comparison"
import Favorite from "../svg/favorite"
import { useAppDispatch } from "@/app/hook/hook"
import { toggleFavorite } from "@/app/store/favorite/favorite.slice"
import { toggleBasket } from "@/app/store/basket/basket.slice"
import { useRouter } from "next/router"
import Link from "next/link"
import { toggleCompare } from "@/app/store/compare/compare.slice"

const ProductCard = ({
  id,
  favorite = false,
  basket = false,
  priceWithDiscount,
  description,
  title,
  price,
  compare,
  type,
  product,
  productPath,
  count,
}: any) => {
  const [getFavorite, setFavorite] = useState(favorite)
  const [getBasket, setBasket] = useState(basket)
  const [getCompare, setCompare] = useState(compare)
  const action = {
    id,
    favorite,
    basket,
    priceWithDiscount,
    description,
    price,
    title,
    count: 1,
    compare,
    productPath,
  }
  const dispatch = useAppDispatch()
console.log(productPath)
  return (
    <div className={styles.ProductCard__content}>
      <div className={styles.ProductCard__content__top}>
        <div className={styles.ProductCard__content__top__status}></div>
        <Link href={`products/product/${id}`} className={styles.ProductCard}>
          <div className={styles.ProductCard__content__top__img}>
            <Image
              src={`https://gruvibed-back.herokuapp.com/api/files/${productPath}`}
              width={399}
              height={244.92}
              alt=''
            />
          </div>
        </Link>
      </div>
      <div className={styles.ProductCard__content__middle}>
        <h3>{title}</h3>
        <div className={styles.ProductCard__content__middle__description}>
          <p>{description}</p>
          <div
            className={
              styles.ProductCard__content__middle__description__buttons
            }
          >
            {type ? (
              ""
            ) : (
              <div
                className={
                  styles.ProductCard__content__middle__description__buttons__compare
                }
                onClick={() => {
                  dispatch(toggleCompare(action))
                  setCompare(!getCompare)
                }}
              >
                <Comparison fill={getCompare ? "#63686D" : "none"} />
              </div>
            )}
            {type ? (
              ""
            ) : (
              <div
                className={
                  styles.ProductCard__content__middle__description__buttons__favorite
                }
                onClick={() => {
                  dispatch(toggleFavorite(action))
                  setFavorite(!getFavorite)
                }}
              >
                <Favorite fillInner={getFavorite ? "red" : "none"} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.ProductCard__content__bottom}>
        <div className={styles.ProductCard__content__bottom__price}>
          <div className={styles.ProductCard__content__bottom__price__discount}>
            <p>{priceWithDiscount}тг</p>
          </div>
          <div
            className={styles.ProductCard__content__bottom__price__nodiscount}
          >
            <p>{price}тг</p>
          </div>
          <div className={styles.ProductCard__content__bottom__price__count}>
            <p>Кол-во: {count}</p>
          </div>
        </div>
        {type ? (
          ""
        ) : (
          <div
            className={
              getBasket
                ? styles.ProductCard__content__bottom__remove
                : styles.ProductCard__content__bottom__add
            }
          >
            <button
              onClick={() => {
                dispatch(toggleBasket(action))
                setBasket(!getBasket)
              }}
            >
              <a></a>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
