import React, { useMemo } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { themes } from '@/common/themes/themes'
import SignInContainer from '@/components/setting/SignInContainer'
import AccountContainer from './AccountContainer'
import PrivacyContainer from './PrivacyContainer'
import NotificationsContainer from './NotificationsContainer'
import DisplayContainer from './DisplayContainer'
import SupportAboutContainer from './SupportAboutContainer'
import { useNavigation } from '@react-navigation/native'

const SettingPanel: React.FC = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.settingPanel}>
      <AccountContainer />
      {/* <PrivacyContainer /> */}
      <NotificationsContainer />
      {/* <DisplayContainer /> */}
      <SupportAboutContainer />
      <SignInContainer
        navigation={navigation}
        handlePress={() => console.log('user profile')}
        text="User Profile"
      />
    </View>
  )
}

export default SettingPanel

const styles = StyleSheet.create({
  settingPanel: {
    alignItems: 'center',
    marginTop: 80,
    flex: 1
  }
})
