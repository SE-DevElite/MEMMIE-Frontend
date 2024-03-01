import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Platform, View, StyleSheet, Text } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps'
import { themes } from '@/common/themes/themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import { observer } from 'mobx-react'
import readMemoryStore from '@/stores/ReadMemoryStore'

interface Props {}

const ReadMemoryPinPlace: React.FC<Props> = observer(props => {
  const {} = props

  const [initialRegion, setInitialRegion] = useState<Region>({
    latitude: parseFloat(readMemoryStore.lat) || 0,
    longitude: parseFloat(readMemoryStore.long) || 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })
  useEffect(() => {
    setInitialRegion({
      latitude: parseFloat(readMemoryStore.lat) || 0,
      longitude: parseFloat(readMemoryStore.long) || 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    })
  }, [readMemoryStore.lat, readMemoryStore.long])

  const [forceUpdate, setForceUpdate] = useState(false)

  useEffect(() => {
    setForceUpdate(prevState => !prevState)
  }, [initialRegion])

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        mapType={Platform.OS == 'android' ? 'none' : 'standard'}
        style={{ width: '100%', height: '100%' }}
        minZoomLevel={14}
        initialRegion={initialRegion}
        zoomEnabled={true}
        key={forceUpdate ? 'forceUpdate' : 'regularUpdate'}>
        <Marker
          style={styles.markerFixed}
          coordinate={initialRegion}
          title={readMemoryStore.location_name}
          description={'asdasdasdasdasdasdasd'}>
          {/* <View style={styles.markerFixed}> */}
          <Ionicons
            name="location-sharp"
            size={52}
            color={themes.light.secondary.hex}
          />
          {/* </View> */}
        </Marker>
      </MapView>

      <SafeAreaView style={styles.footer}>
        <Text style={styles.region}>{readMemoryStore.location_name}</Text>
      </SafeAreaView>
    </>
  )
})

export default ReadMemoryPinPlace

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
