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
  image: NodeRequire
  name: string
  username: string

  // onPress: () => void
}

const SelectFriendList: React.FC<Props> = props => {
  const { image, name, username } = props
  const [active, setActive] = useState<boolean>(false)

  const handlePress = () => {
    console.log('press')
    setActive(!active)
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <View>{/* <Image style={styles.imageStyle} source={image} /> */}</View>
        <View style={{ width: '70%' }}>
          <Text style={styles.nameStyle}>{name}</Text>
          <Text style={styles.usernameStyle}>{username}</Text>
        </View>
        <View>
          <CheckboxCommon active={active} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SelectFriendList

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
