import AvatarCommon from '@/common/Avatar.common'
import CheckboxCommon from '@/common/Checkbox.common'
import { themes } from '@/common/themes/themes'
import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

interface Props {
  image: string
  username: string
  name: string
  user_id: string
  onSelectToggle: (user_id: string) => void
  select?: boolean
}

const FriendAccountList: React.FC<Props> = props => {
  const { image, name, username, user_id, onSelectToggle, select } = props
  const [selected, setSelected] = useState(select ? select : false)

  const toggleSelected = () => {
    setSelected(!selected)
    onSelectToggle(user_id)
  }

  return (
    <TouchableWithoutFeedback onPress={toggleSelected}>
      <View style={styles.friendListContainer}>
        <View>
          <AvatarCommon uri={image} borderRadius={100} width={45} height={45} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTitle}>{username}</Text>
          <Text style={styles.nameSubTitle}>{name}</Text>
        </View>
        <View>
          <CheckboxCommon active={selected} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default FriendAccountList

const styles = StyleSheet.create({
  friendListContainer: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameContainer: {
    width: '75%',
    flexDirection: 'column',
    paddingLeft: 16
  },
  nameTitle: {
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex
  },
  nameSubTitle: {
    fontSize: 11,
    fontFamily: themes.fonts.light,
    color: themes.light.primary.hex
  }
})
