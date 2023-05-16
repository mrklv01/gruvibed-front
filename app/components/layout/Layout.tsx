import React from "react"
import { ILayout } from "@/app/components/layout/layout.interface"
import Footer from "@/app/components/layout/footer/Footer"
import styles from './Layout.module.scss'
import dynamic from "next/dynamic"

const Header = dynamic(() => import("@/app/components/layout/header/Header"), {
  ssr: false,
})


const Layout = ({ children }: ILayout): JSX.Element => {

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
