import { configure } from 'mobx'
import { action, makeAutoObservable } from 'mobx'

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

class AddAlbumStore {
  album_name: string = ''
  memories: string[] = []
  tags: string[] = []

  constructor() {
    makeAutoObservable(this)
  }

  @action
  handleSubmitAlbum = () => {
    console.log('submit album')
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
