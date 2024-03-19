import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'
import { Album, AlbumResponse } from '@/interface/album_response'
import { action, configure, makeAutoObservable } from 'mobx'

configure({
  enforceActions: 'never'
})

class ReadAlbumStore {
  constructor() {
    makeAutoObservable(this)
  }

  pickedAlbum: Album | null = null

  @action
  fetchAlbum = async (album_id: string) => {
    const token = await getAccessToken()
    const res: AlbumResponse = await RequestWithToken(token as string)
      .get(`/albums/${album_id}`)
      .then(res => {
        return res.data
      })

    this.pickedAlbum = res.album

    return res
  }
}

const readAlbumStore = new ReadAlbumStore()

export default readAlbumStore
