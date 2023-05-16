import React from "react"
import Profile from "@/app/components/screens/profile/Profile"
import { NextPageAuth } from "@/app/providers/private.route.interface"

const ProfilePage: NextPageAuth = () => {
  return <Profile />
}

ProfilePage.isOnlyUser = true
// ProfilePage.isOnlyAdmin = true

export default ProfilePage
