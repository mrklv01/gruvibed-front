import {
  useDeleteProductMutation,
  useGetAllProdutsQuery,
} from "@/app/store/admin/admin.api"
import styles from "../Admin.module.scss"
import { useState } from "react"
import CreateProduct from "@/app/components/ui/create-product/CreateProduct"
import UpdateProducts from "@/app/components/ui/create-product/UpdateProducts"
import ProductCard from "@/app/components/ui/card-item/productCard"
import { IProduct } from "@/app/services/product/product.interface"
import Link from "next/link"

const AdminProducts = () => {
  const result = useGetAllProdutsQuery("")
  const { data, isLoading } = useGetAllProdutsQuery("")
  console.log("products", data)

  const [deleteProduct] = useDeleteProductMutation()

  const removeProduct = (id: number) => {
    deleteProduct(id)
    result.refetch()
  }

  const [isShowCreate, setIsShowCreate] = useState(false)
  const [isShowUpdate, setIsShowUpdate] = useState(false)
  const [index, setIndex] = useState(0)
  return (
    <div className={styles.admin__users}>
      <div className={styles.admin__container}>
        <div className={styles.admin__users__content}>
          <div className={styles.admin__users__content__block}>
            <h3 className={styles.admin__users__content__title}>
              Админ панель - Товары
            </h3>
            <p className={styles.admin__users__content__count}>
              Количество товаров - {isLoading ? 0 : data.length}
            </p>
          </div>
          <Link className={styles.admin__users__content__back} href='/admin'>
            Вернуться к выбору
          </Link>
          <button
            onClick={() => setIsShowCreate(true)}
            className={styles.admin__users__create}
          >
            Создать продукт
          </button>
          {isShowCreate ? (
            <CreateProduct setIsShowCreate={setIsShowCreate} result={result} />
          ) : (
            ""
          )}

          <div className={styles.admin__users__content__items}>
            {isLoading
              ? []
              : data?.map((item: IProduct, id: any) => (
                  <div className={styles.admin__users__content__items__item}>
                    <ProductCard
                      type={true}
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      description={item.description}
                      priceWithDiscount={item.priceWithDiscount}
                      productPath={item.productPath}
                      product={item}
                    />
                    <div
                      className={
                        styles.admin__users__content__items__item__buttons
                      }
                    >
                      <button
                        onClick={() => {
                          setIsShowUpdate(true)
                          setIndex(item?.id)
                        }}
                        className={
                          styles.admin__users__content__items__item__buttons__update
                        }
                      >
                        Редактировать
                      </button>
                      <button
                        className={
                          styles.admin__users__content__items__item__buttons__remove
                        }
                        onClick={() => removeProduct(item?.id)}
                      >
                        {" "}
                        X
                      </button>
                    </div>
                  </div>
                ))}
            {isShowUpdate ? (
              <UpdateProducts
                setIsShowUpdate={setIsShowUpdate}
                index={index}
                result={result}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProducts
