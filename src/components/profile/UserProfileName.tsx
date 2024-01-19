import AvatarCommon from '@/common/Avatar.common'
import { themes } from '@/common/themes/themes'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const UserProfileName: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxAvatar}>
        <View style={styles.borderBox}>
          <AvatarCommon
            image={require('@/assets/mocks/nutthanon-avatar.jpg')}
            width={60}
            height={60}
            borderRadius={120}
          />
        </View>
      </View>

      <View style={styles.flexBox}>
        <View style={styles.flexChild}>
          <Text style={styles.textUsername}>Nutthanon</Text>
          <Text style={styles.textFullUsername}>Nutthanon Thongcharoen</Text>
        </View>

        <TouchableOpacity onPress={() => console.log('Edit profile')}>
          <View style={styles.flexEdit}>
            <Text style={styles.textEdit}>Edit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserProfileName

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  boxAvatar: {
    backgroundColor: '#e5e5e5e5',
    borderTopLeftRadius: 120,
    borderTopRightRadius: 120,
    borderBottomRightRadius: 120
  },
  borderBox: {
    padding: 4,
    borderRadius: 120,
    backgroundColor: themes.light.secondary.hex
  },
  flexBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexChild: {
    gap: 2,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },

  flexEdit: {
    paddingHorizontal: 8,
    paddingVertical: 4
  },

  textUsername: {
    fontSize: 20,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex
  },
  textFullUsername: {
    fontSize: 12,
    fontFamily: themes.fonts.light,
    color: themes.light.primary.hex
  },
  textEdit: {
    fontSize: 13,
    fontFamily: themes.fonts.medium,
    color: themes.light.secondary.hex,
    textDecorationLine: 'underline'
  }
})
