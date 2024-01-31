import axios from 'axios'

export const DEFAULT_URL =
  'https://32fd-2405-9800-b641-9f9d-a53c-6fa3-2f04-b509.ngrok-free.app/api'

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
