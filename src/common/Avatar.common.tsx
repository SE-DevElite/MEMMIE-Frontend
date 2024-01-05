import React from 'react'
import styled from 'styled-components/native'

interface AvatarProps {
  image: NodeRequire
  width?: number
  height?: number
  borderRadius?: number
}

const AvatarCommon: React.FC<AvatarProps> = props => {
  const { image, width, height, borderRadius } = props

  return (
    <ImageCustom
      source={image}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  )
}

export default AvatarCommon

const ImageCustom = styled.Image`
  width: ${(props: { width: number }) => props.width || 200}px;
  height: ${(props: { height: number }) => props.height || 200}px;

  z-index: 2;
  border-radius: ${(props: { borderRadius: number }) =>
    props.borderRadius || 0}px;
  /* border: 1px solid black; */
`
