import { ImageInfo } from '@/interface/memory_request'
import { action, configure, makeAutoObservable } from 'mobx'

configure({
  enforceActions: 'never'
})

interface MemoryList {
  created_at: string
  memory_list_id: string
  memory_url: string
}
interface DateTime {
  day_date: string
  month_date: string
  year_date: string
  hour_date: string
  minute_date: string
}

class ReadMemoryStore {
  // month: string = ''
  // year: string = ''
  // weather: number = 0
  // mood: number = 0
  // short_caption: string = ''
  // caption: string = ''
  // privacy: string = 'public'
  // hours: number = new Date().getHours()
  // minutes: number = new Date().getMinutes()

  // image_info: ImageInfo[] = []

  // date_time: Date = new Date()

  caption: string = ''
  created_at: string = ''
  day: string = ''
  lat: string = ''
  location_name: string = ''
  long: string = ''
  memory_id: string = ''
  memory_lists: MemoryList[] = [
    {
      created_at: '',
      memory_list_id: '',
      memory_url: ''
    }
  ]
  mood: string = ''
  selected_datetime: string = ''
  // selected_datetime: string = ''
  short_caption: string = ''
  updated_at: string = ''
  weather: string = ''
  datetime: DateTime[] = [
    {
      day_date: '',
      month_date: '',
      year_date: '',
      hour_date: '',
      minute_date: ''
    }
  ]

  constructor() {
    makeAutoObservable(this)
  }

  @action
  clearState = () => {
    this.caption = ''
    this.created_at = ''
    this.day = ''
    this.lat = ''
    this.location_name = ''
    this.long = ''
    this.memory_id = ''
    this.memory_lists = [
      {
        created_at: '',
        memory_list_id: '',
        memory_url: ''
      }
    ]
    this.mood = ''
    this.selected_datetime = ''
    this.short_caption = ''
    this.updated_at = ''
    this.weather = ''
    this.datetime = [
      {
        day_date: '',
        month_date: '',
        year_date: '',
        hour_date: '',
        minute_date: ''
      }
    ]
  }

  updateMemoryDetails(details: Partial<ReadMemoryStore>) {
    Object.assign(this, details)
  }
  updateMemoryList(index: number, itemDetails: Partial<MemoryList>) {
    const updatedItem = { ...this.memory_lists[index], ...itemDetails }
    this.memory_lists[index] = updatedItem
  }
}
const readMemoryStore = new ReadMemoryStore()

export default readMemoryStore
