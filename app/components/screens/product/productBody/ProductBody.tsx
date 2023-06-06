import React, { useState } from "react"
import styles from "./ProductBody.module.scss"
import ProductImg from "../../../../assets/productItem.jpg"
import Image from "next/image"
import Comparison from "@/app/components/ui/svg/comparison"
import Favorite from "@/app/components/ui/svg/favorite"
import Star from "@/app/components/ui/svg/star"
import { useAppDispatch } from "@/app/hook/hook"
import { toggleFavorite } from "@/app/store/favorite/favorite.slice"
import { toggleBasket } from "@/app/store/basket/basket.slice"
import { toggleCompare } from "@/app/store/compare/compare.slice"

const ProductBody = ({
  product,
  isLoading,
  favorite = false,
  basket = false,
  compare,
}: any) => {
  const stars = ["star", "star", "star", "star", "star"]
  const rating = 4

  const action = {
    id: product.id,
    favorite,
    basket,
    priceWithDiscount: product.priceWithDiscount,
    description: product.description,
    price: product.price,
    title: product.title,
    count: 1,
    compare,
  }

  const [getFavorite, setFavorite] = useState(favorite)
  const [getBasket, setBasket] = useState(basket)
  const [getCompare, setCompare] = useState(compare)

  const dispatch = useAppDispatch()
  return (
    <div className={styles.ProductBody}>
      <div className={styles.ProductBody__content}>
        <div className={styles.ProductBody__content__left}>
          <div className={styles.ProductBody__content__left__main}>
            <Image
              loader={()=>`https://gruvibed-back.herokuapp.com/api/files/${product.productPath}`}
              //src={`http://localhost:8080/api/files/${product.productPath}`}
              src={`https://gruvibed-back.herokuapp.com/api/files/${product.productPath}`}
              alt=''
              width={553}
              height={284}
            />
          </div>
        </div>
        <div className={styles.ProductBody__content__right}>
          <div className={styles.ProductBody__content__right__content}>
            <div className={styles.ProductBody__content__right__content__top}>
              <div
                className={
                  styles.ProductBody__content__right__content__top__left
                }
              >
                <p>
                  <a>Артикул:</a> {isLoading ? "" : product.articul}
                </p>
              </div>

              <div
                className={
                  styles.ProductBody__content__right__content__top__right
                }
              >
                <div
                  className={
                    styles.ProductBody__content__right__content__top__right__comparison
                  }
                  onClick={() => {
                    dispatch(toggleCompare(action))
                    setCompare(!getCompare)
                  }}
                >
                  <Comparison fill={getCompare ? "#63686D" : "none"} />
                </div>
                <div
                  className={
                    styles.ProductBody__content__right__content__top__right__favorite
                  }
                  onClick={() => {
                    dispatch(toggleFavorite(action))
                    setFavorite(!getFavorite)
                  }}
                >
                  <Favorite fillInner={getFavorite ? "red" : "none"} />
                </div>
              </div>
            </div>
            <div className={styles.ProductBody__content__title}>
              <p>{product.title}</p>
            </div>
            <div
              className={styles.ProductBody__content__right__content__middle}
            >
              <div
                className={
                  styles.ProductBody__content__right__content__middle__description
                }
              >
                <p>{product.description}</p>
              </div>
              <div
                className={
                  styles.ProductBody__content__right__content__middle__stars
                }
              >
                {stars.map((star, i) => (
                  <div
                    className={
                      styles.ProductBody__content__right__content__middle__stars__star
                    }
                  >
                    <Star fill={rating >= i + 1 ? "#005BCC" : "#E4E4EE"} />
                  </div>
                ))}
                <div
                  className={
                    styles.ProductBody__content__right__content__middle__stars__count
                  }
                >
                  <p>32</p>
                </div>
              </div>
            </div>
            <div
              className={styles.ProductBody__content__right__content__bottom}
            >
              <div
                className={
                  styles.ProductBody__content__right__content__bottom__status
                }
              >
                {product.count == 0 ? (
                  <p>Нет в наличии. Срок ожидания товара до 3-х мес.</p>
                ) : (
                  <p>Кол-во: {product.count}</p>
                )}
              </div>
              <div
                className={
                  styles.ProductBody__content__right__content__bottom__price
                }
              >
                <p>{product.price}тг</p>
              </div>
              <div
                className={
                  styles.ProductBody__content__right__content__bottom__buy
                }
              >
                <button
                  onClick={() => {
                    dispatch(toggleBasket(action))
                    setBasket(!getBasket)
                  }}
                >
                  {getBasket ? "Удалить из корзины" : "Добавить в корзину"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBody
