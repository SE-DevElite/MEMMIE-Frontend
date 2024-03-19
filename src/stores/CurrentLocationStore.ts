import { Memory, MemoryResponse } from '@/interface/memory_response'
import { Album, ProfileResponse } from '@/interface/profile_response'
import { action, makeAutoObservable } from 'mobx'

class CurrentLocationStore {
  current_location: string = ''

  constructor() {
    makeAutoObservable(this)
  }
}

const currentLocationStore = new CurrentLocationStore()

export default currentLocationStore
