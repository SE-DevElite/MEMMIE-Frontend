import React from 'react'
import { themes } from '@/common/themes/themes'
import { StyleSheet, View, Text } from 'react-native'
import ButtonLongCommon from '@/common/ButtonLong.common'
import ReadMemoryDayAndMood from './ReadMemoryDayAndMood'
import ReadMemoryTime from './ReadMemoryTime'
import ReadMemoryForm from './ReadMemoryForm'
import ReadMemoryImage from './ReadMemoryImage'
import { observer } from 'mobx-react'
import editMemoryStore from '@/stores/EditMemoryStore'
import readMemoryStore from '@/stores/ReadMemoryStore'
import { AntDesign } from '@expo/vector-icons'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { WindowScreen } from '@/common/consts/ConfigScreen'

interface Props {
  onEditMemoryPress: () => void
  onDeleteMemoryPress: () => void
  handleReadPinPlace: () => void
}

const ReadMemory: React.FC<Props> = observer(props => {
  const { onEditMemoryPress, onDeleteMemoryPress, handleReadPinPlace } = props

  const onPressEdit = () => {
    editMemoryStore.memory_id = readMemoryStore.memory_id
    editMemoryStore.initMemory(
      readMemoryStore.all_memories[readMemoryStore.current_memory]
    )
    // editMemoryStore.updateMemoryDetails({ ...readMemoryStore })
    // editMemoryStore.updateMemoryList(0, { ...readMemoryStore.memory_lists[0] })

    onEditMemoryPress()
  }

  const handleChangeMemory = (idx: number) => {
    if (idx < 0 || idx >= readMemoryStore.all_memories.length) {
      return
    }

    readMemoryStore.initMemory(idx)
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 30, gap: 20, flexDirection: 'column' }}>
        <ReadMemoryDayAndMood handleReadPinPlace={handleReadPinPlace} />
        <ReadMemoryTime />
        <View
          style={{
            paddingVertical: 10,
            height: WindowScreen.Height / 2.9 + WindowScreen.Height / 11.6
          }}>
          <ScrollView>
            <ReadMemoryForm />
            <ReadMemoryImage />
          </ScrollView>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: themes.light.tertiary.hex,
            justifyContent: 'space-between',
            flexDirection: 'row'
            // paddingTop: 30
          }}>
          <ButtonLongCommon
            title={'Delete'}
            onPress={() => {
              onDeleteMemoryPress()
            }}
            width={WindowScreen.Width / 2 - WindowScreen.Width / 11.8}
            height={40}
            background_color={'#D9D9D9'}
            color="#848484"
            font_size={15}
            fonts="sigular"
          />
          <ButtonLongCommon
            title={'Edit'}
            onPress={onPressEdit}
            width={WindowScreen.Width / 2 - WindowScreen.Width / 11.8}
            height={40}
            background_color={'#FFEAF2'}
            color="#66023C"
            font_size={15}
            fonts="sigular"
          />
        </View>
        <View
          style={{
            marginTop: 60,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10
          }}>
          <TouchableOpacity
            onPress={() =>
              handleChangeMemory(readMemoryStore.current_memory - 1)
            }>
            <AntDesign
              name="caretleft"
              size={24}
              color={
                readMemoryStore.current_memory === 0
                  ? '#e5e5e5e5'
                  : themes.light.secondary.hex
              }
            />
          </TouchableOpacity>

          <Text>
            {readMemoryStore.current_memory + 1} /{' '}
            {readMemoryStore.all_memories.length}
          </Text>

          <TouchableOpacity
            onPress={() =>
              handleChangeMemory(readMemoryStore.current_memory + 1)
            }>
            <AntDesign
              name="caretright"
              size={24}
              color={
                readMemoryStore.current_memory ===
                readMemoryStore.all_memories.length - 1
                  ? '#e5e5e5e5'
                  : themes.light.secondary.hex
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
})

export default ReadMemory

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  layout: {
    paddingHorizontal: 20
  },
  headerGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonStyle: {
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  headingTextStyles: {
    fontSize: 18,
    fontFamily: themes.fonts.medium,
    color: themes.light.primary.hex
  },
  divider: {
    height: 1,
    backgroundColor: themes.light.primary.hex,
    marginVertical: 20
  },
  BottomButton: {
    width: 170,
    height: 35,
    backgroundColor: themes.light.primary.hex,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  }
})
