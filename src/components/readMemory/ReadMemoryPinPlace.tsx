import React, { useEffect, useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Platform, View, StyleSheet, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps'
import { themes } from '@/common/themes/themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import { observer } from 'mobx-react'
import readMemoryStore from '@/stores/ReadMemoryStore'

const ReadMemoryPinPlace: React.FC = observer(() => {
  //   useEffect(() => {
  //     console.log(
  //       'Lat : ',
  //       readMemoryStore.lat,
  //       '\n Long : ',
  //       readMemoryStore.long
  //     )
  //   })
  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        mapType={Platform.OS == 'android' ? 'none' : 'standard'}
        style={{ width: '100%', height: '100%' }}
        minZoomLevel={15}
        initialRegion={{
          //   latitude: readMemoryStore.lat,
          //   longitude: readMemoryStore.long,
          latitude: 100,
          longitude: 13.0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        // onRegionChangeComplete={region => setRegion(region)}
        // onRegionChangeComplete={() => {}}
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
