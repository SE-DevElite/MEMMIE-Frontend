import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface PlusIconProps {
  color?: string
  width?: number
  height?: number
}

const PlusIcon: React.FC<PlusIconProps> = props => {
  const { width, height, color } = props

  return (
    <Svg
      width={width || 19}
      height={height || 19}
      viewBox="0 0 19 19"
      fill="none">
      <Path
        d="M1 9.095h8.095m0 0h8.095m-8.095 0V1m0 8.095v8.095"
        stroke={color || '#A56073'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PlusIcon
