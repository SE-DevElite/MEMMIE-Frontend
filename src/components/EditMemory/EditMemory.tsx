import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import ButtonLongCommon from '@/common/ButtonLong.common'
import { observer } from 'mobx-react'
import { ScrollView } from 'react-native-gesture-handler'
import EditMemoryDayAndMood from './EditMemoryDayAndMood'
import EditMemorySelectTime from './EditMemorySelectTime'
import EditMemoryForm from './EditMemoryForm'
import EditMemoryUploadImage from './EditMemoryUploadImage'

interface Props {
  handlePinPlace: () => void
  handleClose: () => void
}

const EditMemory: React.FC<Props> = observer(props => {
  const { handlePinPlace, handleClose } = props
  const [waitState, setWaitState] = useState<boolean>(false)

  const handleSubmit = async () => {
    // if (addMemoryStore.image_info.length === 0) return
    // if (addMemoryStore.caption === '' || addMemoryStore.short_caption === '')
    //   return
    // setWaitState(true)
    // const upload_res = await addMemoryStore.submitMemory()
    // if (!upload_res.error) {
    //   handleClose()
    // }
    // setWaitState(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.headerGroup}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.buttonStyle}>Cancel</Text>
          </TouchableOpacity>

          <Text style={styles.headingTextStyles}>Edit memory</Text>

          {waitState ? (
            <ActivityIndicator style={{ width: 30 }} />
          ) : (
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.postPaddingStyle}>
                <Text
                  style={{
                    ...styles.buttonStyle,
                    fontFamily: themes.fonts.regular,
                    color: themes.light.secondary.hex
                  }}>
                  Save
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
            <View style={{ gap: 20, paddingHorizontal: 30 }}>
              <EditMemoryDayAndMood
                handlePinPlace={handlePinPlace}
                // handlePinPlace={handlePinPlace}
              />

              <EditMemorySelectTime
                handleEditDate={() => {}}
                handleEditTime={() => {}}
                // handleEditDate={handleEditDate}
                // handleEditTime={handleEditTime}
              />

              <EditMemoryForm
                handlePostSetting={() => {}}
                handleSelectFriend={() => {}}
                // handlePostSetting={handlePostSetting}
                // handleSelectFriend={handleSelectFriend}
              />
              <View style={{ flex: 1 }}>
                <EditMemoryUploadImage />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
})

export default EditMemory

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
