import ProductCard from "@/app/components/ui/card-item/productCard"
import React, { useEffect } from "react"
import styles from "./Products.module.scss"
import { useAppSelector } from "@/app/hook/hook"
import { useQuery } from "@tanstack/react-query"
import { ProductService } from "@/app/services/product/product.service"
import apiAxios from "@/app/api/api.interceptor"
import { useRouter } from "next/router"
import { IProduct } from "@/app/services/product/product.interface"

const Products = ({ title, products }: any) => {
  const { favorite } = useAppSelector((state) => state.favorites)
  const { basket } = useAppSelector((state) => state.basket)
  const { compare } = useAppSelector((state) => state.compare)

  return (
    <div className={styles.producstHome}>
      <div className={styles.producstHome__content}>
        <div className={styles.producstHome__content__title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.producstHome__content__products}>
          {products.slice(0, 3).map((product: IProduct) => (
            <ProductCard
              product={product}
              count={product.count}
              description={product.description}
              favorite={favorite.some((item: any) => item.id == product.id)}
              basket={basket.some((item: any) => item.id == product.id)}
              compare={compare.some((item: any) => item.id == product.id)}
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              priceWithDiscount={product.priceWithDiscount}
              productPath={product.productPath}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
