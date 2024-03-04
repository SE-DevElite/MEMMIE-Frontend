import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'
import { Album, AlbumResponse, Memory } from '@/interface/album_response'
import { action, configure, makeAutoObservable } from 'mobx'

configure({
  enforceActions: 'never'
})

class ReadAlbumStore {
  constructor() {
    makeAutoObservable(this)
  }

  pickedAlbum: Album | null = null
  updatedAlbum: Album | null = null

  @action
  toggleSelectedMemory = (memory_id: string) => {
    const memory = this.updatedAlbum?.memories.find(
      memory => memory.memory_id === memory_id
    )

    if (memory && this.updatedAlbum) {
      this.updatedAlbum.memories = this.updatedAlbum?.memories.filter(
        memory => memory.memory_id !== memory_id
      )
    } else {
      // this.updatedAlbum?.memories.push(memory as Memory)
    }
  }

  @action
  fetchAlbum = async (album_id: string) => {
    const token = await getAccessToken()
    const res: AlbumResponse = await RequestWithToken(token as string)
      .get(`/albums/${album_id}`)
      .then(res => {
        return res.data
      })

    this.pickedAlbum = res.album
    this.updatedAlbum = res.album

    return res
  }

  @action
  async updateAlbum() {
    console.log(this.updatedAlbum)
  }
}

const readAlbumStore = new ReadAlbumStore()

export default readAlbumStore
