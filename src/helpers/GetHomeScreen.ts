import axios from 'axios'
import { getAccessToken } from './TokenHandler'
import { RequestWithToken } from '@/api/DefaultRequest'
import profileStore from '@/stores/ProfileStore'
import { ProfileResponse } from '@/interface/profile_response'
import { MemoryResponse } from '@/interface/memory_response'

export async function getProfile() {
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
