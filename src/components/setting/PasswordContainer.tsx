import * as React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { themes } from '@/common/themes/themes'

const PasswordContainer = () => {
  return (
    <View style={styles.body}>
      <View>
        <Text style={styles.enter6DigitCode}>Enter 6-digit code</Text>
        <Text style={[styles.toSetYour, styles.toSetYourTypo]}>
          To set your password, enter the 6-digit code emailed to
          y***5@gmail.com
        </Text>
      </View>
      <View style={styles.digitCodeParent}>
        <View style={styles.digitCode}>{/* password 6  */}</View>
        <View style={styles.resendCode}>
          <Text style={[styles.resendCode1, styles.sPosition]}>
            Resend Code
          </Text>
          <Text style={[styles.s, styles.sPosition]}>60s</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  toSetYourTypo: {
    fontFamily: themes.fonts.light,
    fontWeight: '300'
  },
  emailIconLayout: {
    width: 40,
    maxHeight: '100%',
    top: 0,
    position: 'absolute'
  },
  sPosition: {
    color: themes.light.secondary.hex,
    lineHeight: 14,
    top: 0,
    fontSize: 12,
    textAlign: 'left',
    position: 'absolute'
  },
  enter6DigitCode: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '600',
    fontFamily: themes.fonts.samiBold,
    textAlign: 'left',
    color: themes.light.primary.hex
  },
  toSetYour: {
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    width: 301,
    marginTop: 8,
    fontSize: 12,
    fontFamily: themes.fonts.light,
    fontWeight: '300',
    textAlign: 'left',
    color: themes.light.primary.hex
  },
  digitCode: {
    flexDirection: 'row'
    // padding: Padding.p_3xs,
  },
  resendCode1: {
    left: 0,
    fontFamily: themes.fonts.light,
    fontWeight: '300'
  },
  s: {
    left: 86,
    fontWeight: '500',
    fontFamily: themes.fonts.medium
  },
  resendCode: {
    width: 100,
    height: 14,
    marginTop: 16
  },
  digitCodeParent: {
    marginTop: 70
  },
  body: {
    top: 152,
    left: 35,
    position: 'absolute'
  }
})

export default PasswordContainer
