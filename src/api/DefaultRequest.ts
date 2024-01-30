import axios from 'axios'

export const DEFAULT_URL =
  'https://003e-2001-fb1-20-7bf4-782b-b053-51fc-8ceb.ngrok-free.app/api'

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
