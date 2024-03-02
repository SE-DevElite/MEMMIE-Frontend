import { Memory, MemoryList } from '@/interface/daily_response'
import { action, configure, makeAutoObservable } from 'mobx'

configure({
  enforceActions: 'never'
})

interface DateTime {
  day_date: string
  month_date: string
  year_date: string
  hour_date: string
  minute_date: string
}

class ReadMemoryStore {
  all_memories: Memory[] = []
  current_memory: number = 0

  caption: string = ''
  created_at: string = ''
  day: string = ''
  location_name: string = ''
  lat: string = ''
  long: string = ''
  memory_id: string = ''
  memory_lists: MemoryList[] = [
    {
      memory_list_id: '',
      memory_url: ''
    }
  ]
  mood: string = ''
  selected_datetime: string = ''
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
    this.location_name = ''
    this.lat = ''
    this.long = ''
    this.memory_id = ''
    this.memory_lists = [
      {
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

  @action
  updateMemoryDetails(details: Partial<ReadMemoryStore>) {
    Object.assign(this, details)
  }

  @action
  updateMemoryList(index: number, itemDetails: Partial<MemoryList>) {
    const updatedItem = { ...this.memory_lists[index], ...itemDetails }
    this.memory_lists[index] = updatedItem
  }

  @action
  initMemory(idx: number) {
    this.current_memory = idx
    const [datePart, timePart] =
      this.all_memories[idx].selected_datetime.split(' ')
    const [year, month, day] = datePart.split('-').map(Number)
    const [hour, minute] = timePart.split(':').map(Number)

    this.datetime[0].year_date = year.toString()
    this.datetime[0].month_date = month.toString()
    this.datetime[0].day_date = day.toString()
    this.datetime[0].hour_date = hour.toString()
    this.datetime[0].minute_date = minute.toString()

    this.caption = this.all_memories[idx].caption
    this.created_at = this.all_memories[idx].created_at
    this.day = this.all_memories[idx].day
    this.location_name = this.all_memories[idx].location_name
    this.lat = this.all_memories[idx].lat
    this.long = this.all_memories[idx].long
    this.memory_id = this.all_memories[idx].memory_id
    this.memory_lists = this.all_memories[idx].memory_lists
    this.mood = this.all_memories[idx].mood
    this.selected_datetime = this.all_memories[idx].selected_datetime
    this.short_caption = this.all_memories[idx].short_caption
    this.updated_at = this.all_memories[idx].updated_at
    this.weather = this.all_memories[idx].weather
  }
}
const readMemoryStore = new ReadMemoryStore()

export default readMemoryStore
