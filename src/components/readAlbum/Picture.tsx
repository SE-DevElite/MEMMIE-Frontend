import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text
} from 'react-native'
import { themes } from '@/common/themes/themes'
import CheckIcon from '@/assets/svg/Check'
import { LONG_DAY_TO_SHORT, MONTH } from '@/common/consts/DateTime.consts'
import addAlbumStore from '@/stores/AddAlbumStore'
import { Memory } from '@/interface/album_response'

interface Props {
  memory: Memory
}

const Picture: React.FC<Props> = props => {
  const { memory } = props
  const [active, setActive] = useState<boolean>(true)

  const selected_date = new Date(memory.selected_datetime)

  const handlePress = () => {
    // setActive(!active)
    addAlbumStore.handleChangeMemories(memory.memory_id)
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: memory.memory_lists }}
            style={styles.imageStyle}
          />
          <View
            style={{
              position: 'absolute',
              top: 22,
              left: 12,
              flexDirection: 'column'
            }}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={[
                styles.titleTextStyle,
                { fontSize: 10, fontFamily: themes.fonts.light }
              ]}>
              {
                LONG_DAY_TO_SHORT[
                  memory.day.toUpperCase() as keyof typeof LONG_DAY_TO_SHORT
                ]
              }
              , {selected_date.getDate()}
            </Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={[
                styles.titleTextStyle,
                { fontSize: 12, fontFamily: themes.fonts.medium }
              ]}>
              {MONTH[selected_date.getMonth()]} {selected_date.getFullYear()}
            </Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={[
                styles.titleTextStyle,
                { fontSize: 10, fontFamily: themes.fonts.light }
              ]}>
              {memory.location_name}
            </Text>
          </View>
          <View
            style={[
              styles.dot,
              {
                top: 22,
                backgroundColor: active ? themes.success.checkbox : 'white'
              }
            ]}>
            {active && <CheckIcon />}
          </View>
          <View style={[styles.dot, { top: 62 }]} />
          <View style={[styles.dot, { top: 102 }]} />
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

export default Picture

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    paddingTop: 16
  },
  scrollViewContent: {
    // flexGrow: 1
  },
  flexBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    width: '100%',
    paddingBottom: 70
  },
  imageContainer: {
    marginBottom: 8,
    width: '48%',
    position: 'relative'
  },
  imageStyle: {
    flex: 1,
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 32,
    backgroundColor: themes.light.tertiary.hex
  },
  dot: {
    width: 30,
    height: 30,
    borderRadius: 100,
    position: 'absolute',
    // backgroundColor: themes.light.tertiary.hex,
    backgroundColor: 'white',
    right: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleTextStyle: {
    color: 'white',
    width: 100
  }
})
