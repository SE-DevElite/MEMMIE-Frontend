import uuid from 'react-native-uuid'
import * as Location from 'expo-location'
import { Platform, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import CustomMarker from '@/components/mapStory/CustomMarker'
import { mergeDataByCoordinates } from '@/helpers/MergeDataByCoordinates'

const mock_data = [
  {
    id: uuid.v4() as string,
    image_url:
      'https://i.pinimg.com/564x/dc/21/1c/dc211c77fe27bc7f24902ebf5dd7175d.jpg',
    coordinate: {
      latitude: 13.736717,
      longitude: 100.523186
    }
  },
  {
    id: uuid.v4() as string,
    image_url:
      'https://i.pinimg.com/564x/19/1f/b9/191fb9d31412056082d19a70edbb7f64.jpg',
    coordinate: {
      latitude: 13.736717,
      longitude: 100.527584
    }
  },
  {
    id: uuid.v4() as string,
    image_url:
      'https://i.pinimg.com/736x/6d/29/4a/6d294abea51b7e398e9ff15b6ad6e067.jpg',
    coordinate: {
      latitude: 13.739817,
      longitude: 100.529186
    }
  }
]

const MapViewStory: React.FC = () => {
  const [location, setLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)

  useEffect(() => {
    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({})
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        })
      } else {
        console.log('Location permission denied')
      }
    }

    requestLocationPermission()
  }, [])

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

  const [currentLocation, setCurrentLocation] = useState<any>(null)
  const [initialRegion, setInitialRegion] = useState<any>(null)

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setCurrentLocation(location.coords)

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      })
    }

    getLocation()
  }, [])

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        mapType={Platform.OS == 'android' ? 'none' : 'standard'}
        style={{ width: '100%', height: '100%' }}
        maxZoomLevel={20}
        initialRegion={{
          latitude: 13.736717,
          longitude: 100.523186,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        // initialRegion={initialRegion}
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
}

export default MapViewStory
