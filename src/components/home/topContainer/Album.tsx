import React from 'react'
import { themes } from '@/common/themes/themes'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'

interface Props {
  onAddAlbumPress: () => void
}

const Album: React.FC<Props> = props => {
  const { onAddAlbumPress } = props

  return (
    <View style={styles.box}>
      <View style={styles.flex}>
        <Text style={styles.textStyle}>Albums</Text>
        <TouchableOpacity style={styles.circleTouch} onPress={onAddAlbumPress}>
          <Image
            style={styles.icon}
            source={require('@/assets/icons/add.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* map this component under */}
          <TouchableWithoutFeedback
            onPress={() => console.log('click on album')}>
            <View style={styles.albumContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('@/assets/mocks/nut-ronan.png')}
                  style={styles.albumImage}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.albumTitle}>Travel</Text>
                <Text style={styles.albumCount}>20</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </View>
  )
}

export default Album

const styles = StyleSheet.create({
  box: {
    width: 180,
    height: 180,
    borderRadius: 30,
    padding: 13,
    backgroundColor: themes.light.tertiary.hex
  },
  flex: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textStyle: {
    fontSize: 16,
    color: themes.light.secondary.hex,
    fontFamily: themes.fonts.samiBold
  },
  circleTouch: {
    width: 32,
    height: 24,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 11,
    height: 11
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 4
  },
  albumContainer: {
    flex: 1,
    flexDirection: 'column',
    marginRight: 10
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 20
  },
  albumImage: {
    resizeMode: 'cover',
    width: 130,
    height: 90
  },
  textContainer: {
    paddingLeft: 10,
    paddingTop: 2,
    flex: 1,
    flexDirection: 'column'
  },
  albumTitle: {
    fontSize: 14,
    fontFamily: themes.fonts.medium,
    color: themes.light.secondary.hex
  },
  albumCount: {
    fontSize: 12,
    fontFamily: themes.fonts.medium,
    color: themes.light.secondary.hex
  }
})
