import React from "react"
import styles from "../Compare.module.scss"

const CompareColumn = ({ name = "none", value = "none" }) => {
  return (
    <div className={styles.Compare__container__content__products__item__column}>
      <div
        className={
          styles.Compare__container__content__products__item__column__name
        }
      >
        <p>{name}</p>
      </div>
      <div
        className={
          styles.Compare__container__content__products__item__column__value
        }
      >
        <p>{value}</p>
      </div>
    </div>
  )
}

export default CompareColumn
