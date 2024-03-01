import React, { useMemo, useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { themes } from '@/common/themes/themes'
import InputUnderlineCommon from '@/common/InputUnderline.common'

const EmailContainer: React.FC = () => {
  const [email, setEmail] = useState<string>('')

  return (
    <View style={styles.body}>
      <View>
        <Text style={[styles.email, styles.emailFlexBox]}>Email</Text>
        <Text style={[styles.yourEmailAddressContainer, styles.emailTypo1]}>
          <Text style={styles.yourEmailAddressContainer1}>
            <Text style={styles.emailTypo}>
              Your email address may be used to connect you to people you may
              know, improve ads, and more, depending on your settings.{' '}
            </Text>
            <Text style={styles.learnMore}>Learn more</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.form}>
        <View style={styles.emailAddress}>
          <InputUnderlineCommon
            placeholder="Email address"
            handleChangeText={setEmail}
            value={email}
            keyBoardType="email-address"
          />
        </View>
        <View style={[styles.sendCode, styles.sendLayout]}>
          <View style={[styles.sendCodeChild, styles.sendLayout]} />
          <Text style={[styles.sendCode1, styles.emailFlexBox]}>Send code</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  emailFlexBox: {
    textAlign: 'left',
    color: themes.light.primary.hex
  },
  emailTypo1: {
    color: themes.light.primary.hex,
    fontSize: 12,
    textAlign: 'left'
  },
  sendLayout: {
    height: 38,
    width: 301
  },
  email: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '600',
    fontFamily: themes.fonts.samiBold
  },
  emailTypo: {
    fontFamily: themes.fonts.regular,
    fontWeight: '300'
  },
  learnMore: {
    fontWeight: '500',
    fontFamily: themes.fonts.medium
  },
  yourEmailAddressContainer1: {
    width: '100%'
  },
  yourEmailAddressContainer: {
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
    width: 301
  },
  emailAddress: {
    height: 45,
    width: 301
  },
  sendCodeChild: {
    marginLeft: -150.5,
    left: '50%',
    borderRadius: 20,
    backgroundColor: themes.light.secondary.hex,
    top: 0,
    position: 'absolute'
  },
  sendCode1: {
    top: 11,
    left: 115,
    fontSize: 14,
    lineHeight: 16,
    fontFamily: themes.fonts.regular,
    position: 'absolute'
  },
  sendCode: {
    marginTop: 16
  },
  form: {
    marginTop: 48
  },
  body: {
    top: 152,
    left: 35,
    position: 'absolute'
  }
})

export default EmailContainer
