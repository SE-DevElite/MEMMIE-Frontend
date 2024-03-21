import axios from 'axios'

export const DEFAULT_URL =
  'https://e113-2405-9800-b641-9f9d-4003-137b-9849-d27a.ngrok-free.app' + '/api'

export const RequestWithToken = (accessToken: string) => {
  return axios.create({
    baseURL: DEFAULT_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })
}

export const RequestWithoutToken = () => {
  return axios.create({
    baseURL: DEFAULT_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const UploadRequestWithToken = (accessToken: string) => {
  return axios.create({
    baseURL: DEFAULT_URL,
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`
    }
  })
}
