import React from 'react'
import { themes } from '@/common/themes/themes'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import ButtonLongCommon from '@/common/ButtonLong.common'
import ReadMemoryDayAndMood from './ReadMemoryDayAndMood'
import ReadMemoryTime from './ReadMemoryTime'
import ReadMemoryForm from './ReadMemoryForm'
import ReadMemoryImage from './ReadMemoryImage'
import DeleteMemory from './DeleteMemory'
import readMemoryStore from '@/stores/ReadMemoryStore'
import { observer } from 'mobx-react'

interface Props {
  // Memmory: []
  handleClose: () => void
}

const ReadMemory: React.FC<Props> = observer(props => {
  const { handleClose } = props

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
            onPress={() => {}}
            width={175}
            height={40}
            background_color={'#D9D9D9'}
            color="#848484"
            font_size={15}
          />
          <ButtonLongCommon
            title={'Edit'}
            onPress={() => {}}
            width={175}
            height={40}
            background_color={'#FFEAF2'}
            color="#66023C"
            font_size={15}
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
