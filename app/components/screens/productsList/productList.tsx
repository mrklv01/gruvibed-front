import React, { useEffect, useState } from "react"
import ProductCard from "../../ui/card-item/productCard"
import Sort from "../../ui/sort/Sort"
import ProductsFilters from "./productFilters/productsFilters"
import styles from "./productList.module.scss"
import apiAxios from "@/app/api/api.interceptor"
import { IProduct } from "@/app/services/product/product.interface"
import { useAppSelector, useAppDispatch } from "@/app/hook/hook"
import {
  changeResetFilter,
  initialLoadOrder,
} from "@/app/store/filter/filters.slice"

const ProductList = () => {
  const { favorite } = useAppSelector((state) => state.favorites)
  const { basket } = useAppSelector((state) => state.basket)
  const { compare } = useAppSelector((state) => state.compare)
  const [products, setProducts] = useState([])
  async function getProducts() {
    const { data: products } = await apiAxios.get("product/all")
    return setProducts(products)
  }
  useEffect(() => {
    getProducts()
  }, [])

  const dispatch = useAppDispatch()

  const filters = useAppSelector((state) => state.filters)

  function Filter(products: any = [], filters: any = {}) {
    const keys = Object.keys(filters).filter((key) =>
      filters.hasOwnProperty(key)
    )
    return products.filter((elem: any) => {
      const commonKeys = keys.filter((key) => elem.hasOwnProperty(key))
      return commonKeys.reduce((flag: boolean, key: string): any => {
        if (key == "title") {
          let search = elem[key]
          if (search.toUpperCase().includes(filters.title[0].toUpperCase()))
            return flag
          else return false
        }
        if (key == "price") {
          if (
            elem.priceWithDiscount >= filters[key][0] &&
            elem.priceWithDiscount <= filters[key][1]
          )
            return flag
          else return false
        }
        if (key == "categoryId") {
          if (!filters[key][0] || !filters[key][1]) return flag
          if (elem[key] == filters[key][0]) return flag
          else return false
        }
        if (key == "manufacturerId") {
          if (filters[key].length == 0) return flag
          if (filters[key].includes(elem[key])) return flag
          else return false
        }
      }, true)
    })
  }

  const filterData = Filter(products, filters)
  return (
    <div className={styles.ProductList}>
      <div className={styles.ProductList__container}>
        <div className={styles.ProductList__container__content__filters__title}>
          <h2
            className={
              styles.ProductList__container__content__filters__title__text
            }
          >
            {filters.categoryId[1] ? filters.categoryId[1] : "Все товары"}
          </h2>
          <button
            className={
              styles.ProductList__container__content__filters__title__refresh
            }
            onClick={() => {
              dispatch(initialLoadOrder())
              dispatch(changeResetFilter())
            }}
          >
            Сбросить все фильтры
          </button>
        </div>
        <div className={styles.ProductList__container__content}>
          <div className={styles.ProductList__container__content__filters}>
            <ProductsFilters />
          </div>
          <div className={styles.ProductList__container__content__products}>
            <div
              className={styles.ProductList__container__content__products__sort}
            >
              <Sort />
            </div>
            <div
              className={
                styles.ProductList__container__content__products__items
              }
            >
              {filterData.map((product: IProduct) => (
                <div
                  className={
                    styles.ProductList__container__content__products__items__card
                  }
                  key={product.id}
                >
                  <ProductCard
                    type={false}
                    favorite={favorite.some(
                      (item: any) => item.id == product.id
                    )}
                    basket={basket.some((item: any) => item.id == product.id)}
                    compare={compare.some((item: any) => item.id == product.id)}
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    priceWithDiscount={product.priceWithDiscount}
                    product={product}
                    productPath={product.productPath}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
