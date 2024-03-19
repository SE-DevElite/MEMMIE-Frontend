import MapPinIcon from '@/assets/svg/MapPin'
import React from 'react'
import { StyleSheet } from 'react-native'
import { MapMarkerProps, Marker } from 'react-native-maps'

interface Props {
  marker: MapMarkerProps
  image_url: string
}

const CustomMarker: React.FC<Props> = props => {
  const { marker, image_url } = props

  return (
    <Marker {...marker}>
      <MapPinIcon width={90} image_url={image_url} />
    </Marker>
  )
}

export default CustomMarker

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 40,
    backgroundColor: 'red'
  }
})
