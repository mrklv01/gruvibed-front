import React, { useEffect } from "react"
import styles from "./ProductsPage.module.scss"
import Intro from "../../ui/intro/Intro"
import ProductBody from "./productBody/ProductBody"
import ProductDesc from "./productDesc/ProductDesc"
import ProductInfo from "./productInfo/productInfo"
import ProductComment from "./productComment/productComment"
import { useQuery } from "@tanstack/react-query"
import apiAxios from "@/app/api/api.interceptor"
import { useRouter } from "next/router"
import { withRouter } from "next/router"
import { useAppSelector } from "@/app/hook/hook"
const ProductPage = ({ product }: any) => {
  const { favorite } = useAppSelector((state) => state.favorites)
  const { basket } = useAppSelector((state) => state.basket)
  const { compare } = useAppSelector((state) => state.compare)
  return (
    <div className={styles.ProductPage}>
      <div className={styles.ProductPage__container}>
        <Intro />
        <ProductBody
          product={product}
          favorite={favorite.some((item: any) => item.id == product.id)}
          basket={basket.some((item: any) => item.id == product.id)}
          compare={compare.some((item: any) => item.id == product.id)}
        />
        <ProductDesc product={product} />
        <ProductInfo product={product} />
        <ProductComment product={product} />
      </div>
    </div>
  )
}

export default ProductPage
