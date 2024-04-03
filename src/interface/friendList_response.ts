export interface FriendListResponse {
  timestamp: string
  version: string
  message: string
  error: boolean
  friend_list: FriendList[]
}

export interface FriendList {
  friend_list_id: string
  name: string
  friend_id: FriendId[]
  total: number
}

export interface FriendId {
  user_id: string
  avatar: string
}
