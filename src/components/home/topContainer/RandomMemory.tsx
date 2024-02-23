import React, { useEffect, useState } from 'react'
import { themes } from '@/common/themes/themes'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native'
import PlusIcon from '@/assets/svg/Plus'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MONTH_SHORT } from '@/common/consts/DateTime.consts'
import * as MediaLibrary from 'expo-media-library'
import * as Permissions from 'expo-permissions'
import addMemoryStore from '@/stores/AddMemoryStore'
import { observer } from 'mobx-react'

interface Props {
  onAddMemoryPress: () => void
}

const RandomMemory: React.FC<Props> = observer(props => {
  const { onAddMemoryPress } = props
  const currentTime: Date = new Date()
  const collectDate = [
    currentTime.getDate(),
    MONTH_SHORT[currentTime.getMonth()],
    currentTime.getFullYear()
  ]

  const [imageUri, setImageUri] = useState<string | null>(null)
  useEffect(() => {
    ;(async () => {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
      if (status !== 'granted') {
        console.log('Permission denied to access media library')
        return
      }

      const mediaAssets = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.photo,
        first: 5
      })

      if (mediaAssets.assets.length > 0) {
        setImageUri(mediaAssets.assets[Math.floor(Math.random() * 10) % 5].uri)
      }
    })()
  }, [])

  return (
    <View style={styles.container}>
      {imageUri && (
        <ImageBackground
          source={{ uri: imageUri }}
          style={styles.imageBackground}>
          <View style={styles.overlayContainer}>
            <View style={styles.topRow}>
              <MaterialCommunityIcons
                name="white-balance-sunny"
                size={30}
                color="white"
              />
              <View style={styles.textColumn}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.placeText}>
                  {addMemoryStore.location_name}
                </Text>
                <Text style={styles.timeText}>
                  {currentTime.getHours().toString().padStart(2, '0')} :{' '}
                  {currentTime.getMinutes().toString().padStart(2, '0')}
                </Text>
              </View>
            </View>
            <View style={styles.bottomRow}>
              <View style={styles.dateContainer}>
                <View style={styles.dateColumn}>
                  <Text style={styles.dateValue}>{collectDate[0]}</Text>
                  <Text style={styles.dateUnit}>Day</Text>
                </View>
                <View style={styles.dateColumn}>
                  <Text style={styles.dateValue}>{collectDate[1]}</Text>
                  <Text style={styles.dateUnit}>Month</Text>
                </View>
                <View style={styles.dateColumn}>
                  <Text style={styles.dateValue}>{collectDate[2]}</Text>
                  <Text style={styles.dateUnit}>Year</Text>
                </View>
              </View>
              <TouchableOpacity onPress={onAddMemoryPress}>
                <View style={styles.iconContainer}>
                  <PlusIcon width={13} height={13} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}
    </View>
  )
})

export default RandomMemory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: themes.light.tertiary.hex
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15
  },
  topRow: {
    flexDirection: 'row',
    gap: 5
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: 'red'
  },
  textColumn: {
    flexDirection: 'column',
    gap: 2,
    marginLeft: 5
  },
  placeText: {
    width: 110,
    color: 'white',
    fontFamily: themes.fonts.medium,
    fontSize: 12
  },
  timeText: {
    color: 'white',
    fontFamily: themes.fonts.regular,
    fontSize: 12
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateContainer: {
    flexDirection: 'row',
    gap: 10
  },
  dateColumn: {
    flexDirection: 'column'
  },
  dateValue: {
    color: 'white',
    fontFamily: themes.fonts.medium,
    fontSize: 12
  },
  dateUnit: {
    color: 'white',
    fontFamily: themes.fonts.medium,
    fontSize: 10
  },
  iconContainer: {
    backgroundColor: themes.light.tertiary.hex,
    width: 37,
    height: 37,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
