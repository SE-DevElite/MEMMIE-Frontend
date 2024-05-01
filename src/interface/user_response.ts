export interface UserResponse {
  timestamp: string
  version: string
  message: string
  error: boolean
  user: User[]
}

export interface User {
  user_id: string
  name: string
  username: string
  avatar: string
}
