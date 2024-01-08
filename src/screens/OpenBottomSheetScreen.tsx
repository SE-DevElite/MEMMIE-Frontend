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

const OpenBottomSheetScreen: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleClosePress = () => bottomSheetRef.current?.close()
  const handleOpenPress = () => bottomSheetRef.current?.expand()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Button title="Go to Details" onPress={handleOpenPress} />
        <LongBottomSheetCommon ref={bottomSheetRef}>
          {/* <FilterAlbum /> */}
          {/* <CreateAlbum /> */}
          {/* <BestFriendForever /> */}
          {/* <MyAlbum /> */}
          {/* <SelectFriend /> */}
          <PostSetting />
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
