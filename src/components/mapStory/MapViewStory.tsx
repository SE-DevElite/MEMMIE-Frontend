import uuid from 'react-native-uuid'
import * as Location from 'expo-location'
import { Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import CustomMarker from '@/components/mapStory/CustomMarker'
import { mergeDataByCoordinates } from '@/helpers/MergeDataByCoordinates'
import profileStore from '@/stores/ProfileStore'
import { observer } from 'mobx-react'

const mock_data = profileStore.memories.map(item => {
  return {
    id: item.memory_id,
    image_url: item.memory_lists[0].memory_url,
    coordinate: {
      latitude: parseFloat(item.lat),
      longitude: parseFloat(item.long)
    }
  }
})

const MapViewStory: React.FC = observer(() => {
  const ref = React.useRef<MapView>(null)
  const [data, setData] = useState(mock_data)

  const handleRegionChange = async () => {
    const coords = await ref?.current?.getCamera()
    const zoom = coords?.zoom as number
    if (zoom <= 13) {
      const mergedData = mergeDataByCoordinates(mock_data)
      setData(mergedData)
    } else {
      setData(mock_data)
    }
  }
  const [initialRegion, setInitialRegion] = useState<any>(null)

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      })
    }
    getLocation()
    console.log(mock_data)
  }, [])

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        mapType={Platform.OS == 'android' ? 'none' : 'standard'}
        style={{ width: '100%', height: '100%' }}
        maxZoomLevel={20}
        // initialRegion={{
        //   latitude: 13.736717,
        //   longitude: 100.523186,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421
        // }}
        initialRegion={initialRegion}
        // showsUserLocation={true}
        zoomEnabled={true}
        followsUserLocation={true}
        onRegionChangeComplete={handleRegionChange}
        ref={ref}>
        {data.map(marker => (
          <CustomMarker
            key={marker.id}
            marker={{
              coordinate: marker.coordinate
            }}
            image_url={marker.image_url}
          />
        ))}
      </MapView>
    </>
  )
})

export default MapViewStory
