import * as React from 'react'
import { Text, StyleSheet, Pressable, View } from 'react-native'
import PushNotificationContainer from '@/components/setting/PushNotificationContainer'
import Arrowback from '@/assets/svg/Arrowback'
import { useNavigation } from '@react-navigation/native'
import { themes } from '@/common/themes/themes'

const PushNotificationScreen: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.pushNoti}>
      <Text style={styles.pushNotification}>Push notification</Text>
      <PushNotificationContainer />
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
  pushNotification: {
    top: 152,
    left: 35,
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '600',
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex,
    textAlign: 'left',
    position: 'absolute'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
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
  pushNoti: {
    // backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: 'hidden',
    width: '100%'
  }
})

export default PushNotificationScreen
