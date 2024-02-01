export interface ProfileResponse {
  timestamp: string
  version: string
  message: string
  error: boolean
  user: User
}

export interface User {
  user_id: string
  email: string
  name: string
  username: string
  bio: any
  gender: string
  avatar: string
  provider: string
  created_at: string
  updated_at: string
  albums: Album[]
}

export interface Album {
  album_id: string
  album_name: string
  album_thumbnail: string
  created_at: string
  updated_at: string
  tags: Tag[]
  memories: number
}

export interface Tag {
  tag_id: string
  tag_name: string
  created_at: string
  updated_at: string
}
