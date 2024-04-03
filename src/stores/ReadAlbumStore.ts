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

    if (!memory) {
      const point_mem = this.pickedAlbum?.memories.find(
        memory => memory.memory_id === memory_id
      )
      this.updatedAlbum?.memories.push(point_mem as Memory)

      return
    }

    if (this.updatedAlbum?.memories) {
      this.updatedAlbum.memories = this.updatedAlbum.memories.filter(
        memory => memory.memory_id !== memory_id
      )
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
    // album_name tag memory

    const token = await getAccessToken()

    const body = {
      album_name: this.updatedAlbum?.album_name,
      tags: this.updatedAlbum?.tag_name,
      memories: this.updatedAlbum?.memories.map(memory => memory.memory_id)
    }

    const res = await RequestWithToken(token as string)
      .patch(`/albums/update/${this.updatedAlbum?.album_id}`, body)
      .then(res => res.data)
  }
}

const readAlbumStore = new ReadAlbumStore()

export default readAlbumStore
