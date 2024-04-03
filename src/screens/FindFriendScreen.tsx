import React from 'react'
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { themes } from '@/common/themes/themes'
import { useNavigation } from '@react-navigation/native'
import BottomNavigationCommon from '@/common/BottomNavigation.common'
import ButtonLongCommon from '@/common/ButtonLong.common'
import Search from '@/assets/svg/Search'
import NavArrowRight from '@/assets/svg/NavArrowRight'
import SearchScreen from './SearchScreen'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const FindFriendScreen: React.FC = () => {
  const navigation = useNavigation()

  const onCancelPress = () => {
    navigation.navigate('SearchScreen' as never)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <ButtonLongCommon
          title="Search"
          fonts={themes.fonts.regular}
          font_size={12}
          width={windowWidth / 1.475}
          height={45}
          onPress={() => {}}
          background_color="white"
          color={themes.light.primary.hex}
          prefix_icon={Search}
        />
        <TouchableOpacity onPress={onCancelPress}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.puay, styles.iconsPosition]}>
        <View style={styles.iconContainer}>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/mocks/createList/icon2.png')}
          />
          <View style={[styles.puayParent, styles.parentLayout]}>
            <Text style={[styles.ntcnutt1, styles.create1Typo]}>Puay</Text>
            <Text style={[styles.helloWorld, styles.listTypo]}>panapun</Text>
          </View>
        </View>
        <NavArrowRight height={16} width={8} marginLeft={200} />
      </View>

      <View style={[styles.sxxlr, styles.iconsPosition]}>
        <View style={styles.iconGroup}>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require('../assets/mocks/createList/icon1.png')}
          />
          <View style={styles.sxxlrParent}>
            <Text style={[styles.ntcnutt1, styles.create1Typo]}>Sxxlr.</Text>
            <Text style={[styles.helloWorld, styles.listTypo]}>
              Hello, world
            </Text>
          </View>
        </View>
        <NavArrowRight height={16} width={8} marginLeft={191} />
      </View>

      <View style={[styles.ntcnutt, styles.iconsPosition]}>
        <View style={styles.iconParent}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/mocks/createList/icon.png')}
          />
          <View style={styles.ntcnuttParent}>
            <Text style={[styles.ntcnutt1, styles.create1Typo]}>Ntc.nutt</Text>
            <Text style={[styles.nutthanonThongcharoen, styles.listTypo]}>
              Nutthanon Thongcharoen
            </Text>
          </View>
        </View>
        <NavArrowRight height={16} width={8} marginLeft={128} />
      </View>
      <BottomNavigationCommon navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: windowHeight / 11.88,
    paddingHorizontal: windowWidth / 11.88
  },
  cancelText: {
    color: themes.light.primary.hex,
    fontFamily: themes.fonts.regular,
    fontSize: 12
  },
  ntcnutt: {
    top: 270
  },
  sxxlr: {
    top: 210
  },
  puay: {
    top: 150
  },
  iconsPosition: {
    left: 30,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute'
  },
  iconContainer: {
    width: 107,
    height: 35
  },
  iconParent: {
    width: 180,
    height: 35
  },
  icon1: {
    width: 35,
    height: 35
  },
  icon2: {
    width: '32.71%',
    right: '67.29%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%'
  },
  iconGroup: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  icon: {
    width: '19.44%',
    right: '80.56%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%'
  },
  iconLayout: {
    overflow: 'hidden',
    position: 'absolute',
    maxHeight: '100%',
    maxWidth: '100%'
  },
  parentLayout: {
    height: '97.14%',
    top: '2.86%'
  },
  ntcnuttParent: {
    height: '94.29%',
    width: '71.67%',
    bottom: '2.86%',
    left: '28.33%',
    top: '2.86%',
    right: '0%',
    position: 'absolute'
  },
  sxxlrParent: {
    width: 67,
    height: 34,
    marginLeft: 16
  },
  puayParent: {
    width: '52.34%',
    left: '47.66%',
    bottom: '0%',
    right: '0%',
    position: 'absolute'
  },
  ntcnutt1: {
    color: themes.light.primary.hex,
    left: '0%'
  },
  create1Typo: {
    textAlign: 'left',
    fontFamily: themes.fonts.regular,
    lineHeight: 16,
    fontSize: 14,
    position: 'absolute'
  },
  nutthanonThongcharoen: {
    top: '63.64%',
    fontSize: 10,
    lineHeight: 12,
    left: '0%',
    position: 'absolute'
  },
  helloWorld: {
    top: '58.82%',
    lineHeight: 14,
    fontSize: 12,
    fontWeight: '300',
    left: '0%',
    position: 'absolute'
  },
  listTypo: {
    fontFamily: themes.fonts.light,
    fontWeight: '300',
    textAlign: 'left',
    color: themes.light.primary.hex
  }
})

export default FindFriendScreen
