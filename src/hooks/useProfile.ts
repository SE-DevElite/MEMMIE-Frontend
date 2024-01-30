import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'
import { Memory, MemoryResponse } from '@/interface/memory_response'
import { ProfileResponse } from '@/interface/profile_response'
import profileStore from '@/stores/ProfileStore'
import axios from 'axios'
import { useEffect } from 'react'

const useProfile = () => {
  useEffect(() => {
    async function getProfile() {
      const token = await getAccessToken()

      const [profileRes, memoriesRes] = await axios.all([
        RequestWithToken(token as string)
          .get('/users/profile')
          .then(res => res.data),
        RequestWithToken(token as string)
          .get('/memories/user')
          .then(res => res.data)
      ])

      profileStore.profileInit(profileRes as ProfileResponse)
      profileStore.memoryInit(memoriesRes as MemoryResponse)
    }

    getProfile()
  }, [])
}

export default useProfile
