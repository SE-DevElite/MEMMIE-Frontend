import WeatherClearskyIcon from '@/assets/svg/WeatherRGBClearsky'
import WeatherCloudIcon from '@/assets/svg/WeatherRGBCloud'
import WeatherDownpourIcon from '@/assets/svg/WeatherRGBDownpour'
import WeatherSnowflakeIcon from '@/assets/svg/WeatherRGBSnowflake'
import WeatherSunnyIcon from '@/assets/svg/WeatherRGBSunny'

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
