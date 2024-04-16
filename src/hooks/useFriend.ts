import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'
import { useEffect, useState } from 'react'
import { FriendResponse } from '@/interface/friend_response'

const useFriend = () => {
  const [friend, setFriend] = useState<FriendResponse>()

  useEffect(() => {
    async function getFriend() {
      const token = await getAccessToken()

      const res = await RequestWithToken(token as string)
        .get('/friendlists/friend')
        .then(res => res.data)

      setFriend(res as FriendResponse)
    }

    getFriend()
  }, [])

  return { friend }
}

export default useFriend
