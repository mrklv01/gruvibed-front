import dynamic from "next/dynamic"
import React from "react"

const Favorite = dynamic(
  () =>
    import("@/app/components/screens/profile/profileFavorite/profileFavorite"),
  {
    ssr: false,
  }
)
const ProfileFavorite = () => {
  return <Favorite />
}

export default ProfileFavorite
