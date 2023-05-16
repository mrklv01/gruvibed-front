export interface IAuthTokens {
  accessToken: string
  refreshToken: string
}

export interface AuthInterface {
  user: {
    id: number
    email: string
    login: string
  } | null
  accessToken: string
}

