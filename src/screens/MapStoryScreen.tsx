import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import UserHeading from '@/components/home/topContainer/UserHeading'
import MapViewStory from '@/components/mapStory/MapViewStory'
import { useNavigation } from '@react-navigation/native'
import MapSearchBar from '@/components/mapStory/MapSearchBar'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import MapStoryBottomSheetProvider from '@/components/mapStory/MapStoryBottomSheetProvider'
import { observer } from 'mobx-react'
import profileStore from '@/stores/ProfileStore'

const MapStoryScreen: React.FC = observer(props => {
  const navigation = useNavigation()
  const filterMapBottomSheetRef = useRef<BottomSheet>(null)

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
        handleCloseBottomSheet={() => {}}
      />
      <MapViewStory />

      <MapStoryBottomSheetProvider
        filterMapBottomSheetRef={filterMapBottomSheetRef}
      />
    </View>
  )
})

export default MapStoryScreen

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userHeading: {
    paddingTop: 10,
    position: 'absolute',
    zIndex: 1,
    top: 30,
    left: windowWidth / 2 - 175
  }
})
