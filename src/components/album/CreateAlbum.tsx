import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import CreateAlbumnTag from './CreateAlbumnTag'
import CreateAlbumSearch from './CreateAlbumSearch'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import InputUnderlineCommon from '@/common/InputUnderline.common'
import PictureList from './PictureList'
import profileStore from '@/stores/ProfileStore'
import { observer } from 'mobx-react'
import addAlbumStore from '@/stores/AddAlbumStore'

interface Props {
  handlePress: () => void
  handleCloseBottomSheet: () => void
}

const CreateAlbum: React.FC<Props> = observer(props => {
  const { handlePress, handleCloseBottomSheet } = props
  const [albumName, setAlbumName] = useState<string>('')
  const [wait, setWait] = useState<boolean>(false)

  const handleAlbumName = (text: string) => {
    setAlbumName(text)
    addAlbumStore.album_name = text
  }

  const handleSubmit = async () => {
    setWait(true)

    await addAlbumStore.handleSubmitAlbum()

    setWait(false)
    handleCloseBottomSheet()
  }

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Create album</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={{ ...styles.layout, gap: 20 }}>
        <View>
          <Text style={styles.albumTextStyle}>Album name</Text>
          <InputUnderlineCommon
            placeholder="Album"
            handleChangeText={handleAlbumName}
            value={albumName}
            keyBoardType="default"
            deleteButton={albumName.length > 0}
          />
        </View>

        <CreateAlbumSearch handlePress={handlePress} />
        <CreateAlbumnTag />
      </View>

      <View style={{ ...styles.layout, flex: 1 }}>
        <PictureList memories={profileStore.memories} />
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        disabled={
          addAlbumStore.album_name.length === 0 ||
          addAlbumStore.memories.length === 0
        }>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 26,
            position: 'absolute',
            bottom: 25
          }}>
          <View
            style={{
              backgroundColor:
                addAlbumStore.album_name.length === 0 ||
                addAlbumStore.memories.length === 0
                  ? 'rgba(0, 0, 0, 0.2)'
                  : themes.light.tertiary.hex,
              height: 50,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            {wait ? (
              <ActivityIndicator
                color={themes.light.primary.hex}
                size="small"
              />
            ) : (
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: themes.fonts.regular,
                  color: themes.light.secondary.hex
                }}>
                Create
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
})

export default CreateAlbum

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
    // backgroundColor: 'red'
  },
  layout: {
    paddingHorizontal: 20
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex
  },
  divider: {
    height: 1,
    backgroundColor: themes.light.primary.hex,
    marginVertical: 20
  },
  albumTextStyle: {
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex
  }
})
