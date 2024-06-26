import { RequestWithToken, UploadRequestWithToken } from '@/api/DefaultRequest'
import { DAY, MONTH } from '@/common/consts/DateTime.consts'
import { MoodElement } from '@/common/consts/MoodElement.consts'
import { WeatherElement } from '@/common/consts/WeatherElement.consts'
import { getAccessToken } from '@/helpers/TokenHandler'
import { ImageInfo } from '@/interface/memory_request'
import { action, makeAutoObservable } from 'mobx'
import { configure } from 'mobx'
import { format, parse } from 'date-fns'

configure({
  enforceActions: 'never'
})
const currentTime: Date = new Date()
let check: boolean = false

class AddMemoryStore {
  isAddMemory = false

  date: number = currentTime.getDate()
  month: number = currentTime.getMonth()
  year: number = currentTime.getFullYear()
  select_month: string = MONTH[currentTime.getMonth()]
  select_year: string = currentTime.getFullYear().toString()
  weather: number = 0
  mood: number = 0
  short_caption: string = ''
  caption: string = ''
  privacy: string = 'public'
  privacyDto: string = 'public'
  hours: number = currentTime.getHours()
  minutes: number = currentTime.getMinutes()
  location_name: string = ''
  lat: string = ''
  long: string = ''
  image_info: ImageInfo[] = []
  friend_list_id: string | null = null
  mention: string[] = []

  date_time: Date = currentTime
  constructor() {
    makeAutoObservable(this)
  }
  @action
  clearState = () => {
    this.date = currentTime.getDate()
    this.month = currentTime.getMonth()
    this.year = currentTime.getFullYear()
    this.select_month = MONTH[currentTime.getMonth()]
    this.select_year = currentTime.getFullYear().toString()
    this.weather = 0
    this.mood = 0
    this.short_caption = ''
    this.caption = ''
    this.privacyDto = 'public'
    this.hours = currentTime.getHours()
    this.minutes = currentTime.getMinutes()
    this.location_name = ''
    this.lat = ''
    this.long = ''
    this.image_info = []
    this.date_time = currentTime
    this.friend_list_id = null
    this.mention = []
  }

  @action
  handleEditDateTime = (date: Date, type_case: string) => {
    check = true
    let formattedDateTime = format(new Date(), 'yyyy-MM-dd HH:mm')
    switch (type_case) {
      case 'date':
        this.date = parseInt(date.toISOString().split('T')[0].split('-')[2])
        this.month =
          parseInt(date.toISOString().split('T')[0].split('-')[1]) - 1
        this.year = parseInt(date.toISOString().split('T')[0].split('-')[0])
        this.select_month = MONTH[this.month]
        const update_date = new Date(
          this.year,
          this.month,
          this.date,
          this.hours + 7,
          this.minutes
        )
        formattedDateTime = format(update_date, 'yyyy-MM-dd HH:mm')
        // this.date_time = formattedDateTime
        this.date_time = parse(
          formattedDateTime,
          'yyyy-MM-dd HH:mm',
          new Date()
        )
        // console.log(
        //   'Push Date time : ',
        //   this.hours,
        //   this.minutes,
        //   formattedDateTime,
        //   this.date_time
        // )
        return
      case 'time':
        this.hours = parseInt(date.toISOString().split('T')[1].split(':')[0])
        this.minutes = parseInt(date.toISOString().split('T')[1].split(':')[1])
        const update_time = new Date(
          this.year,
          this.month,
          this.date,
          this.hours + 7,
          this.minutes
        )
        formattedDateTime = format(update_time, 'yyyy-MM-dd HH:mm')
        this.date_time = parse(
          formattedDateTime,
          'yyyy-MM-dd HH:mm',
          new Date()
        )
        // console.log(
        //   'Push Date time : ',
        //   this.hours,
        //   this.minutes,
        //   formattedDateTime,
        //   this.date_time
        // )
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

    check
      ? addMemoryStore.date_time
      : addMemoryStore.date_time.setHours(
          addMemoryStore.date_time.getHours() + 7
        )
    let current_time = addMemoryStore.date_time
    // console.log(current_time)

    const select_time = `${
      current_time.toISOString().split('T')[0]
    } ${addMemoryStore.hours
      .toString()
      .padStart(2, '0')}:${addMemoryStore.minutes.toString().padStart(2, '0')}`

    const body = {
      short_caption: addMemoryStore.short_caption,
      caption: addMemoryStore.caption,
      friend_list_id:
        this.privacyDto === 'general' ? this.friend_list_id : null,
      mood: MoodElement['Male'][addMemoryStore.mood].label.toLocaleLowerCase(),
      weather: WeatherElement[addMemoryStore.weather].label.toLocaleLowerCase(),
      day: DAY[addMemoryStore.date_time.getDay()].toLocaleLowerCase(),
      selected_datetime: select_time,
      location_name: addMemoryStore.location_name,
      lat: addMemoryStore.lat,
      long: addMemoryStore.long,
      mention: this.mention,
      privacy: addMemoryStore.privacyDto
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
