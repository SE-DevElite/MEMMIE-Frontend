import React, { useMemo } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageSourcePropType
} from 'react-native'
import LogOutIcon from '@/assets/svg/LogOut'
import { themes } from '@/common/themes/themes'
import { useNavigation } from '@react-navigation/native'
import { deleteAccessToken } from '@/helpers/TokenHandler'

type SignInContainerType = {
  onButtonPress?: () => void
  navigation: any
  handlePress?: () => void
  text?: string
}

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return
  return { [key]: value === 'unset' ? undefined : value }
}
const SignInContainer: React.FC<SignInContainerType> = ({
  onButtonPress,
  navigation
}: SignInContainerType) => {
  return (
    <View style={styles.signIn}>
      <Text style={[styles.signIn1, styles.signTypo]}>Sign in</Text>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        onPress={async () => {
          onButtonPress?.()
          await deleteAccessToken()
          navigation.navigate('SignInScreen' as never)
        }}>
        <View style={[styles.buttonChild, styles.buttonLayout]} />
        <View style={styles.logout1Parent}>
          <LogOutIcon
            style={styles.logout1Icon}
            color={themes.light.secondary.hex}
          />
          <Text style={[styles.signOut, styles.signTypo]}>Sign out</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  signTypo: {
    textAlign: 'left',
    fontFamily: themes.fonts.regular
  },
  buttonLayout: {
    height: 50,
    width: 343
  },
  signIn1: {
    fontSize: 12,
    lineHeight: 14,
    color: themes.light.secondary.hex
  },
  buttonChild: {
    top: 0,
    left: 0,
    borderRadius: 32,
    backgroundColor: '#FFEAF2',
    position: 'absolute'
  },
  logout1Icon: {
    width: 18,
    height: 18
  },
  signOut: {
    fontSize: 14,
    lineHeight: 16,
    marginLeft: 16,
    color: themes.light.primary.hex
  },
  logout1Parent: {
    top: 16,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute'
  },
  button: {
    marginTop: 8
  },
  signIn: {
    marginTop: 32
  }
})

export default SignInContainer
