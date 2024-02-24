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
  lat: number
  long: number
  caption: string
  short_caption: string
  created_at: string
  updated_at: string
  memory_lists: MemoryList[]
}

export interface MemoryList {
  memory_list_id: string
  memory_url: string
}
