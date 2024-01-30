import * as React from 'react'
import Svg, { Image } from 'react-native-svg'

interface WomanFunnyIconProps {
  width?: number
  height?: number
}

const WomanFunnyIcon: React.FC<WomanFunnyIconProps> = props => {
  const { width, height } = props
  return (
    <Svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   xmlnsXlink="http://www.w3.org/1999/xlink"
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

export default WomanFunnyIcon
