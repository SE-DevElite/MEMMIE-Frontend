import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'
import { FriendList } from '@/interface/friendList_response'
import { useEffect, useState } from 'react'

const useFriendList = () => {
  const [friendList, setFriendList] = useState<FriendList[]>([])

  useEffect(() => {
    async function getFriendList() {
      const token = await getAccessToken()

      const res = await RequestWithToken(token as string)
        .get('/friendlists/all')
        .then(res => res.data)

      console.log(res)

      setFriendList(res.friend_list as FriendList[])
    }

    getFriendList()
  }, [])

  return { friendList }
}

export default useFriendList
