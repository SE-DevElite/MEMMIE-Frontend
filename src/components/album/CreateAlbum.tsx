import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import CreateAlbumnTag from './CreateAlbumnTag'
import CreateAlbumSearch from './CreateAlbumSearch'
import { StyleSheet, Text, View } from 'react-native'
import InputUnderlineCommon from '@/common/InputUnderline.common'
import PictureList from './PictureList'

const CreateAlbum: React.FC = () => {
  const [albumName, setAlbumName] = useState<string>('')
  const image = [
    require('@/assets/mocks/nutthanon-avatar.jpg'),
    require('@/assets/mocks/nutthanon-rb.png'),
    require('@/assets/mocks/nutthanon-avatar.jpg'),
    require('@/assets/mocks/nutthanon-rb.png'),
    require('@/assets/mocks/nut-riw-ronan.png')
  ]

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
            handleChangeText={setAlbumName}
            value={albumName}
            keyBoardType="default"
            deleteButton={albumName.length > 0}
          />
        </View>

        <CreateAlbumSearch />
        <CreateAlbumnTag />
      </View>

      <View style={{ ...styles.layout, flex: 1 }}>
        <PictureList image={image} />
      </View>
    </View>
  )
}

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
