import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'
import { configure } from 'mobx'
import { action, makeAutoObservable } from 'mobx'
import uuid from 'react-native-uuid'

configure({
  enforceActions: 'never'
})

/*

{
  "album_name":"nutthanon with tag",
  "memories":[
      "a93d13b2-850d-4b44-b2e0-e11659995638",
      "38ca3471-3564-4c46-bd67-07e0f9a7544b"
  ],
  "tags": [
      "05013a19-5e26-4c7c-8a3d-434b553d17fe"
  ]
}

*/

interface Tags {
  id: string
  name: string
  state: boolean
}

class AddAlbumStore {
  album_name: string = ''
  memories: string[] = []
  tags: Tags[] = []

  constructor() {
    makeAutoObservable(this)
  }

  @action
  clear_store = () => {
    this.album_name = ''
    this.memories = []
    this.tags = []
  }

  @action
  handleSubmitAlbum = async () => {
    const token = await getAccessToken()

    const body = {
      album_name: this.album_name,
      memories: this.memories,
      tags: this.tags.map(tag => tag.name)
    }

    const res = await RequestWithToken(token as string)
      .post('/albums/create', body)
      .then(res => {
        console.log(res.data)
        this.clear_store()
      })
      .catch(err => {
        console.log(err)
      })

    return res
  }

  @action
  handleChangeMemories = (memories: string) => {
    const exist = this.memories.includes(memories)
    if (exist) {
      this.memories = this.memories.filter(mem => mem !== memories)
    } else {
      this.memories.push(memories)
    }
  }
}

const addAlbumStore = new AddAlbumStore()

export default addAlbumStore
