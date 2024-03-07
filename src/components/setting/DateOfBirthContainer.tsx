import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { themes } from '@/common/themes/themes'
import InputUnderlineCommon from '@/common/InputUnderline.common'

const DateOfBirthContainer: React.FC = () => {
  const [date, setDate] = useState<string>('')

  return (
    <View style={styles.body}>
      <View>
        <Text style={[styles.date, styles.dateFlexBox]}>Date of birth</Text>
        <Text style={[styles.dateContainer, styles.dateTypo1]}>
          <Text style={styles.dateContainer1}>
            <Text style={styles.dateTypo}>
              Enter your own age, even if this account is for a business or a
              pet. Once you confirm, you can't edit it for a long time. This
              won't be shown publicly.{' '}
            </Text>
            <Text style={styles.learnMore}>Learn more</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.form}>
        <View style={styles.dateofbirth}>
          <InputUnderlineCommon
            placeholder="Date of birth"
            handleChangeText={setDate}
            value={date}
            keyBoardType="email-address" //เดี๋ยวกลับมาแก้
          />
        </View>
        <View style={[styles.sendCode, styles.sendLayout]}>
          <View style={[styles.sendCodeChild, styles.sendLayout]} />
          <Text style={[styles.sendCode1, styles.dateFlexBox]}>Confirm</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dateFlexBox: {
    textAlign: 'left',
    color: themes.light.primary.hex
  },
  dateTypo1: {
    color: themes.light.primary.hex,
    fontSize: 12,
    textAlign: 'left'
  },
  sendLayout: {
    height: 38,
    width: 301
  },
  date: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '600',
    fontFamily: themes.fonts.samiBold
  },
  dateTypo: {
    fontFamily: themes.fonts.regular,
    fontWeight: '300'
  },
  learnMore: {
    fontWeight: '500',
    fontFamily: themes.fonts.medium
  },
  dateContainer1: {
    width: '100%'
  },
  dateContainer: {
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
    width: 301
  },
  dateofbirth: {
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

export default DateOfBirthContainer
