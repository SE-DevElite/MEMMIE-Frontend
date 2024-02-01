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

  constructor() {
    makeAutoObservable(this)
  }

  @action
  public profileInit = (data: ProfileResponse) => {
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
  }
}

const profileStore = new ProfileStore()

export default profileStore
