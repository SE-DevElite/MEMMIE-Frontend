import * as React from 'react'
import Svg, { Image } from 'react-native-svg'

interface WeatherCloudIconProps {
  width?: number
  height?: number
}

const WeatherCloudIcon: React.FC<WeatherCloudIconProps> = props => {
  const { width, height } = props

  return (
    <Svg
      width={width || 37}
      height={height || 37}
      viewBox="0 0 37 37"
      {...props}>
      <Image
        width={width || 37}
        height={height || 37}
        xlinkHref="data:image/png;base64,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"
      />
    </Svg>
  )
}

export default WeatherCloudIcon
