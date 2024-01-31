import React from 'react'
import { themes } from '@/common/themes/themes'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

interface Props {}

const ReadMemory: React.FC<Props> = props => {
  const {} = props

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 30, gap: 20 }}>
        {/* <ReadMemoryDayAndMood />
        <ReadMemoryTime />
        <ReadMemoryForm /> */}
      </View>
      {/* add upload image component here */}
      <View style={{ flex: 1, backgroundColor: themes.light.tertiary.hex }}>
        <View></View>
      </View>
    </View>
  )
}

export default ReadMemory

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  layout: {
    paddingHorizontal: 20
  },
  headerGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonStyle: {
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  headingTextStyles: {
    fontSize: 18,
    fontFamily: themes.fonts.medium,
    color: themes.light.primary.hex
  },
  divider: {
    height: 1,
    backgroundColor: themes.light.primary.hex,
    marginVertical: 20
  }
})
