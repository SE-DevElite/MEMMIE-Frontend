import AlignLeftIcon from '@/assets/svg/AlignLeft'
import LanguageIcon from '@/assets/svg/Language'
import NavArrowDownIcon from '@/assets/svg/NavArrowDown'
import { themes } from '@/common/themes/themes'
import React from 'react'
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

interface Props {
  handlePostSetting: () => void
  handleSelectFriend: () => void
}

const AddMemoryForm: React.FC<Props> = props => {
  const { handlePostSetting, handleSelectFriend } = props

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}></View>
      </View>

      <View style={styles.inputSection}>
        <View style={styles.inputContainer}>
          <View style={styles.iconBackground}>
            <AlignLeftIcon width={15} height={15} />
          </View>
          <TextInput
            placeholder="Enter short caption"
            placeholderTextColor={themes.light.secondary.hex}
            style={styles.inputText}
          />
        </View>

        <View style={styles.tagsContainer}>
          <TouchableOpacity onPress={handlePostSetting}>
            <View style={styles.tag}>
              <View style={styles.iconBackground}>
                <LanguageIcon width={15} height={15} />
              </View>
              <Text style={styles.tagText}>Everyone</Text>
              <NavArrowDownIcon />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSelectFriend}>
            <View style={styles.tag}>
              <View style={styles.iconBackground}>
                <LanguageIcon width={15} height={15} />
              </View>
              <Text style={styles.tagText}>Friends</Text>
              <NavArrowDownIcon />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.caption}>
          <TextInput
            multiline={true}
            placeholder="Type here ..."
            placeholderTextColor={themes.light.secondary.hex}
            style={styles.inputCaption}
          />
        </View>
      </View>
    </View>
  )
}

export default AddMemoryForm

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10
  },
  iconContainer: {
    // Add any additional styles for the icon container if needed
  },
  icon: {
    width: 42,
    height: 42,
    backgroundColor: 'red',
    borderRadius: 100
  },
  inputSection: {
    flexDirection: 'column',
    flex: 1,
    gap: 5
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: themes.light.primary.hex,
    borderRadius: 100,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 3
  },
  iconBackground: {
    backgroundColor: themes.light.primary.hex,
    width: 22,
    height: 22,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputText: {
    flex: 1,
    fontFamily: themes.fonts.regular,
    fontSize: 14,
    height: 22,
    color: themes.light.primary.hex
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 10
  },
  tag: {
    borderWidth: 1,
    borderColor: themes.light.primary.hex,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 3,
    gap: 10
  },
  tagText: {
    fontFamily: themes.fonts.light,
    fontSize: 14,
    color: themes.light.primary.hex
  },
  caption: {},
  inputCaption: {
    fontFamily: themes.fonts.regular,
    fontSize: 14,
    color: themes.light.primary.hex
  }
})
