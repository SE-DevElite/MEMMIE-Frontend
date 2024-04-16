import React, { useState } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import { themes } from '@/common/themes/themes'
import InputUnderlineCommon from '@/common/InputUnderline.common'
import ButtonLongCommon from '@/common/ButtonLong.common'
import EditDate from '../addMemory/EditDate'
import { WindowScreen } from '@/common/consts/ConfigScreen'

const DateOfBirthContainer: React.FC = () => {
  const [date, setDate] = useState<string>('')

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Date of birth</Text>
        <Text style={styles.text1}>
          Enter your own age, even if this account is for a business or a pet.
          Once you confirm, you can't edit it for a long time. This won't be
          shown publicly. <Text style={styles.text2}>Learn more</Text>
        </Text>
      </View>
      <View style={styles.inputbox}>
        <InputUnderlineCommon
          placeholder="Date of birth"
          handleChangeText={setDate}
          value={date}
          keyBoardType="email-address"
        />
        {/* <EditDate handleClose={() => {}} /> */}
      </View>
      <ButtonLongCommon
        title="Confirm"
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

export default DateOfBirthContainer
