import React from "react"
import styles from "../Concepts.module.scss"
import Image from "next/image"
import IdeaEx from "../../../../../assets/ideas.jpg"

const ConceptItem = () => {
  return (
    <div className={styles.ideasHome__content__ideas__item}>
      <div className={styles.ideasHome__content__ideas__item__description}>
        <p>
          Цветовая палитра для интерьера – как правильно выбрать цвет мебели?
        </p>
      </div>
      <div className={styles.ideasHome__content__ideas__item__img}>
        <Image src={IdeaEx} alt='' />
      </div>
    </div>
  )
}

export default ConceptItem
