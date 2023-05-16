import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"
import { useAction } from "../hook/useAction"
import { useAuth } from "../hook/useAuth"
import { TypeComponentAuthFields } from "./private.route.interface"
import { toast } from "react-toastify"

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  Component: { isOnlyUser, isOnlyAdmin },
  children,
}) => {
  const notify = () => toast("Wow so easy !")
  const { user } = useAuth()
  const router = useRouter()
  const Children = () => <>{children}</>

  let isUsed = false
  if (user && isOnlyUser && isUsed == false) {
    isUsed = true
    return <Children />
  } else if (user && isOnlyUser == false && isUsed == false) {
    router.replace("/")
  } else if (user?.isAdmin) return <Children />
  else {
    router.pathname !== "/" && router.replace("/")
    return <Children />
  }

  return null
}

export default CheckRole
