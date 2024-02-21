import React, { useState, useCallback, useRef } from 'react'
import { StyleSheet, Text, View, Pressable, Modal, Image } from 'react-native'
import CreateList from './CreateList'
import { themes } from '@/common/themes/themes'
import NavArrowRight from '@/assets/svg/NavArrowRight'
import Plus from '@/assets/svg/Plus'
import BottomSheet from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native'
import SettingBottomSheetProvider from './SettingBottomSheetProvider'

const FriendlistContainer = () => {
  const navigation = useNavigation()

  const handleCreateListPress = () => {
    navigation.navigate('SettingBottomSheetProvider' as never)
  }

  return (
    <>
      <View style={styles.manageFriendList}>
        <View style={[styles.list, styles.listParentFlexBox]}>
          <Image
            style={styles.childLayout}
            resizeMode="cover"
            source={require('../../assets/mocks/mybooPic.png')}
          />
          <View style={styles.peopleParent}>
            <Text style={[styles.people, styles.peopleTypo]}>155 people</Text>
            <Text style={[styles.myBoo, styles.myBooTypo]}>My boo</Text>
          </View>
          <NavArrowRight height={16} width={8} marginLeft={28} />
        </View>
        <View style={styles.manageFriendListChild} />
        <Pressable
          style={[styles.newList, styles.listParentFlexBox]}
          onPress={handleCreateListPress}>
          <View style={styles.listParentFlexBox}>
            <View style={[styles.ellipseParent, styles.listParentFlexBox]}>
              <View style={styles.ellipseFrame}>
                <Plus color="white" width={17} height={17} />
              </View>
            </View>
            <View style={styles.createANewListParent}>
              <Text style={styles.myBooTypo}>Create a new list</Text>
              <Text style={[styles.withListsYou, styles.peopleTypo]}>
                With lists, you choose who gets to see each memory you share.
              </Text>
            </View>
          </View>
          <NavArrowRight height={16} width={8} marginLeft={39} />
        </Pressable>
        <SettingBottomSheetProvider />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  listParentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  peopleTypo: {
    display: 'flex',
    textAlign: 'left',
    color: themes.light.secondary.hex,
    fontFamily: themes.fonts.light,
    fontWeight: '300',
    lineHeight: 12,
    fontSize: 10,
    width: 200,
    alignItems: 'center'
  },
  myBooTypo: {
    color: themes.light.primary.hex,
    fontFamily: themes.fonts.regular,
    lineHeight: 17,
    fontSize: 14,
    textAlign: 'left'
  },
  childLayout: {
    height: 38,
    width: 38
  },
  people: {
    marginLeft: -100,
    top: 21,
    left: '50%',
    position: 'absolute'
  },
  myBoo: {
    top: 0,
    left: 0,
    position: 'absolute'
  },
  peopleParent: {
    height: 33,
    marginLeft: 28,
    width: 200
  },
  list: {
    height: '29.01%',
    width: '80.53%',
    top: '70.99%',
    right: '9.6%',
    bottom: '0%',
    left: '9.87%',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute'
  },
  manageFriendListChild: {
    height: '0.76%',
    width: '100.27%',
    top: '58.4%',
    right: '-0.13%',
    bottom: '40.84%',
    left: '-0.13%',
    borderStyle: 'solid',
    borderColor: themes.light.primary.hex,
    borderTopWidth: 1,
    position: 'absolute'
  },
  newListContainerOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)'
  },
  newListContainerBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0
  },
  frameChild: {
    zIndex: 0
  },
  iconPlus: {
    height: '37.95%',
    width: '43.95%',
    top: '30.68%',
    right: '27.11%',
    bottom: '31.36%',
    left: '28.95%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    zIndex: 1,
    position: 'absolute'
  },
  ellipseParent: {
    paddingHorizontal: 0
    // paddingVertical: Padding.p_10xs,
  },
  ellipseFrame: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: themes.light.secondary.hex,
    justifyContent: 'center',
    alignItems: 'center'
  },
  withListsYou: {
    marginTop: 4
  },
  createANewListParent: {
    marginLeft: 16
  },
  newList: {
    height: '34.35%',
    width: '80.27%',
    top: '0%',
    right: '9.87%',
    bottom: '65.65%',
    left: '9.87%',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute'
  },
  manageFriendList: {
    top: 282,
    left: -2,
    width: 375,
    height: 131,
    position: 'absolute'
  }
})

export default FriendlistContainer
