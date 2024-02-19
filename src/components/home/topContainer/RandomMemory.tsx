import React from 'react'
import { themes } from '@/common/themes/themes'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import PlusIcon from '@/assets/svg/Plus'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import addMemoryStore from '@/stores/AddMemoryStore'
import { MONTH_SHORT } from '@/common/consts/DateTime.consts'

interface Props {
  onAddMemoryPress: () => void
}

const RandomMemory: React.FC<Props> = props => {
  const { onAddMemoryPress } = props

  const collectDate = [
    addMemoryStore.date_time.getDate(),
    MONTH_SHORT[addMemoryStore.date_time.getMonth()],
    addMemoryStore.date_time.getFullYear()
  ]

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/mocks/nut-riw-ronan.png')}
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
                King mongkut's university of technology thonburi
              </Text>
              <Text style={styles.timeText}>
                {addMemoryStore.date_time
                  .getHours()
                  .toString()
                  .padStart(2, '0')}{' '}
                :{' '}
                {addMemoryStore.date_time
                  .getMinutes()
                  .toString()
                  .padStart(2, '0')}
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
    </View>
  )
}

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
