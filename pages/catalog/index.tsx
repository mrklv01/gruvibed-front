import React from "react"
import Catalog from "@/app/components/screens/catalog/catalogPage"
import { NextPageAuth } from "@/app/providers/private.route.interface"

const CatalogPage: NextPageAuth = () => {
  return <Catalog />
}

CatalogPage.isOnlyUser = true

export default CatalogPage
