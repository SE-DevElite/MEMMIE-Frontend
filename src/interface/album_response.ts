export interface AlbumResponse {
  timestamp: string
  version: string
  message: string
  error: boolean
  album: Album
}

export interface Album {
  album_id: string
  tag_name: any
  album_name: string[]
  album_thumbnail: any
  created_at: string
  updated_at: string
  memories: Memory[]
}

export interface Memory {
  memory_id: string
  mood: string
  weather: string
  day: string
  location_name: string
  selected_datetime: string
  lat: any
  long: any
  caption: string
  short_caption: string
  created_at: string
  updated_at: string
  memory_lists: string
  privacy: string
}
