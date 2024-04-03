export interface FeedResponse {
  timestamp: string
  version: string
  message: string
  error: boolean
  memory: MemoryFeedI[]
}

export interface MemoryFeedI {
  memory_id: string
  mood: string
  weather: string
  day: string
  location_name: string
  selected_datetime: string
  lat: string
  long: string
  caption: string
  privacy: string
  short_caption: string
  created_at: string
  updated_at: string
  memory_lists: MemoryListFeed[]
}

export interface MemoryListFeed {
  memory_list_id: string
  memory_url: string
  created_at: string
}
