import XcloseIcon from '@/assets/svg/Xclose'
import { themes } from '@/common/themes/themes'
import AvatarCommon from '@/common/Avatar.common'
import NavArrowRightIcon from '@/assets/svg/NavArrowRight'
import React, { useState } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

interface Props {
  handleGenderPress: () => void
  name: string
  username: string
  bio: string
  gender: string
  avatar: string
  handleChangeProfile: (key: string, value: string) => void
  handleClose: () => void
  handleSave: () => void
}

const EditProfile: React.FC<Props> = props => {
  const {
    handleGenderPress,
    name,
    username,
    bio,
    gender,
    avatar,
    handleChangeProfile,
    handleClose,
    handleSave
  } = props

  const [waitState, setWaitState] = useState<boolean>(false)

  const fieldData = [
    {
      label: 'Name',
      value: name
    },
    {
      label: 'Username',
      value: username
    },
    {
      label: 'Bio',
      value: bio
    }
  ]

  const handleSubmit = async () => {
    setWaitState(true)
    handleSave()
    setWaitState(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerGroup}>
        <TouchableOpacity onPress={handleClose}>
          <Text style={styles.buttonStyle}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>Edit Profile</Text>
        {waitState ? (
          <ActivityIndicator style={{ width: 30 }} />
        ) : (
          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.postPaddingStyle}>
              <Text
                style={{
                  ...styles.buttonStyle,
                  fontFamily: themes.fonts.regular,
                  color: themes.light.secondary.hex
                }}>
                Save
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.divider} />
      <View style={styles.layout}>
        <View style={styles.avatarContainer}>
          <AvatarCommon
            uri={avatar}
            borderRadius={100}
            width={70}
            height={70}
          />
          {/* <TouchableOpacity onPress={() => console.log('Edit picture')}>
            <Text style={styles.editText}>Edit picture</Text>
          </TouchableOpacity> */}
        </View>

        <View style={styles.fieldsContainer}>
          {fieldData.map((item, index) => (
            <View
              style={{
                ...styles.fieldRow,
                alignItems: item.label === 'Bio' ? 'flex-start' : 'center'
              }}
              key={index}>
              <Text style={styles.fieldLabel}>{item.label}</Text>
              <TextInput
                placeholder={`Enter your ${item.label.toLowerCase()}`}
                placeholderTextColor={themes.light.tertiary.hex}
                style={{
                  ...styles.input,
                  textAlignVertical: 'top',
                  height: item.label === 'Bio' ? 100 : 20
                }}
                value={item.value as string}
                multiline={item.label === 'Bio'}
                maxLength={item.label === 'Bio' ? 100 : 20}
                numberOfLines={item.label === 'Bio' ? 5 : 1}
                onChange={e =>
                  handleChangeProfile(
                    item.label.toLowerCase(),
                    e.nativeEvent.text
                  )
                }></TextInput>

              <TouchableOpacity
                onPress={() =>
                  handleChangeProfile(item.label.toLowerCase(), '')
                }>
                {item.value?.length > 0 ? (
                  <View style={styles.closeIconContainer}>
                    <XcloseIcon />
                  </View>
                ) : (
                  ''
                )}
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity onPress={handleGenderPress}>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Gender</Text>
              <Text style={styles.input}>{gender}</Text>
              <NavArrowRightIcon width={8} height={16} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  layout: {
    paddingHorizontal: 40,
    gap: 50
  },
  avatarContainer: {
    marginTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 40
  },
  titleText: {
    fontFamily: themes.fonts.samiBold,
    fontSize: 22,
    color: themes.light.primary.hex
  },
  editText: {
    fontFamily: themes.fonts.regular,
    fontSize: 14,
    color: themes.light.primary.hex
  },
  fieldsContainer: {
    flexDirection: 'column',
    gap: 20
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  fieldLabel: {
    fontFamily: themes.fonts.medium,
    fontSize: 16,
    color: themes.light.primary.hex,
    width: 110
  },
  input: {
    width: '55%',
    color: themes.light.primary.hex,
    fontSize: 14,
    fontFamily: themes.fonts.regular
  },
  closeIconContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.light.secondary.hex,
    borderRadius: 100
  },
  bioRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bioInput: {
    flex: 1,
    color: themes.light.primary.hex,
    fontSize: 16,
    fontFamily: themes.fonts.regular
  },
  buttonStyle: {
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  postPaddingStyle: {
    backgroundColor: themes.light.tertiary.hex,
    borderRadius: 30,
    paddingHorizontal: 5
  },
  headerGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  divider: {
    height: 1,
    backgroundColor: themes.light.primary.hex,
    marginTop: 20
  },
  bodyStyle: {
    paddingVertical: 20,
    flex: 1
  }
})
