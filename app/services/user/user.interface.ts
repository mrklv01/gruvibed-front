export interface IUser {
  id: number
  createdAt: Date
  updatedAt: Date
  email: string
  login: string
  password: string
  avatarPath: string
  phone: string
  name: string
  isAdmin: boolean
}
