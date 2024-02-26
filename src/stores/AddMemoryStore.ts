import { RequestWithToken, UploadRequestWithToken } from '@/api/DefaultRequest'
import { DAY, MONTH } from '@/common/consts/DateTime.consts'
import { MoodElement } from '@/common/consts/MoodElement.consts'
import { WeatherElement } from '@/common/consts/WeatherElement.consts'
import { getAccessToken } from '@/helpers/TokenHandler'
import { ImageInfo } from '@/interface/memory_request'
import { action, makeAutoObservable } from 'mobx'
import { configure } from 'mobx'

configure({
  enforceActions: 'never'
})
const currentTime: Date = new Date()
currentTime.setHours(currentTime.getHours())

class AddMemoryStore {
  select_month: string = MONTH[currentTime.getMonth()]
  select_year: string = currentTime.getFullYear().toString()
  weather: number = 0
  mood: number = 0
  short_caption: string = ''
  caption: string = ''
  privacy: string = 'public'
  hours: number = currentTime.getHours()
  minutes: number = currentTime.getMinutes()

  image_info: ImageInfo[] = []

  date_time: Date = currentTime

  constructor() {
    makeAutoObservable(this)
  }
  @action
  clearState = () => {
    this.select_month = MONTH[currentTime.getMonth()]
    this.select_year = currentTime.getFullYear().toString()
    this.weather = 0
    this.mood = 0
    this.short_caption = ''
    this.caption = ''
    this.privacy = 'public'
    this.hours = currentTime.getHours()
    this.minutes = currentTime.getMinutes()

    this.image_info = []
    this.date_time = currentTime
  }

  @action

  handleEditDateTime = (date: Date, type_case: string) => {
    console.log('DATE STORE BEFORE CHNAGE: ', this.date_time)
    console.log('Date send: ', date)

    switch (type_case) {
      case 'date':
        this.date_time = date
        console.log('DATE STORE AFTER CHNAGE: ', this.date_time)
        return
      case 'time':
        this.hours = parseInt(date.toISOString().split('T')[1].split(':')[0])
        this.minutes = parseInt(date.toISOString().split('T')[1].split(':')[1])
        return
    }
  }

  @action
  handleUpDownMonth = (type_case: number) => {
    const currentMonthIndex = MONTH.findIndex(
      month => month === this.select_month
    ) as number

    switch (currentMonthIndex) {
      case 0:
        if (type_case === -1) {
          this.select_month = MONTH[11]
          this.select_year = (parseInt(this.select_year) - 1).toString()
        } else {
          this.select_month = MONTH[currentMonthIndex + type_case]
        }
        return
      case 11:
        if (type_case === 1) {
          this.select_month = MONTH[0]
          this.select_year = (parseInt(this.select_year) + 1).toString()
        } else {
          this.select_month = MONTH[currentMonthIndex + type_case]
        }
        return
      default:
        this.select_month = MONTH[currentMonthIndex + type_case]
    }

    console.log(this.select_month, this.select_year)
  }

  @action
  submitMemory = async () => {
    if (this.image_info.length === 0) return
    if (this.caption === '' || this.short_caption === '') return
    const access_token = await getAccessToken()

    const formData = new FormData()
    for (const img of this.image_info) {
      formData.append('files', {
        uri: img.uri,
        type: img.uri.split('.').pop() === 'png' ? 'image/png' : 'image/jpeg',
        name: img.id
      } as any)
    }

    let current_time = addMemoryStore.date_time

    const select_time = `${
      current_time.toISOString().split('T')[0]
    } ${addMemoryStore.hours
      .toString()
      .padStart(2, '0')}:${addMemoryStore.minutes.toString().padStart(2, '0')}`

    const body = {
      short_caption: addMemoryStore.short_caption,
      caption: addMemoryStore.caption,
      friend_list_id: '',
      mood: MoodElement['Male'][addMemoryStore.mood].label.toLocaleLowerCase(),
      weather: WeatherElement[addMemoryStore.weather].label.toLocaleLowerCase(),
      day: DAY[addMemoryStore.date_time.getDay()].toLocaleLowerCase(),
      location_name: "King's monkut university technology of thonburi.",
      selected_datetime: select_time,
      mention: []
    }

    const post_res = await RequestWithToken(access_token as string)
      .post('/memories/create', body)
      .then(res => res.data)

    const memory_id = post_res.memory.memory_id

    const upload_res = await UploadRequestWithToken(access_token as string)
      .post(`/memories/upload/${memory_id}`, formData)
      .then(res => res.data)
    this.clearState()
    return upload_res
  }
}

const addMemoryStore = new AddMemoryStore()

export default addMemoryStore
