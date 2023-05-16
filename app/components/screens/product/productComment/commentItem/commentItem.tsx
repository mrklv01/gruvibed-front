import Dislike from "@/app/components/ui/svg/dislike"
import Like from "@/app/components/ui/svg/like"
import Star from "@/app/components/ui/svg/star"
import React from "react"
import styles from "../productComment.module.scss"

const CommentItem = () => {
  const stars = ["star", "star", "star", "star", "star"]
  const rating = 4
  return (
    <div className={styles.ProductComment__content__comments__comment}>
      <div className={styles.ProductComment__content__comments__comment__top}>
        <div
          className={
            styles.ProductComment__content__comments__comment__top__creator
          }
        >
          <p>Валерий</p>
        </div>
        <div
          className={
            styles.ProductComment__content__comments__comment__top__stars
          }
        >
          {stars.map((star, i) => (
            <div
              className={
                styles.ProductComment__content__comments__comment__top__stars__star
              }
            >
              <Star
                w={18}
                h={18}
                fill={rating >= i + 1 ? "#005BCC" : "#E4E4EE"}
              />
            </div>
          ))}
        </div>
        <div
          className={
            styles.ProductComment__content__comments__comment__top__published
          }
        >
          <p>4 месяца назад</p>
        </div>
      </div>
      <div className={styles.ProductComment__content__comments__comment__body}>
        <div
          className={
            styles.ProductComment__content__comments__comment__body__description
          }
        >
          <p>
            Покупал этот товар несколько месяцев назад, моей жене, детям и
            собаке - очень понравился :))
          </p>
        </div>
      </div>
      <div
        className={styles.ProductComment__content__comments__comment__bottom}
      >
        <div
          className={
            styles.ProductComment__content__comments__comment__bottom__like
          }
        >
          <div>
            <Like />
          </div>
          <p>4</p>
        </div>
        <div
          className={
            styles.ProductComment__content__comments__comment__bottom__dislike
          }
        >
          <div>
            <Dislike />
          </div>
          <p>4</p>
        </div>
      </div>
    </div>
  )
}

export default CommentItem
