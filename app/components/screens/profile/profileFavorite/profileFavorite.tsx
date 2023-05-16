import React from "react"
import ProfileLinks from "../profileLinks/profileLinks"
import styles from "../Profile.module.scss"
import ProductCard from "@/app/components/ui/card-item/productCard"
import { useAppSelector } from "@/app/hook/hook"
const ProfileFavorite = () => {
  const { compare } = useAppSelector((state) => state.compare)
  const { favorite } = useAppSelector((state) => state.favorites)
  const { basket } = useAppSelector((state) => state.basket)
  return (
    <div className={styles.ProfilePage}>
      <div className={styles.ProfilePage__container}>
        <div className={styles.ProfilePage__container__content}>
          <div className={styles.ProfilePage__container__content__title}>
            <p>Любимые товары</p>
          </div>
          <ProfileLinks />
          <div className={styles.ProfilePage__container__content__favorites}>
            {favorite.map((item: any) => (
              <ProductCard
                id={item.id}
                description={item.description}
                discount={item.discount}
                price={item.price}
                priceWithDiscount={item.priceWithDiscount}
                title={item.title}
                product={item}
                productPath={item.productPath}
                favorite={favorite.some(
                  (product: any) => item.id == product.id
                )}
                compare={compare.some((product: any) => item.id == product.id)}
                basket={basket.some((product: any) => item.id == product.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileFavorite
