import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  color?: string
  width?: number
  height?: number
}

const LanguageIcon: React.FC<Props> = props => {
  const { color, width, height } = props

  return (
    <Svg
      width={width || 10}
      height={height || 10}
      viewBox="0 0 10 10"
      fill="none">
      <Path
        d="M.865 4.907a4.042 4.042 0 108.083 0 4.042 4.042 0 00-8.083 0z"
        stroke={color || '#fff'}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.31.885S6.524 2.48 6.524 4.907c0 2.425-1.212 4.021-1.212 4.021M4.502 8.928S3.29 7.332 3.29 4.906C3.29 2.482 4.502.886 4.502.886M1.12 6.321h7.574M1.12 3.492h7.574"
        stroke={color || '#fff'}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LanguageIcon
