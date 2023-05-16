import apiAxios from "@/app/api/api.interceptor"
import { useAppSelector } from "@/app/hook/hook"
import { GetStaticProps } from "next"
import React, { useEffect, useState } from "react"
import ProductCard from "../../ui/card-item/productCard"
import styles from "./Compare.module.scss"
import CompareColumn from "./compareColumn/compareColumn"
import { IProduct } from "@/app/services/product/product.interface"

const Compare = () => {
  const { compare } = useAppSelector((state) => state.compare)
  const { favorite } = useAppSelector((state) => state.favorites)
  const { basket } = useAppSelector((state) => state.basket)
  const [products, setProducts] = useState([])
  async function getProducts() {
    const { data: products } = await apiAxios.get("product/all")
    return setProducts(products)
  }
  useEffect(() => {
    getProducts()
  }, [])
  const selectedProducts: any = {}
  products.forEach((item: IProduct) =>
    compare.forEach((product: any) => {
      if (item.id == product.id) {
        selectedProducts[product.id] = item
      }
    })
  )
  return (
    <div className={styles.Compare}>
      <div className={styles.Compare__container}>
        <div className={styles.Compare__container__content}>
          <div className={styles.Compare__container__content__title}>
            <h3>Сравнить товары</h3>
          </div>
          <div className={styles.Compare__container__content__products}>
            {compare.map((item: IProduct) => (
              <div
                className={styles.Compare__container__content__products__item}
              >
                <ProductCard
                  id={item.id}
                  description={item.description}
                  priceWithDiscount={
                    selectedProducts[item.id]?.priceWithDiscount
                  }
                  product={item}
                  productPath={selectedProducts[item.id]?.productPath}
                  price={selectedProducts[item.id]?.price}
                  title={item.title}
                  favorite={favorite.some(
                    (product: any) => item.id == product.id
                  )}
                  compare={compare.some(
                    (product: any) => item.id == product.id
                  )}
                  basket={basket.some((product: any) => item.id == product.id)}
                />
                {Object.keys(selectedProducts).length != 0 ? (
                  <>
                    <CompareColumn
                      name={"Размер"}
                      value={selectedProducts[item.id].size || "Нет"}
                    />
                    <CompareColumn
                      name={"Цена"}
                      value={`${selectedProducts[item.id].price}тг`}
                    />
                    <CompareColumn
                      name={"Производитель"}
                      value={
                        `${selectedProducts[item.id].manufacturer}` || "Нет"
                      }
                    />
                    <CompareColumn
                      name={"Со скидкой"}
                      value={`${selectedProducts[item.id].priceWithDiscount}тг`}
                    />
                    <CompareColumn
                      name={"Трансформация"}
                      value={
                        `${
                          selectedProducts[item.id].transformationMechanism
                        }` || "Нет"
                      }
                    />
                    <CompareColumn
                      name={"Дизайн"}
                      value={selectedProducts[item.id].design || "Нет"}
                    />
                    <CompareColumn
                      name={"Материал рамы"}
                      value={selectedProducts[item.id].frameMaterial || "Нет"}
                    />
                    <CompareColumn
                      name={"Наполнитель"}
                      value={selectedProducts[item.id].filler || "Нет"}
                    />
                    <CompareColumn
                      name={"Форма"}
                      value={selectedProducts[item.id].shape || "Нет"}
                    />
                    <CompareColumn
                      name={"Цвет ножек"}
                      value={selectedProducts[item.id].legColor || "Нет"}
                    />
                    <CompareColumn
                      name={"Материал ножек"}
                      value={selectedProducts[item.id].legMaterial || "Нет"}
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compare
