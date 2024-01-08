import React from 'react'
import { themes } from '@/common/themes/themes'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import AddMemorySelectTime from './AddMemorySelectTime'
import AddMemoryDayAndMood from './AddMemoryDayAndMood'
import AddMemoryForm from './AddMemoryForm'

const AddMemory: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.headerGroup}>
          <TouchableOpacity onPress={() => console.log('Cancle')}>
            <Text style={styles.buttonStyle}>Cancle</Text>
          </TouchableOpacity>

          <Text style={styles.headingTextStyles}>Add memory</Text>

          <TouchableOpacity onPress={() => console.log('Post')}>
            <View
              style={{
                backgroundColor: themes.light.tertiary.hex,
                borderRadius: 30,
                paddingHorizontal: 5
              }}>
              <Text
                style={{
                  ...styles.buttonStyle,
                  fontFamily: themes.fonts.regular,
                  color: themes.light.secondary.hex
                }}>
                Post
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={{ paddingHorizontal: 30, gap: 20 }}>
        <AddMemoryDayAndMood />
        <AddMemorySelectTime date={6} month="Jul" year={2023} />
        <AddMemoryForm />
      </View>

      {/* add upload image component here */}
      <View
        style={{ flex: 1, backgroundColor: themes.light.tertiary.hex }}></View>
    </View>
  )
}

export default AddMemory

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
