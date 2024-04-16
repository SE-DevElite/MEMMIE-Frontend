import * as React from 'react'
import { StyleSheet, Pressable, View } from 'react-native'
import DateOfBirthContainer from '@/components/setting/DateOfBirthContainer'
import { useNavigation } from '@react-navigation/native'
import Arrowback from '@/assets/svg/Arrowback'
import { themes } from '@/common/themes/themes'
import { WindowScreen } from '@/common/consts/ConfigScreen'

const DateOfBirthScreen: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.account}>
      <DateOfBirthContainer />
      <Pressable
        style={styles.backToSetting}
        onPress={() => navigation.navigate('SettingScreen' as never)}>
        <View style={styles.iconContainer}>
          <Arrowback />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    height: '100%',
    width: '100%'
  },
  backToSetting: {
    left: WindowScreen.Width / 23.2,
    top: WindowScreen.Height / 7.4 - WindowScreen.Height,
    width: 61,
    height: 61,
    borderRadius: 30.5,
    backgroundColor: themes.light.tertiary.hex
  },
  iconContainer: {
    width: 61,
    height: 61,
    justifyContent: 'center',
    alignItems: 'center'
  },
  account: {
    flex: 1,
    height: 812,
    overflow: 'hidden',
    width: '100%'
  }
})

export default DateOfBirthScreen
