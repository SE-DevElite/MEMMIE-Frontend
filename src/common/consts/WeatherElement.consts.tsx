import WeatherClearskyIcon from '@/assets/svg/WeatherRGBClearsky'
import WeatherCloudIcon from '@/assets/svg/WeatherRGBCloud'
import WeatherDownpourIcon from '@/assets/svg/WeatherRGBDownpour'
import WeatherSnowflakeIcon from '@/assets/svg/WeatherRGBSnowflake'
import WeatherSunnyIcon from '@/assets/svg/WeatherRGBSunny'
import uuid from 'react-native-uuid'

export const WeatherElement = [
  {
    label: 'Clearsky',
    icon: (
      <WeatherClearskyIcon width={30} height={30} key={uuid.v4() as string} />
    )
  },
  {
    label: 'Cloudy',
    icon: <WeatherCloudIcon width={30} height={30} key={uuid.v4() as string} />
  },
  {
    label: 'Downpour',
    icon: (
      <WeatherDownpourIcon width={30} height={30} key={uuid.v4() as string} />
    )
  },
  {
    label: 'ShowFlake',
    icon: (
      <WeatherSnowflakeIcon width={30} height={30} key={uuid.v4() as string} />
    )
  },
  {
    label: 'Sunny',
    icon: <WeatherSunnyIcon width={30} height={30} key={uuid.v4() as string} />
  }
]
