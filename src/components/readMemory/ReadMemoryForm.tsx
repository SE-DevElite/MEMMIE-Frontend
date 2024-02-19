import AlignLeftIcon from '@/assets/svg/AlignLeft'
import FriendIcon from '@/assets/svg/Friend'
import LanguageIcon from '@/assets/svg/Language'
import NavArrowDownIcon from '@/assets/svg/NavArrowDown'
import { themes } from '@/common/themes/themes'
import React, { useState } from 'react'
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import readMemoryStore from '@/stores/ReadMemoryStore'
import AvatarCommon from '@/common/Avatar.common'
import profileStore from '@/stores/ProfileStore'

interface Props {
  // caption: string
  // privacy: string
  // mention: string
  // description: string
  // handlePostSetting: () => void
  // handleSelectFriend: () => void
}

const ReadMemoryForm: React.FC<Props> = props => {
  // const {
  //   caption,
  //   privacy,
  //   mention,
  //   description,
  //   handlePostSetting,
  //   handleSelectFriend
  // } = props

  // const [memoryForm, setMemoryForm] = useState({
  //   caption: readMemoryStore.caption,
  //   privacy: 'everyone',
  //   mention: '',
  //   description: readMemoryStore.short_caption
  // })

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <AvatarCommon uri={profileStore.avatar} width={42} height={42} />
        </View>
      </View>

      <View style={styles.inputSection}>
        <View style={styles.inputContainer}>
          <View style={styles.iconBackground}>
            <AlignLeftIcon width={15} height={15} />
          </View>
          <Text style={styles.inputText}>{readMemoryStore.short_caption}</Text>
        </View>

        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <View style={styles.iconBackground}>
              <LanguageIcon width={15} height={15} />
            </View>
            <Text style={styles.tagText}>Everyone</Text>
            <NavArrowDownIcon />
          </View>

          <TouchableOpacity onPress={() => {}}>
            <View style={styles.tag}>
              <View style={styles.iconBackground}>
                <FriendIcon width={15} height={15} />
              </View>
              <Text style={styles.tagText}>Friends</Text>
              <NavArrowDownIcon />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.caption}>
          <Text>{readMemoryStore.caption}</Text>
        </View>
      </View>
    </View>
  )
}

export default ReadMemoryForm

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10
  },
  iconContainer: {},
  icon: {
    width: 42,
    height: 42,
    backgroundColor: themes.light.tertiary.hex,
    overflow: 'hidden',
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
