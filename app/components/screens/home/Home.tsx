import React from "react"
import styles from "./Home.module.scss"
import Intro from "../../ui/intro/Intro"
import Concepts from "@/app/components/screens/home/concepts/Concepts"
import Brands from "@/app/components/screens/home/brands/Brands"
import Advantages from "@/app/components/screens/home/advantages/Advantages"
import dynamic from "next/dynamic"
import { IProduct } from "@/app/services/product/product.interface"

const Products = dynamic(() => import("./products/Products"), {
  ssr: false,
})

const HomePage = ({ products }: any) => {
  const newProducts = products.sort(() => Math.random() - 0.5)

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <Products products={newProducts} title='Хит продажи' />
        <Concepts />
        <Products products={products} title='Новинки' />
        <Advantages />
        <Brands />
        <div className={styles.home__desc}>
          <p className={styles.home__desc__text}>
            Компания «Evrika Home Comfort» работает на рынке Казахстана с 2009
            года. Более 10 лет компания предоставляет весь спектр мебели
            известных турецких брендов таких как: ''Enza Home'', ''Kilim'',
            ''Mirage'' и оригинальные интерьерные решения. Наши магазины
            расположены в городах Шымкент, Нур-Султан и Алматы.
            <div className={styles.home__desc__text__br}></div>
            Также, Мы рады Вам предложить: Мебель для дома – для создания
            уютного пространства, где можно отдохнуть и расслабиться после
            рабочего дня, в наших салонах предоставлен большой ассортимент
            мягкой мебели от модерна и прованса до классики и арт-деко.
            Корпусная мебель для дома - будем рады помочь сделать ваше
            пространство одновременно красивым и стильным. Для того, чтобы
            пользование спальной или гостиной комнатой было комфортным. Детская
            мебель – должна быть уютной и безопасной, с нашей мебелью Вы сможете
            сделать жизнь Ваших детей яркой, праздничной и беззаботной. Текстиль
            для дома – с помощью текстиля можно не только освежить интерьер, но
            и сделать дом уютнее и теплее, а также подчеркнуть нужные
            декоративные детали. Картинная галерея и декоративные вазы –
            дополните Ваш интерьер целостным и гармоничным продолжением в виде
            картин, которые будут дарить истинное эстетическое удовольствие и
            оживят пространство. Внимательное отношение к каждому посетителю
            салона является стандартом качества работы в нашей компании.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
