import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import { StyleSheet, Text, View } from 'react-native'
import AddMemorySelectTime from './AddMemorySelectTime'
import AddMemoryDayAndMood from './AddMemoryDayAndMood'
import AddMemoryForm from './AddMemoryForm'
import AddMemoryUploadImage from './AddMemoryUploadImage'
import { ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import addMemoryStore from '@/stores/AddMemoryStore'
import { observer } from 'mobx-react'

interface Props {
  handleEditDate: () => void
  handleEditTime: () => void
  handleClose: () => void
  handlePinPlace: () => void
  handlePostSetting: () => void
  handleSelectFriend: () => void
}

const AddMemory: React.FC<Props> = observer(props => {
  const {
    handleEditTime,
    handleClose,
    handlePostSetting,
    handleSelectFriend,
    handleEditDate,
    handlePinPlace
  } = props

  const [waitState, setWaitState] = useState<boolean>(false)

  const handleSubmit = async () => {
    if (addMemoryStore.image_info.length === 0) return
    if (addMemoryStore.caption === '' || addMemoryStore.short_caption === '')
      return

    setWaitState(true)

    const upload_res = await addMemoryStore.submitMemory()
    if (!upload_res.error) {
      handleClose()
    }

    setWaitState(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.headerGroup}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.buttonStyle}>Cancel</Text>
          </TouchableOpacity>

          <Text style={styles.headingTextStyles}>Add memory</Text>

          {waitState ? (
            <ActivityIndicator style={{ width: 30 }} />
          ) : (
            <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.postPaddingStyle}>
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
          )}
        </View>
      </View>
      <View style={styles.divider} />

      <View style={styles.bodyStyle}>
        <ScrollView>
          <View style={{ gap: 20 }}>
            <View style={{ gap: 20, paddingHorizontal: 20 }}>
              <AddMemoryDayAndMood handlePinPlace={handlePinPlace} />

              <AddMemorySelectTime
                handleEditDate={handleEditDate}
                handleEditTime={handleEditTime}
              />

              <AddMemoryForm
                handlePostSetting={handlePostSetting}
                handleSelectFriend={handleSelectFriend}
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
})

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
  },
  postPaddingStyle: {
    backgroundColor: themes.light.tertiary.hex,
    borderRadius: 30,
    paddingHorizontal: 5
  }
})
