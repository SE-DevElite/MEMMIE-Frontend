import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const SearchIcon = () => {
  return (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none">
      <Path
        d="M13.143 13.143l4.047 4.047M1 7.939a6.939 6.939 0 1013.877 0A6.939 6.939 0 001 7.939z"
        stroke="#A56073"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SearchIcon
