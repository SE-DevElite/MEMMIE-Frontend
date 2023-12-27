import React from 'react'
import styled from 'styled-components/native'

interface AvatarProps {
  image: NodeRequire
}

const Avatar: React.FC<AvatarProps> = props => {
  const { image } = props

  return <ImageCustom source={image} />
}

export default Avatar

const ImageCustom = styled.Image`
  width: 200px;
  height: 200px;

  z-index: 2;

  /* border: 1px solid black; */
`
