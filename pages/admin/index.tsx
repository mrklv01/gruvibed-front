import Admin from "@/app/components/screens/admin/Admin"
import { NextPageAuth } from "@/app/providers/private.route.interface"

const AdminPage: NextPageAuth = () => {
    return (
        <Admin />
    )
}

AdminPage.isOnlyAdmin = true

export default AdminPage
