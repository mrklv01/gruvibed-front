import React from "react"
import styles from "../Home.module.scss"
import Image from "next/image"
import brand from "../../../../assets/brand.png"
import brand2 from "../../../../assets/brand2.png"
import brand3 from "../../../../assets/brand3.png"
import brand4 from "../../../../assets/brand4.png"
import brand5 from "../../../../assets/brand5.png"
import Link from "next/link"
const Brands = () => {
  return (
    <div className={styles.home__brands}>
      <h3 className={styles.home__brands__title}>Бренды</h3>
      <div className={styles.home__brands__content}>
        <div>
          <Image src={brand} alt='brand' />
        </div>
        <div>
          <Image src={brand2} alt='brand' />
        </div>
        <div>
          <Image src={brand3} alt='brand' />
        </div>
        <div>
          <Image src={brand4} alt='brand' />
        </div>
        <div>
          <Image src={brand5} alt='brand' />
        </div>
      </div>
    </div>
  )
}

export default Brands
