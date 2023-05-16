import React from "react"
import styles from "./productInfo.module.scss"

const ProductInfo = ({ product }: any) => {
  return (
    <div className={styles.ProductInfo}>
      <div className={styles.ProductInfo__content}>
        <div className={styles.ProductInfo__content__title}>
          <h3>Описание:</h3>
        </div>
        <div className={styles.ProductInfo__content__body}>
          <p>
            Ровные линии, лаконичные формы, комфорт и мягкость собраны в диване
            «Порту». Однотонная обивка и отсутствие декора делают его облик
            особенно элегантным. Компактные размеры позволяют использовать
            «Порту» даже в небольших по площади комнатах. А простая
            трансформация и широкое спальное место делают модель незаменимой в
            однокомнатных квартирах и студиях.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
