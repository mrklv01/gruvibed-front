import React from "react"
import styles from "./Intro.module.scss"
import SofaIco from "@/app/components/ui/svg/sofa"

const Intro = () => {
  return (
    <div className={styles.IntroHome}>
      <div className={styles.IntroHome__content}>
        <div className={styles.IntroHome__content__categories}>
          <ul>
            <li>
              <a>Мягкая мебель</a>
            </li>
            <li>
              <a>Гостиные</a>
            </li>
            <li>
              <a>Спальни</a>
            </li>
            <li>
              <a>Матрасы</a>
            </li>
            <li>
              <a>Текстиль</a>
            </li>
            <li>
              <a>Акции</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Intro
