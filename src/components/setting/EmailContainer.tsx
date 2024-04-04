import React, { useMemo, useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { themes } from '@/common/themes/themes'
import InputUnderlineCommon from '@/common/InputUnderline.common'
import ButtonLongCommon from '@/common/ButtonLong.common'
import { WindowScreen } from '@/common/consts/ConfigScreen'

const EmailContainer: React.FC = () => {
  const [email, setEmail] = useState<string>('')

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Email</Text>
        <Text style={styles.text1}>
          Your email address may be used to connect you to people you may know,
          improve ads, and more, depending on your settings.{' '}
          <Text style={styles.text2}>Learn more</Text>
        </Text>
      </View>
      <View style={styles.inputbox}>
        {/* <View style={styles.text}> */}
        <InputUnderlineCommon
          placeholder="Email address"
          handleChangeText={setEmail}
          value={email}
          keyBoardType="email-address"
        />
        {/* </View> */}
      </View>
      <ButtonLongCommon
        title="Send code"
        fonts={themes.fonts.regular}
        font_size={14}
        height={45}
        onPress={() => {}}
        background_color="white"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: WindowScreen.Height / 5.8,
    paddingHorizontal: WindowScreen.Width / 11.88
  },
  header: {
    color: themes.light.primary.hex,
    fontFamily: themes.fonts.bold,
    fontSize: 20,
    lineHeight: 23
  },
  text1: {
    marginVertical: WindowScreen.Height / 69.6,
    fontSize: 14,
    color: themes.light.primary.hex,
    fontFamily: themes.fonts.regular
  },
  text2: {
    fontSize: 14,
    color: themes.light.primary.hex,
    fontFamily: themes.fonts.bold
  },
  inputbox: {
    marginVertical: WindowScreen.Height / 58.2,
    lineHeight: 23
  }
})

export default EmailContainer
