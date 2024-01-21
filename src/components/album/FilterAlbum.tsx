import React from 'react'
import { themes } from '@/common/themes/themes'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  handleClose: () => void
}

const FilterAlbum: React.FC<Props> = props => {
  const { handleClose } = props

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.headerGroup}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.buttonStyle}>Clear</Text>
          </TouchableOpacity>

          <Text style={styles.headingTextStyles}>Add Filter</Text>

          <TouchableOpacity onPress={() => console.log('Apply')}>
            <Text style={styles.buttonStyle}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={{ ...styles.layout, paddingHorizontal: 30 }}>
        <View style={{ paddingBottom: 20 }}>
          <Text style={styles.textTitle}>Date</Text>
          <View style={styles.dropDownGroup}>
            {/* add dropdown component here */}
          </View>
        </View>

        <View>
          <Text style={styles.textTitle}>Mood</Text>
          <View style={styles.moodGroup}>
            {new Array(4).fill(0).map((_, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => console.log(`Change mood ${index + 1}`)}>
                <View key={index} style={styles.circleAvatar} />
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}

export default FilterAlbum

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layout: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  headerGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonStyle: {
    // backgroundColor: 'red',
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  headingTextStyles: {
    fontSize: 24,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex
  },
  divider: {
    height: 1,
    backgroundColor: themes.light.primary.hex,
    marginVertical: 20
  },
  textTitle: {
    fontSize: 14,
    fontFamily: themes.fonts.medium,
    color: themes.light.primary.hex,
    paddingBottom: 10
  },
  dropDownGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  moodGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  circleAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: themes.light.tertiary.hex
  }
})
