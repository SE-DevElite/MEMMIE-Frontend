import NavArrowRightIcon from '@/assets/svg/NavArrowRight'
import XcloseIcon from '@/assets/svg/Xclose'
import AvatarCommon from '@/common/Avatar.common'
import { themes } from '@/common/themes/themes'
import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

interface Props {
  handleGenderPress: () => void
  name: String
  username: String
  bio: String
  gender: String
}

const EditProfile: React.FC<Props> = props => {
  const { handleGenderPress, name, username, bio, gender } = props

  const fieldData = [
    {
      label: 'Name'
    },
    {
      label: 'Username'
    },
    {
      label: 'Bio'
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.avatarContainer}>
          <Text style={styles.titleText}>Edit Profile</Text>
          <AvatarCommon
            image={require('@/assets/mocks/nut-ronan.png')}
            borderRadius={100}
            width={70}
            height={70}
          />
          <TouchableOpacity onPress={() => console.log('Edit picture')}>
            <Text style={styles.editText}>Edit picture</Text>
          </TouchableOpacity>
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
                value=""
                multiline={item.label === 'Bio'}
                maxLength={item.label === 'Bio' ? 100 : 20}
                numberOfLines={item.label === 'Bio' ? 5 : 1}></TextInput>

              <TouchableOpacity onPress={() => console.log(props)}>
                <View style={styles.closeIconContainer}>
                  <XcloseIcon />
                </View>
              </TouchableOpacity>
            </View>
          ))}

          <TouchableOpacity onPress={handleGenderPress}>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Gender</Text>
              <Text style={styles.input}>{'ass'}</Text>
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
    paddingTop: 40
  },
  layout: {
    flex: 1,
    paddingHorizontal: 40,
    gap: 50
  },
  avatarContainer: {
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
    fontSize: 18,
    color: themes.light.primary.hex,
    width: 120
  },
  input: {
    width: 200,
    color: themes.light.primary.hex,
    fontSize: 16,
    fontFamily: themes.fonts.regular
  },
  closeIconContainer: {
    width: 25,
    height: 25,
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
  }
})
