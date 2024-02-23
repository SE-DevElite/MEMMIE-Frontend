import axios from 'axios'

export const DEFAULT_URL =
  'https://518d-2405-9800-b641-9f9d-5c11-2f33-1bcf-99da.ngrok-free.app' + '/api'

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
