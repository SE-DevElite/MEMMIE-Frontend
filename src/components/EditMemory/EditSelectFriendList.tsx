import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import CheckboxCommon from '@/common/Checkbox.common'

interface Props {
  id: string
  image: string
  name: string
  username: string
  onPress: (id: string) => void
  isActive: boolean
}

const EditSelectFriendList: React.FC<Props> = props => {
  const { id, image, name, username, isActive, onPress } = props
  const [active, setActive] = useState<boolean>(isActive)

  const handlePress = (id: string) => {
    setActive(!active)
    onPress(id)
  }

  return (
    <TouchableWithoutFeedback onPress={() => handlePress(id)}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.imageStyle}
            source={{
              uri: image
            }}
          />
        </View>
        <View style={{ width: '70%' }}>
          <Text style={styles.nameStyle}>{name}</Text>
          <Text style={styles.usernameStyle}>{username}</Text>
        </View>
        <View>
          <CheckboxCommon active={isActive} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default EditSelectFriendList

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  nameStyle: {
    fontSize: 16,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex
  },
  usernameStyle: {
    fontSize: 12,
    fontFamily: themes.fonts.light,
    color: themes.light.primary.hex
  },
  checkBox: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: themes.light.primary.hex
  },
  checkBoxActive: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: themes.light.primary.hex
  }
})
