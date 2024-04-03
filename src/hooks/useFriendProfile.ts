import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'
import { MemoryResponse } from '@/interface/memory_response'
import { ProfileResponse } from '@/interface/profile_response'
import axios from 'axios'
import { useEffect, useState } from 'react'

const useFriendProfile = (id: string) => {
  const [profile, setProfile] = useState<ProfileResponse>()
  const [memories, setMemories] = useState<MemoryResponse>()
  const [isFollow, setIsFollow] = useState<boolean>(false)

  useEffect(() => {
    async function getFriendProfile(id: string) {
      const token = await getAccessToken()

      const [profileRes, memoriesRes, isFollow] = await axios.all([
        RequestWithToken(token as string)
          .get(`/users?id=${id}`)
          .then(res => res.data),
        RequestWithToken(token as string)
          .get(`/memories/${id}`)
          .then(res => res.data),
        RequestWithToken(token as string)
          .get(`/follows/isFollow/${id}`)
          .then(res => res.data)
      ])

      setProfile(profileRes as ProfileResponse)
      setMemories(memoriesRes as MemoryResponse)
      setIsFollow(isFollow)
    }

    getFriendProfile(id)
  }, [])

  return { profile, memories, isFollow }
}

export default useFriendProfile
