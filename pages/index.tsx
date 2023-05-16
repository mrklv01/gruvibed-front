import Head from "next/head"
import dynamic from "next/dynamic"
import { GetStaticProps } from "next"
import axios from "axios"
import apiAxios from "@/app/api/api.interceptor"

const HomePage = dynamic(() => import("../app/components/screens/home/Home"), {
  ssr: false,
})

export default function Home({ products }: any) {
  return <HomePage products={products} />
}
//@ts-ignore
export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: products } = await apiAxios.get("product/all")

    return { props: { products } }
  } catch (e) {
    return { fallback: false }
  }
}
