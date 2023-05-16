import React from "react"
import styles from "../catalogPage.module.scss"
import Link from "next/link"
import { useAppDispatch } from "@/app/hook/hook"
import { updateCategory } from "@/app/store/filter/filters.slice"

const CatalogColumn = ({ category }: any) => {
  const { name, parentId, children } = category
  const dispatch = useAppDispatch()
  return (
    <div className={styles.CatalogPage__container__content__column}>
      <div className={styles.CatalogPage__container__content__column__title}>
        <p>{name}</p>
      </div>
      <div className={styles.CatalogPage__container__content__column__items}>
        {children.length != 0
          ? children?.map((item: any) => (
              <div
                className={
                  styles.CatalogPage__container__content__column__items__item
                }
              >
                <Link
                  href={"/products"}
                  //@ts-ignore
                  onClick={() => dispatch(updateCategory([item.id, item.name]))}
                >
                  {item.name}
                </Link>
              </div>
            ))
          : ""}
        {/* <div
          className={
            styles.CatalogPage__container__content__column__items__item
          }
        >
          <a>Диван</a>
        </div>
        <div
          className={
            styles.CatalogPage__container__content__column__items__item
          }
        >
          <a>Диван</a>
        </div> */}
      </div>
    </div>
  )
}

export default CatalogColumn
