import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface FilterIconProps {
  color?: string
}

const FilterIcon: React.FC<FilterIconProps> = props => {
  const { color } = props

  return (
    <Svg width={20} height={8} viewBox="0 0 20 8" fill="none">
      <Path
        d="M1 1h18M3.25 4h13.5M6.25 7h7.5"
        stroke={color || '#A56073'}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default FilterIcon
