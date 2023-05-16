import React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import apiAxios from "@/app/api/api.interceptor"
import { NextPageAuth } from "@/app/providers/private.route.interface"
import dynamic from "next/dynamic"

const Product = dynamic(
  () => import("@/app/components/screens/product/ProductPage"),
  {
    ssr: false,
  }
)

const ProductPage: NextPageAuth = ({ product }: any) => {
  return <Product product={product} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: products } = await apiAxios.get("product/all")

    const paths = products.map((product: any) => ({
      params: {
        id: String(product.id),
      },
    }))

    return { paths, fallback: "blocking" }
  } catch (e) {
    return {
      paths: [],
      fallback: false,
      props: { products: null },
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: product } = await apiAxios.get(`product/by/${params?.id}`)
    return {
      props: {
        product,
      },
      revalidate: 60,
    }
  } catch (e) {
    return {
      props: {
        user: {},
        error: e,
      },
      fallback: false,
    }
  }
}
export default ProductPage
