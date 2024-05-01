import { FriendList } from './friendList_response'

export interface DailyResponse {
  timestamp: string
  version: string
  message: string
  error: boolean
  calendar: ICalendar[][]
}

export interface ICalendar {
  date: number
  day: string
  memories: Memory[]
}

export interface Memory {
  memory_id: string
  mood: string
  weather: string
  day: string
  selected_datetime: string
  location_name: string
  lat: string
  long: string
  caption: string
  short_caption: string
  created_at: string
  updated_at: string
  privacy: string
  memory_lists: MemoryList[]
  friend_list: {
    friend_list_id: string
    name: string
  }
}

export interface MemoryList {
  memory_list_id: string
  memory_url: string
}
