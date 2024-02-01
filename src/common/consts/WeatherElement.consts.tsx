import WeatherClearskyIcon from '@/assets/svg/WeatherClearsky'
import WeatherCloudIcon from '@/assets/svg/WeatherCloud'
import WeatherDownpourIcon from '@/assets/svg/WeatherDownpour'
import WeatherSnowflakeIcon from '@/assets/svg/WeatherSnowflake'
import WeatherSunnyIcon from '@/assets/svg/WeatherSunny'

export const WeatherElement = [
  {
    label: 'Clearsky',
    icon: <WeatherClearskyIcon width={30} height={30} />
  },
  {
    label: 'Cloudy',
    icon: <WeatherCloudIcon width={30} height={30} />
  },
  {
    label: 'Downpour',
    icon: <WeatherDownpourIcon width={30} height={30} />
  },
  {
    label: 'ShowFlake',
    icon: <WeatherSnowflakeIcon width={30} height={30} />
  },
  {
    label: 'Sunny',
    icon: <WeatherSunnyIcon width={30} height={30} />
  }
]
