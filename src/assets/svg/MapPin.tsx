import * as React from 'react'
import Svg, {
  Image,
  Defs,
  ClipPath,
  G,
  Path,
  Circle,
  Pattern,
  Use
} from 'react-native-svg'

interface Props {
  width?: number
  image_url: string
}

const MapPinIcon: React.FC<Props> = props => {
  const { width, image_url } = props

  // this mappin icon require change width only and it will change all size
  return (
    <Svg width={width || 50} height={161} viewBox="0 0 105 161" fill="none">
      <Defs>
        <ClipPath id="clip">
          <Path d="M0 25C0 13.954 8.954 5 20 5h60c11.046 0 20 8.954 20 20v70.996c0 10.632-8.62 19.251-19.252 19.251h-3.041a14.832 14.832 0 00-13.853 9.534c-4.862 12.711-22.846 12.711-27.707 0a14.832 14.832 0 00-13.854-9.534h-3.041C8.619 115.247 0 106.628 0 95.996V25z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip)">
        <Image
          x="0"
          y="0"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          href={image_url}
        />
      </G>
      <Circle cy={120} cx={50} r={8} fill="#fff" />
      {/* <G filter="url(#filter0_i_2721_4900)">
        <Circle cx={93} cy={12} r={12} fill="#A56073" />
      </G> */}
    </Svg>
  )
}

export default MapPinIcon
