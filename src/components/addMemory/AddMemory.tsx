import React, { useEffect, useState } from 'react'
import { themes } from '@/common/themes/themes'
import { ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import AddMemorySelectTime from './AddMemorySelectTime'
import AddMemoryDayAndMood from './AddMemoryDayAndMood'
import AddMemoryForm from './AddMemoryForm'
import AddMemoryUploadImage from './AddMemoryUploadImage'
import { RequestWithToken, UploadRequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'
import { DAY } from '@/common/consts/DateTime.consts'
import { ImageInfo, MemoryForm } from '@/interface/memory_request'
import { MoodElement } from '@/common/consts/MoodElement.consts'
import { WeatherElement } from '@/common/consts/WeatherElement.consts'

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
    description: '',
    weather: 0,
    mood: 0
  })
  const [imageUrl, setImageurl] = useState<ImageInfo[]>([])
  const [waitState, setWaitState] = useState<boolean>(false)

  useEffect(() => {
    setMemory({ ...memory, privacy: privacy })
  }, [privacy])

  const handleChangeMemory = (
    key: keyof MemoryForm,
    value: string | number
  ) => {
    setMemory({ ...memory, [key]: value })
  }

  const handleSubmit = async () => {
    if (imageUrl.length === 0) return
    if (memory.caption === '' || memory.description === '') return

    setWaitState(true)
    const access_token = await getAccessToken()

    const formData = new FormData()
    for (const img of imageUrl) {
      formData.append('files', {
        uri: img.uri,
        type: img.uri.split('.').pop() === 'png' ? 'image/png' : 'image/jpeg',
        name: img.id
      } as any)
    }

    const select_time = `${
      date_time.toISOString().split('T')[0]
    } ${time_minute.hours.toString().padStart(2, '0')}:${time_minute.minutes
      .toString()
      .padStart(2, '0')}`

    const body = {
      short_caption: memory.caption,
      caption: memory.description,
      friend_list_id: '',
      mood: MoodElement['Male'][memory.mood].label.toLocaleLowerCase(),
      weather: WeatherElement[memory.weather].label.toLocaleLowerCase(),
      day: DAY[date_time.getDay()].toLocaleLowerCase(),
      location_name: "King's monkut university technology of thonburi.",
      selected_datetime: select_time,
      mention: []
    }

    const post_res = await RequestWithToken(access_token as string)
      .post('/memories/create', body)
      .then(res => res.data)

    const memory_id = post_res.memory.memory_id

    const upload_res = await UploadRequestWithToken(access_token as string)
      .post(`/memories/upload/${memory_id}`, formData)
      .then(res => res.data)

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
              <AddMemoryDayAndMood
                date_time={date_time}
                handleChangeMemory={handleChangeMemory}
              />

              <AddMemorySelectTime
                handleEditDate={handleEditDate}
                handleEditTime={handleEditTime}
                date_time={date_time}
                time_minute={time_minute}
                handleChangeMemory={handleChangeMemory}
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
  },
  postPaddingStyle: {
    backgroundColor: themes.light.tertiary.hex,
    borderRadius: 30,
    paddingHorizontal: 5
  }
})
