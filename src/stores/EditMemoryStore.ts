import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'
import { Memory, MemoryList } from '@/interface/daily_response'
import { UserResponse } from '@/interface/user_response'
import { action, configure, makeAutoObservable } from 'mobx'

configure({
  enforceActions: 'never'
})

class EditMemoryStore {
  caption: string = ''
  created_at: string = ''
  day: string = ''
  location_name: string = ''
  lat: string = ''
  long: string = ''
  memory_id: string = ''
  memory_lists: MemoryList[] = []
  mood: string = ''
  selected_datetime: string = ''
  short_caption: string = ''
  updated_at: string = ''
  weather: string = ''
  date_time: Date = new Date()
  privacy: string = 'public'
  privacyDto: string = ''
  text_privacy: string = ''
  friend_list_id: string | null = null

  mention: string[] = []

  constructor() {
    makeAutoObservable(this)
  }

  @action
  initMemory(memory: Memory) {
    this.caption = memory.caption
    this.created_at = memory.created_at
    this.day = memory.day
    this.location_name = memory.location_name
    this.lat = memory.lat
    this.long = memory.long
    this.memory_id = memory.memory_id
    this.memory_lists = memory.memory_lists
    this.mood = memory.mood.toLowerCase()
    this.selected_datetime = memory.selected_datetime
    this.short_caption = memory.short_caption
    this.updated_at = memory.updated_at
    this.weather = memory.weather
    this.privacy = memory.privacy
    this.privacyDto = memory.privacy
    this.text_privacy = memory.privacy
  }

  @action
  async getFriendMention(): Promise<UserResponse> {
    const token = await getAccessToken()

    const friend_mention = await RequestWithToken(token as string)
      .get(`/friendlists/mention/${this.memory_id}`)
      .then(res => res.data)

    return friend_mention as UserResponse
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
    this.privacy = 'public'
    this.mention = []
  }

  @action
  updateMemoryDetails(details: Partial<EditMemoryStore>) {
    Object.assign(this, details)
  }

  @action
  updateMemoryList(index: number, itemDetails: Partial<MemoryList>) {
    const updatedItem = { ...this.memory_lists[index], ...itemDetails }
    this.memory_lists[index] = updatedItem
  }

  @action
  async handleSubmitUpdateMemory() {
    const body = {
      caption: this.caption,
      short_caption: this.short_caption,
      friend_list_id: this.friend_list_id,
      mood: this.mood,
      day: this.day,
      lat: parseFloat(this.lat),
      long: parseFloat(this.long),
      location_name: this.location_name,
      selected_datetime: this.selected_datetime,
      weather: this.weather,
      privacy: this.privacy,
      mention: this.mention
    }

    const token = await getAccessToken()
    const res = RequestWithToken(token as string)
      .patch(`/memories/update/${this.memory_id}`, body)
      .catch(err => {
        console.log(err.message)
      })

    // update image info
    const formData = new FormData()
    for (const img of this.memory_lists) {
      formData.append('files', {
        uri: img.memory_url,
        type:
          img.memory_url.split('.').pop() === 'png'
            ? 'image/png'
            : 'image/jpeg',
        name: img.memory_list_id
      } as any)
    }

    const res2 = RequestWithToken(token as string)
      .patch(`/memories/images/update/${this.memory_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    return Promise.all([res, res2])
  }
}
const editMemoryStore = new EditMemoryStore()

export default editMemoryStore
