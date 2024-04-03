import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  color?: string
  width?: number
  height?: number
}

const FollowFriendIcon: React.FC<Props> = props => {
  const { color, width, height } = props

  return (
    <Svg
      width={width || 23}
      height={height || 19}
      viewBox="0 0 23 19"
      fill="none">
      <Path
        d="M.935 17.614v-1.052a7.364 7.364 0 0114.727 0v1.052"
        stroke={color || '#A56073'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.298 9.198a4.208 4.208 0 100-8.415 4.208 4.208 0 000 8.415zM15.662 9.107h3.202m0 0h3.201m-3.201 0V5.905m0 3.202v3.201"
        stroke={color || '#A56073'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default FollowFriendIcon
