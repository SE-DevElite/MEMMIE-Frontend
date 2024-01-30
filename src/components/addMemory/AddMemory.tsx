import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import { ScrollView, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import AddMemorySelectTime from './AddMemorySelectTime'
import AddMemoryDayAndMood from './AddMemoryDayAndMood'
import AddMemoryForm from './AddMemoryForm'
import AddMemoryUploadImage from './AddMemoryUploadImage'

interface Props {
  date_time: Date
  // picture
  handleEditDate: () => void
  handleClose: () => void
  handlePostSetting: () => void
  handleSelectFriend: () => void
}

export type MemoryForm = {
  caption: string
  privacy: string
  mention: string
  description: string
}

const AddMemory: React.FC<Props> = props => {
  const {
    date_time,
    handleEditDate,
    handleClose,
    handlePostSetting,
    handleSelectFriend
  } = props

  const [memory, setMemory] = useState<MemoryForm>({
    caption: '',
    privacy: '',
    mention: '',
    description: ''
  })

  const handleChangeMemory = (key: keyof MemoryForm, value: string) => {
    setMemory({ ...memory, [key]: value })
  }

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.headerGroup}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.buttonStyle}>Cancel</Text>
          </TouchableOpacity>

          <Text style={styles.headingTextStyles}>Add memory</Text>

          <TouchableOpacity onPress={() => console.log('post')}>
            <View
              style={{
                backgroundColor: themes.light.tertiary.hex,
                borderRadius: 30,
                paddingHorizontal: 5
              }}>
              <Text
                style={{
                  ...styles.buttonStyle,
                  fontFamily: themes.fonts.regular,
                  color: themes.light.secondary.hex
                }}>
                Post
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.bodyStyle}>
        <ScrollView>
          <View style={{ gap: 20 }}>
            <View style={{ gap: 20, paddingHorizontal: 20 }}>
              <AddMemoryDayAndMood />

              <AddMemorySelectTime
                handleEditDate={handleEditDate}
                date_time={date_time}
              />
              <AddMemoryForm
                {...memory}
                handlePostSetting={handlePostSetting}
                handleSelectFriend={handleSelectFriend}
                handleChangeMemory={handleChangeMemory}
              />
            </View>

            <View style={{ flex: 1 }}>
              <AddMemoryUploadImage />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default AddMemory

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
    marginTop: 20
  },
  bodyStyle: {
    paddingVertical: 20,
    flex: 1
  }
})
