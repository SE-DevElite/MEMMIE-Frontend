import AvatarCommon from '@/common/Avatar.common'
import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'
import SwitchCommon from '@/common/Switch.common'

interface UserHeadingProps {
  onPressAvatar: () => void
  avatar: string
  username: string
  // currentScreen: string
  // setCurrentScreen: () => string
}

const UserHeading: React.FC<UserHeadingProps> = props => {
  const { onPressAvatar, avatar, username } = props
  const navigation = useNavigation()
  // const [currentScreen, setCurrentScreen] = useState<string>('HomeScreen')

  return (
    <View style={styles.container}>
      <View style={styles.flexBox}>
        <View style={styles.flexChild}>
          <TouchableOpacity onPress={onPressAvatar}>
            <AvatarCommon
              uri={avatar}
              width={61}
              height={61}
              borderRadius={61 / 2}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={styles.textStyle}
              numberOfLines={1}
              ellipsizeMode="tail">
              {username}
            </Text>
            <SubHeading>How was your day?</SubHeading>
          </View>
        </View>
        <SwitchCommon
        // active={currentScreen === 'MapStoryScreen' ? true : false}
        // handleChange={() => {
        //   setCurrentScreen(
        //     currentScreen === 'MapStoryScreen'
        //       ? 'HomeScreen'
        //       : 'MapStoryScreen'
        //   )
        //   currentScreen === 'HomeScreen'
        //     ? navigation.navigate('MapStoryScreen' as never)
        //     : navigation.navigate('HomeScreen' as never)
        //   console.log(currentScreen)
        // }}
        />
      </View>
    </View>
  )
}

export default UserHeading

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexChild: {
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontFamily: themes.fonts.samiBold,
    fontSize: 20,
    lineHeight: 30,
    color: themes.light.secondary.hex,
    width: 170
  }
})

const SubHeading = styled.Text`
  font-family: ${themes.fonts.light};
  font-size: 14px;
  color: ${themes.light.secondary.hex};
`
