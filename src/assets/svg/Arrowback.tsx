import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const ArrowBack = () => {
  return (
    <Svg width={26} height={16} viewBox="0 0 26 16" fill="none">
      <Path
        d="M25 9a1 1 0 100-2v2zM.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM25 7H1v2h24V7z"
        fill="#A56073"
      />
    </Svg>
  )
}

export default ArrowBack
