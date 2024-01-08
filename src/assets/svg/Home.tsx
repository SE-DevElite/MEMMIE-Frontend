import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface HomeIconProps {
  color?: string
}

const HomeIcon: React.FC<HomeIconProps> = props => {
  const { color } = props

  return (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none">
      <Path
        d="M13.593 17.19H4.598C2.61 17.19 1 15.518 1 13.453V7.57c0-1.308.657-2.52 1.733-3.197L7.23 1.54a3.482 3.482 0 013.73 0l4.497 2.833c1.076.677 1.733 1.89 1.733 3.197v5.88c0 2.066-1.61 3.74-3.597 3.74z"
        stroke={color || '#A56073'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default HomeIcon
