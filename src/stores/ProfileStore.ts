import { Memory, MemoryResponse } from '@/interface/memory_response'
import { Album, ProfileResponse } from '@/interface/profile_response'
import { action, makeAutoObservable } from 'mobx'

class ProfileStore {
  name: string = ''
  username: string = ''
  bio: string = ''
  gender: string = ''
  avatar: string = ''
  albums: Album[] = []
  memories: Memory[] = []
  memory_mapStory: Memory[] = []
  currentScreen: string = 'HomeScreen'
  streak: number = 0
  constructor() {
    makeAutoObservable(this)
  }

  curr_album: string | null = null
  curr_album_location: string = ''
  curr_album_create_at: Date = new Date()
  curr_first_mood: string = ''
  curr_first_weather: string = ''

  @action
  public profileInit = (data: ProfileResponse) => {
    this.name = data.user.name
    this.username = data.user.username
    this.bio = data.user.bio
    this.gender = data.user.gender
    this.avatar = data.user.avatar
    this.albums = data.user.albums

    if (this.albums.length > 0) {
      this.curr_album = this.albums[0].album_thumbnail
      this.curr_album_location = this.albums[0].album_location_name
      this.curr_album_create_at = new Date(this.albums[0].created_at)
      this.curr_first_mood = this.albums[0].first_mood
      this.curr_first_weather = this.albums[0].first_weather
    }

    this.streak = data.streak
  }

  @action
  public currAlbumInit = (data: string) => {
    this.albums.forEach(album => {
      if (album.album_id === data) {
        this.curr_album = album.album_thumbnail
        this.curr_album_location = album.album_location_name
        this.curr_album_create_at = new Date(album.created_at)
        this.curr_first_mood = album.first_mood
        this.curr_first_weather = album.first_weather
      }
    })
  }

  @action
  public memoryInit = (data: MemoryResponse) => {
    this.memories = data.memory
    this.memory_mapStory = data.memory
  }

  @action
  public initMapStory = () => {
    return this.memory_mapStory.map(item => {
      return {
        id: item.memory_id,
        image_url: item.memory_lists[0].memory_url,
        coordinate: {
          latitude: parseFloat(item.lat),
          longitude: parseFloat(item.long)
        }
      }
    })
  }
}

const profileStore = new ProfileStore()

export default profileStore
