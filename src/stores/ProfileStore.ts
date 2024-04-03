import { Memory, MemoryResponse } from '@/interface/memory_response'
import { Album, ProfileResponse } from '@/interface/profile_response'
import { action, makeAutoObservable } from 'mobx'

class ProfileStore {
  user_id: string = ''
  name: string = ''
  username: string = ''
  bio: string = ''
  gender: string = ''
  avatar: string = ''
  albums: Album[] = []
  memories: Memory[] = []
  memory_mapStory: Memory[] = []
  currentScreen: string = 'HomeScreen'

  constructor() {
    makeAutoObservable(this)
  }

  @action
  public profileInit = (data: ProfileResponse) => {
    this.user_id = data.user.user_id
    this.name = data.user.name
    this.username = data.user.username
    this.bio = data.user.bio
    this.gender = data.user.gender
    this.avatar = data.user.avatar
    this.albums = data.user.albums
  }

  @action
  public memoryInit = (data: MemoryResponse) => {
    this.memories = data.memory
    this.memory_mapStory = data.memory
  }

  @action
  public initMapStory = () => {
    console.log('this.memory_mapStory', this.memory_mapStory)

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
