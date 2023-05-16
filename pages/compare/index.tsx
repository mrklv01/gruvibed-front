import dynamic from "next/dynamic"
import React from "react"

const Compare = dynamic(
  () => import("@/app/components/screens/compare/Compare"),
  {
    ssr: false,
  }
)

const ComparePage = () => {
  return <Compare />
}

export default ComparePage
