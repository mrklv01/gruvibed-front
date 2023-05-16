import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { rootAction } from "@/app/store/root-action"

export const useAction = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
