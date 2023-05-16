import React from "react"
import styles from "./Concepts.module.scss"
import ConceptItem from "./concept/ConceptItem"
import Image from "next/image"
import IdeaEx from "../../../../assets/ideas.jpg"
import IdeaEx2 from "../../../../assets/news1.webp"
import Link from "next/link"
const Concepts = () => {
  return (
    <div className={styles.ideasHome}>
      <div className={styles.ideasHome__content}>
        <div className={styles.ideasHome__content__title}>
          <h3>Идеи для дома</h3>
        </div>
        <div className={styles.ideasHome__content__ideas}>
          <Link
            href={"/ideas/first"}
            className={styles.ideasHome__content__ideas__item}
          >
            <div
              className={styles.ideasHome__content__ideas__item__description}
            >
              <p>
                Как выбрать диван в гостиную? Что нужно знать при покупке
                дивана?
              </p>
            </div>
            <div className={styles.ideasHome__content__ideas__item__img}>
              <Image src={IdeaEx} alt='' />
            </div>
          </Link>
          <Link
            href={"/ideas/second"}
            className={styles.ideasHome__content__ideas__item}
          >
            <div
              className={styles.ideasHome__content__ideas__item__description}
            >
              <p>
                Цветовая палитра для интерьера – как правильно выбрать цвет
                мебели?
              </p>
            </div>
            <div className={styles.ideasHome__content__ideas__item__img}>
              <Image width={582.95} src={IdeaEx2} alt='' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Concepts
