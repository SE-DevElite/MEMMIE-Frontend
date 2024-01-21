import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: number
  height?: number
  color?: string
}

const SoundIcon: React.FC<Props> = props => {
  const { width, height, color } = props

  return (
    <Svg
      width={width || 11}
      height={height || 8}
      viewBox="0 0 11 8"
      fill="none">
      <Path
        d="M.405 4.945V3.068c0-.26.21-.47.47-.47H2.14a.47.47 0 00.26-.079L4.37 1.208a.47.47 0 01.73.39v4.816a.47.47 0 01-.73.39L2.4 5.494a.47.47 0 00-.26-.079H.874a.47.47 0 01-.47-.47z"
        stroke={color || '#A56073'}
        strokeWidth={0.5}
      />
      <Path
        d="M7.21 1.894s.704.704.704 1.878c0 1.173-.704 1.877-.704 1.877M8.618.486S9.79 1.66 9.79 3.772c0 2.111-1.173 3.285-1.173 3.285"
        stroke={color || '#A56073'}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SoundIcon
