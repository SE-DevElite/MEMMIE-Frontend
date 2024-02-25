import React, { useEffect, useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Platform, View, StyleSheet, Text } from 'react-native'
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Region,
  MapMarker
} from 'react-native-maps'
import { themes } from '@/common/themes/themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Location from 'expo-location'
import { observer } from 'mobx-react'
import addMemoryStore from '@/stores/AddMemoryStore'

const PinPlace: React.FC = observer(() => {
  const [region, setRegion] = useState<Region | null>(null)
  const [locationName, setLocationName] = useState('')

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.log('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      })
      fetchLocationName(location.coords.latitude, location.coords.longitude)
    }

    getLocation()
  }, [])
  const fetchLocationName = async (latitude: number, longitude: number) => {
    try {
      const locationInfo = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      })

      const address = locationInfo[0]
      const locationText = `${address.name}, ${address.city}, ${address.region}, ${address.country}`
      setLocationName(locationText)
      addMemoryStore.location_name = locationText
      addMemoryStore.lat = latitude.toString()
      addMemoryStore.long = longitude.toString()
      // console.log(
      //   'LO LAT LONG :: ',
      //   addMemoryStore.location_name,
      //   addMemoryStore.lat.toString(),
      //   addMemoryStore.long.toString()
      // )
    } catch (error) {
      console.error('Error fetching location name:', error)
    }
  }

  const handleRegionChange = async (newRegion: Region) => {
    setRegion(newRegion)
    fetchLocationName(newRegion.latitude, newRegion.longitude)
  }

  if (!region) {
    return <View style={styles.container} />
  }

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        mapType={Platform.OS == 'android' ? 'none' : 'standard'}
        style={{ width: '100%', height: '100%' }}
        minZoomLevel={15}
        initialRegion={region}
        onRegionChangeComplete={region => handleRegionChange(region)}
        zoomEnabled={true}
      />

      <View style={styles.markerFixed}>
        <Ionicons
          name="location-sharp"
          size={52}
          color={themes.light.secondary.hex}
        />
      </View>
      <SafeAreaView style={styles.footer}>
        <Text style={styles.region}>{locationName}</Text>
      </SafeAreaView>
    </>
  )
})

export default PinPlace

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  currentButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: themes.light.primary.hex,
    padding: 10,
    borderRadius: 50,
    elevation: 5
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%'
  },
  footer: {
    backgroundColor: `rgba(${themes.light.tertiary.rgb},0.7)`,
    top: 0,
    // height: 20,
    alignItems: 'center',
    position: 'absolute',
    width: '100%'
  },
  region: {
    alignSelf: 'center',
    textAlign: 'center',
    color: themes.light.primary.hex,
    fontSize: 14,
    // lineHeight: 20,
    marginHorizontal: 10
  }
})
