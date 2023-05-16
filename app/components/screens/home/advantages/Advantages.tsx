import React from "react"
import styles from "../Home.module.scss"
import Link from "next/link"
import Image from "next/image"
import brand from "@/app/assets/brand.png"
import advantages from "../../../../assets/advantages.png"
import advantages2 from "../../../../assets/advantages2.png"
import advantages3 from "../../../../assets/advantages3.png"

const Advantages = () => {
  return (
    <div className={styles.home__advantages}>
      <h3 className={styles.home__advantages__title}>Преимущества</h3>
      <div className={styles.home__advantages__content}>
        <Link className={styles.home__advantages__content__item} href='/'>
          <Image src={advantages} alt='brand' />
          <p>Бесплатная доставка и сборка мебели</p>
        </Link>
        <Link className={styles.home__advantages__content__item} href='/'>
          <Image src={advantages2} alt='brand' />
          <p>Бесплатная «примерка» мебели к дому</p>
        </Link>
        <Link className={styles.home__advantages__content__item} href='/'>
          <Image src={advantages3} alt='brand' />
          <p>Услуга хранения товара на складе</p>
        </Link>
      </div>
    </div>
  )
}

export default Advantages
