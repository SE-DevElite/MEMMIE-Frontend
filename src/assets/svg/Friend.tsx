import * as React from 'react'
import Svg, { Image, Path } from 'react-native-svg'

interface FriendIconProps {
  width?: number
  height?: number
}

const FriendIcon: React.FC<FriendIconProps> = props => {
  const { width, height } = props
  return (
    <Svg
      width={width || 15}
      height={height || 15}
      viewBox="0 0 21 23"
      fill="none"
      {...props}>
      <Path
        d="M1.5 22.086V20.8a9 9 0 0118 0v1.286"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 11.8a5.143 5.143 0 100-10.286 5.143 5.143 0 000 10.286z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
export default FriendIcon
