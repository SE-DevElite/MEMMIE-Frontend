import React, { useEffect, useState } from 'react'
import { themes } from '@/common/themes/themes'
import { ScrollView, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import AddMemorySelectTime from './AddMemorySelectTime'
import AddMemoryDayAndMood from './AddMemoryDayAndMood'
import AddMemoryForm from './AddMemoryForm'
import AddMemoryUploadImage from './AddMemoryUploadImage'
import {
  DEFAULT_URL,
  RequestWithToken,
  UploadRequestWithToken
} from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'

interface Props {
  date_time: Date
  privacy: string
  time_minute: {
    hours: number
    minutes: number
  }
  // picture
  handleEditDate: () => void
  handleEditTime: () => void
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

type ImageInfo = {
  uri: string
  id: string
}

const AddMemory: React.FC<Props> = props => {
  const {
    date_time,
    privacy,
    handleEditDate,
    handleEditTime,
    handleClose,
    handlePostSetting,
    handleSelectFriend,
    time_minute
  } = props

  const [memory, setMemory] = useState<MemoryForm>({
    caption: '',
    privacy: privacy,
    mention: '',
    description: ''
  })
  const [imageUrl, setImageurl] = useState<ImageInfo[]>([])

  useEffect(() => {
    setMemory({ ...memory, privacy: privacy })
  }, [privacy])

  const handleChangeMemory = (key: keyof MemoryForm, value: string) => {
    setMemory({ ...memory, [key]: value })
  }

  const handleSubmit = async () => {
    if (imageUrl.length === 0) return

    const access_token = await getAccessToken()
    const body = {
      // short_caption: memory.description,
      // caption: memory.caption,
      short_caption: "I'm so happy.",
      caption: "I'm so happy but this is caption.",
      // friend_list_id: ,
      mood: 'sad',
      weather: 'sunny',
      day: 'monday',
      location_name: "King's monkut university technology of thonburi.",
      selected_datetime: '2024-01-27 23:03',
      mention: []
    }
    console.log(body)

    const post_res = await RequestWithToken(access_token as string)
      .post('/memories/create', body)
      .then(res => res.data)

    // const memory_id = post_res.memory.memory_id

    // const blobs: Blob[] = []

    // for (const img of imageUrl) {
    //   const res_img = await fetch(img.uri.replace('file:///', 'file:/'))
    //   blobs.push(await res_img.blob())
    // }

    // const formData = new FormData()

    // const upload_res = await UploadRequestWithToken(access_token as string)
    //   .post('/memories/upload/2fcedc83-0a6a-4408-a836-05f39a8b4a1e', formData)
    //   .then(res => res.data)

    // console.log(upload_res)
  }

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.headerGroup}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.buttonStyle}>Cancel</Text>
          </TouchableOpacity>

          <Text style={styles.headingTextStyles}>Add memory</Text>

          <TouchableOpacity onPress={handleSubmit}>
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
              <AddMemoryDayAndMood date_time={date_time} />

              <AddMemorySelectTime
                handleEditDate={handleEditDate}
                handleEditTime={handleEditTime}
                date_time={date_time}
                time_minute={time_minute}
              />

              <AddMemoryForm
                {...memory}
                handlePostSetting={handlePostSetting}
                handleSelectFriend={handleSelectFriend}
                handleChangeMemory={handleChangeMemory}
              />
            </View>

            <View style={{ flex: 1 }}>
              <AddMemoryUploadImage image={imageUrl} setImage={setImageurl} />
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
