import React from 'react'
import { themes } from '@/common/themes/themes'
import AvatarCommon from '@/common/Avatar.common'
import { View, StyleSheet, Text } from 'react-native'

interface Props {
  name: string
  username: string
  avatar: string
}

const ProfileName: React.FC<Props> = props => {
  const { name, username, avatar } = props

  return (
    <View style={styles.container}>
      <View style={styles.boxAvatar}>
        <View style={styles.borderBox}>
          <AvatarCommon
            uri={avatar}
            width={60}
            height={60}
            borderRadius={120}
          />
        </View>
      </View>

      <View style={styles.flexBox}>
        <View style={styles.flexChild}>
          <Text style={styles.textUsername}>{username}</Text>
          <Text style={styles.textFullUsername}>{name}</Text>
        </View>
      </View>
    </View>
  )
}

export default ProfileName

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
