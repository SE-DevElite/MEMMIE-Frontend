import { themes } from '@/common/themes/themes'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

interface Props {
  bio: String
}

const Bio: React.FC<Props> = props => {
  const { bio } = props
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        {bio ?? 'Rose are red violet are blue.'}
      </Text>
    </View>
  )
}

export default Bio

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5e5',
    padding: 32,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30
  },
  textStyle: {
    fontSize: 10,
    fontFamily: themes.fonts.light,
    color: themes.light.primary.hex,
    lineHeight: 15
  }
})
