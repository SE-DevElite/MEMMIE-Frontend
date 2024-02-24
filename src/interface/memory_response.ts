export interface MemoryResponse {
  timestamp: string
  version: string
  message: string
  error: boolean
  memory: Memory[]
}

export interface Memory {
  memory_id: string
  mood: string
  weather: string
  day: string
  location_name: string
  selected_datetime: string
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
