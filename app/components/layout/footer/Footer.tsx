import React from "react"
import styles from "./Footer.module.scss"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__line}></div>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__content__discription}>
            <p>
              Gruvibed — это группа компаний, объединившая ряд самостоятельных
              структур: от магазинов «Меломан»/MARWIN/«Комфорт» в Казахстане до
              кинопроката фильмов в кинотеатрах. В 2017 году компании
              исполнилось 30 лет! За 30 лет из маленького киоска аудиопродукции
              мы выросли в крупную казахстанскую компанию со своими традициями,
              с большой и интересной творческой командой. Наша миссия —
              соответствовать потребностям и вкусам современных детей, родителей
              и молодежи; Наша цель — предоставлять казахстанцам лучшие услуги и
              лучшие отечественные и зарубежные товары. Мы задаём тренд и
              стараемся вести за собой. Мы предоставляем европейские услуги с
              учётом казахстанского колорита.
              <br />
              <br />
              Интернет-магазин Gruvibed © 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
