import React from "react"
import CommentItem from "./commentItem/commentItem"
import CommentSort from "../../../ui/sort/Sort"
import styles from "./productComment.module.scss"

const ProductComment = ({ product }: any) => {
  return (
    <div className={styles.ProductComment}>
      <div className={styles.ProductComment__content}>
        <div className={styles.ProductComment__content__title}>
          <h3>
            Отзывы <a>32</a>
          </h3>
        </div>
        <CommentSort />
        <div className={styles.ProductComment__content__comments}>
          <CommentItem />
          <CommentItem />
        </div>
      </div>
    </div>
  )
}

export default ProductComment
