import React, { useEffect } from 'react'
import { themes } from '@/common/themes/themes'
import { Dimensions, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import ButtonLongCommon from '@/common/ButtonLong.common'
import ReadMemoryDayAndMood from './ReadMemoryDayAndMood'
import ReadMemoryTime from './ReadMemoryTime'
import ReadMemoryForm from './ReadMemoryForm'
import ReadMemoryImage from './ReadMemoryImage'
import DeleteMemory from './DeleteMemory'
import { observer } from 'mobx-react'
import editMemoryStore from '@/stores/EditMemoryStore'
import readMemoryStore from '@/stores/ReadMemoryStore'

interface Props {
  onEditMemoryPress: () => void
  onDeleteMemoryPress: () => void
}

const width = Dimensions.get('window').width

const ReadMemory: React.FC<Props> = observer(props => {
  const { onEditMemoryPress, onDeleteMemoryPress } = props
  const onPressEdit = () => {
    editMemoryStore.updateMemoryDetails({ ...readMemoryStore })
    editMemoryStore.updateMemoryList(0, { ...readMemoryStore.memory_lists[0] })

    onEditMemoryPress()
    // console.log('\nEDIT ::: ', editMemoryStore.memory_lists)
  }

  useEffect(() => {
    console.log('ReadMemoryStore ::: ', readMemoryStore.memory_id)
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 30, gap: 20 }}>
        <ReadMemoryDayAndMood />
        <ReadMemoryTime />
        <ReadMemoryForm />
        <ReadMemoryImage />
        <View
          style={{
            flex: 1,
            backgroundColor: themes.light.tertiary.hex,
            justifyContent: 'space-between',
            flexDirection: 'row'
            // paddingHorizontal: 30
          }}>
          <ButtonLongCommon
            title={'Delete'}
            onPress={() => {
              onDeleteMemoryPress()
            }}
            width={width / 2 - 35}
            height={40}
            background_color={'#D9D9D9'}
            color="#848484"
            font_size={15}
            fonts="sigular"
          />
          <ButtonLongCommon
            title={'Edit'}
            onPress={onPressEdit}
            width={width / 2 - 35}
            height={40}
            background_color={'#FFEAF2'}
            color="#66023C"
            font_size={15}
            fonts="sigular"
          />
        </View>
      </View>
      {/* Edit and Delete */}
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
