import React from 'react'
import { themes } from '@/common/themes/themes'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  handleClose: () => void
}

const DeleteMemory: React.FC<Props> = props => {
  const { handleClose } = props

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <TouchableOpacity onPress={handleClose}>
          <Text style={styles.buttonStyle}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClose}>
          <Text style={styles.buttonStyle}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DeleteMemory

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layout: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  buttonStyle: {
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex,
    paddingHorizontal: 10,
    paddingVertical: 5
  }
})
