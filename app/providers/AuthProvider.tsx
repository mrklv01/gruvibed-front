import dynamic from "next/dynamic"
import { FC, PropsWithChildren } from "react"
import { TypeComponentAuthFields } from "./private.route.interface"

const DynamicCheckRole = dynamic(() => import("./CheckRole"), {
    ssr: false,
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ Component: { isOnlyUser, isOnlyAdmin }, children }) => {

    return !isOnlyUser && !isOnlyAdmin ? (
        <>{children}</>
    ) : (
        <DynamicCheckRole Component={{ isOnlyUser, isOnlyAdmin }} >{children}</DynamicCheckRole>
    )

}


export default AuthProvider