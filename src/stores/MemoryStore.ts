import { Memory } from '@/interface/daily_response'
import { MemoryList } from '@/interface/memory_response'
import { makeAutoObservable } from 'mobx'

class MemorySelectionStore {
  // memory_id: string = ''
  // mood: string = ''
  // weather: string = ''
  // day: string = ''
  // location_name: string = ''
  // selected_datetime: string = ''
  // lat: string = ''
  // long: string = ''
  // caption: string = ''
  // short_caption: string = ''
  // memory_lists: MemoryList[] = []
  memoryListInDay: Memory[] = []

  constructor() {
    makeAutoObservable(this)
  }
}

const memorySelectionStore = new MemorySelectionStore()

export default memorySelectionStore
