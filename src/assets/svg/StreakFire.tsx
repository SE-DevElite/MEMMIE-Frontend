import * as React from 'react'
import Svg, { Image, Path } from 'react-native-svg'

interface Props {
  width?: number
  height?: number
  color?: string
}

const StreakFireIcon: React.FC<Props> = props => {
  const { width, height, color } = props

  return (
    <Svg
      width={width || 22}
      height={height || 31}
      viewBox="0 0 22 31"
      fill="none">
      <Path
        d="M19.393 11.766a.189.189 0 00-.235-.063.204.204 0 00-.13.22c.016.174.026.35.027.526a2.76 2.76 0 01-.789 1.956 2.579 2.579 0 01-1.88.78c-.967-.013-1.77-.525-2.32-1.481-.456-.79-.256-1.81-.044-2.89.124-.632.252-1.286.252-1.908 0-4.843-3.21-7.637-5.122-8.872A.202.202 0 009.04 0a.214.214 0 00-.118.038.196.196 0 00-.086.207c.731 3.939-1.45 6.308-3.759 8.816C2.698 11.647 0 14.578 0 19.863 0 26.003 4.925 31 10.979 31c4.984 0 9.378-3.525 10.686-8.573.892-3.442-.043-7.825-2.272-10.661zm-8.14 16.857a5.42 5.42 0 01-4.06-1.55 5.668 5.668 0 01-1.713-4.046c0-2.842 1.071-4.928 3.952-7.698a.194.194 0 01.232-.037.2.2 0 01.116.207c-.103 1.216-.101 2.226.005 3 .272 1.98 1.7 3.309 3.554 3.309.908 0 1.774-.347 2.437-.977a.217.217 0 01.196-.057.18.18 0 01.133.112c.274.673.415 1.388.417 2.124.009 2.962-2.355 5.48-5.27 5.613z"
        fill={color || '#A56073'}
      />
    </Svg>
  )
}
export default StreakFireIcon
