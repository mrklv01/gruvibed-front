import ProductList from "@/app/components/screens/productsList/productList"
import { NextPageAuth } from "@/app/providers/private.route.interface"
import React from "react"

const ProductsPage: NextPageAuth = () => {
  return <ProductList />
}


export default ProductsPage
