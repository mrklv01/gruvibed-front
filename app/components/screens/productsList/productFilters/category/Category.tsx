import { toggleManufacture } from "@/app/store/filter/filters.slice"
import { CatalogInterface } from "../Catalog.interface"
import styles from "./Category.module.scss"
import { useAppDispatch } from "@/app/hook/hook"

const Category = ({ _id, name }: CatalogInterface): JSX.Element => {
  const dispatch = useAppDispatch()
  return (
    <>
      <li className={styles.category__item} key={_id}>
        <input
          type='checkbox'
          value={name}
          onChange={() => dispatch(toggleManufacture(_id))}
        />
        <label htmlFor={`category${_id}`}>{name}</label>
      </li>
    </>
  )
}

export default Category
