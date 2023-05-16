import React from "react"
import styles from "./Sort.module.scss"

const Sort = () => {
  return (
    <div className={styles.sort}>
      <div className={styles.sort__content}>
        <ul>
          <li className={styles.selected}>По популярности</li>
          <li>Новые</li>
          <li>С высокой оценкой</li>
          <li>С низкой оценкой</li>
        </ul>
      </div>
    </div>
  )
}

export default Sort
