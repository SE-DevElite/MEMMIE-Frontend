import React, { useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import { StyleSheet, View } from 'react-native'
import MyAlbum from '@/components/album/MyAlbum'
import FilterAlbum from '@/components/album/FilterAlbum'
import CreateAlbum from '@/components/album/CreateAlbum'
import BestFriendForever from '@/components/album/BestFriendForever'
import { Button, TouchableWithoutFeedback, Keyboard } from 'react-native' // Import Keyboard module
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import SelectFriend from '@/components/addMemory/SelectFriend'
import PostSetting from '@/components/addMemory/PostSetting'
import EditDate from '@/components/addMemory/EditDate'
import EditTime from '@/components/addMemory/EditTime'
import AddMemory from '@/components/addMemory/AddMemory'
import EditProfile from '@/components/profile/EditProfile'
import SelectGender from '@/components/profile/SelectGender'

const OpenBottomSheetScreen: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleClosePress = () => bottomSheetRef.current?.close()
  const handleOpenPress = () => bottomSheetRef.current?.expand()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Button title="Go to Details" onPress={handleOpenPress} />
        <LongBottomSheetCommon ref={bottomSheetRef} snapPoint={['40%']}>
          {/* <FilterAlbum /> */}
          {/* <CreateAlbum /> */}
          {/* <BestFriendForever /> */}
          {/* <MyAlbum /> */}
          {/* <SelectFriend /> */}
          {/* <PostSetting /> */}
          {/* <EditDate /> */}
          {/* <EditTime /> */}
          {/* <AddMemory /> */}
          {/* <EditProfile /> */}
          <SelectGender />
        </LongBottomSheetCommon>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default OpenBottomSheetScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
