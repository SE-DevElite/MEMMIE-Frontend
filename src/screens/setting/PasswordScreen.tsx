import * as React from 'react'
import Arrowback from '@/assets/svg/Arrowback'
import { StyleSheet, Pressable, View } from 'react-native'
import PasswordContainer from '@/components/setting/PasswordContainer'
import { useNavigation, ParamListBase } from '@react-navigation/native'
import { themes } from '@/common/themes/themes'

const PasswordScreen: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.password}>
      <PasswordContainer />
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
  backToSetting: {
    position: 'absolute',
    left: 16,
    top: 59,
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
  password: {
    flex: 1,
    height: 812,
    overflow: 'hidden',
    width: '100%'
  }
})

export default PasswordScreen
