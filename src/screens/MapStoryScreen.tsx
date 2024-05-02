import React, { useRef, useState } from 'react'
import { View, StyleSheet, Dimensions, Keyboard } from 'react-native'
import UserHeading from '@/components/home/topContainer/UserHeading'
import MapViewStory from '@/components/mapStory/MapViewStory'
import { useNavigation } from '@react-navigation/native'
import MapSearchBar from '@/components/mapStory/MapSearchBar'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import MapStoryBottomSheetProvider from '@/components/mapStory/MapStoryBottomSheetProvider'
import { observer } from 'mobx-react'
import profileStore from '@/stores/ProfileStore'

import { WindowScreen } from '@/common/consts/ConfigScreen'
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'

interface MapStoryScreenProps {
  avatar: string
  username: string
}
type CordinatesType = {
  latitude: number
  longitude: number
}
const MapStoryScreen: React.FC<MapStoryScreenProps> = props => {
  const { avatar, username } = props
  const [coordinates, setCoordinates] = useState<CordinatesType>()
  const navigation = useNavigation()
  const filterMapBottomSheetRef = useRef<BottomSheet>(null)

  const handleCordinates = (cornate: CordinatesType) => {
    setCoordinates(cornate)
  }

  return (
    <View>
      <View style={styles.userHeading}>
        <UserHeading
          onPressAvatar={() => navigation.navigate('ProfileScreen' as never)}
          avatar={profileStore.avatar}
          username={profileStore.username}
        />
      </View>
      <MapSearchBar
        handleOpenMapFilter={() => filterMapBottomSheetRef.current?.expand()}
        handleCloseBottomSheet={() => { }}
        handleCordinates={handleCordinates}
      />
      <MapViewStory
        coordinates={coordinates}
        handleCordinates={handleCordinates}
      />

      <MapStoryBottomSheetProvider
        filterMapBottomSheetRef={filterMapBottomSheetRef}
      />
    </View>
  )
}

export default MapStoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userHeading: {
    paddingTop: 10,
    position: 'absolute',
    zIndex: 1,
    top: 30,
    left: WindowScreen.Width / 2 - (WindowScreen.Width / 11.6) * 4.9
  }
})
