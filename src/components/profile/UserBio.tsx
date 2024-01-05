import { themes } from '@/common/themes/themes'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const UserBio: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        SMTE STUDENT ix {'\n'} APPLIED COMPUTER SCIENCE - KMUTT
      </Text>
    </View>
  )
}

export default UserBio

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5e5',
    padding: 32,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30
    // marginTop: 8,
    // flexDirection: 'row',
    // alignItems: 'center',
    // gap: 16
  },
  textStyle: {
    fontSize: 10,
    fontFamily: themes.fonts.light,
    color: themes.light.primary.hex,
    lineHeight: 15
  }
})
