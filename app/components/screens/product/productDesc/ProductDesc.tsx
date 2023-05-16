import React from "react"
import ProductColumn from "./productColumn/productColumn"
import styles from "./ProductDesc.module.scss"

const ProductDesc = ({ product }: any) => {
  return (
    <div className={styles.ProductDesc}>
      <div className={styles.ProductDesc__content}>
        <div className={styles.ProductDesc__content__characteristic}>
          <div className={styles.ProductDesc__content__characteristic__title}>
            <p>Характеристики</p>
          </div>
          <div className={styles.ProductDesc__content__characteristic__table}>
            <ProductColumn name={"Размер"} value={product.size || "Нет"} />
            <ProductColumn name={"Цена"} value={`${product.price}тг`} />
            <ProductColumn
              name={"Со скидкой"}
              value={`${product.priceWithDiscount}тг`}
            />
            <ProductColumn
              name={"Трансформация"}
              value={`${product.transformationMechanism}` || "Нет"}
            />
            <ProductColumn name={"Дизайн"} value={product.design || "Нет"} />
            <ProductColumn
              name={"Материал рамы"}
              value={product.frameMaterial || "Нет"}
            />
            <ProductColumn
              name={"Наполнитель"}
              value={product.filler || "Нет"}
            />
            <ProductColumn name={"Форма"} value={product.shape || "Нет"} />
            <ProductColumn
              name={"Цвет ножек"}
              value={product.legColor || "Нет"}
            />
            <ProductColumn
              name={"Материал ножек"}
              value={product.legMaterial || "Нет"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDesc
