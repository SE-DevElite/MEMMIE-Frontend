import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Platform, View, StyleSheet, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { themes } from '@/common/themes/themes'
import { SafeAreaView } from 'react-native-safe-area-context'

const PinPlace: React.FC = () => {
  const [region, setRegion] = React.useState({
    latitude: 13.736717,
    longitude: 100.523186,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        mapType={Platform.OS == 'android' ? 'none' : 'standard'}
        style={{ width: '100%', height: '100%' }}
        minZoomLevel={15}
        initialRegion={region}
        onRegionChangeComplete={region => setRegion(region)}
        // initialRegion={initialRegion}
        // showsUserLocation={true}
        zoomEnabled={true}
        // followsUserLocation={true}
      />
      <View style={styles.markerFixed}>
        <Ionicons
          name="location-sharp"
          size={52}
          color={themes.light.secondary.hex}
        />
      </View>
      <SafeAreaView style={styles.footer}>
        <Text style={styles.region}>{JSON.stringify(region, null, 2)}</Text>
      </SafeAreaView>
    </>
  )
}

export default PinPlace

const styles = StyleSheet.create({
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%'
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    position: 'absolute',
    width: '100%'
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20
  }
})
