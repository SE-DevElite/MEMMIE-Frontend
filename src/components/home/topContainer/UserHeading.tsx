import AvatarCommon from '@/common/Avatar.common'
import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'
import SwitchCommon from '@/common/Switch.common'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

interface UserHeadingProps {
  onPressAvatar: () => void
}

const UserHeading: React.FC<UserHeadingProps> = ({ onPressAvatar }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexBox}>
        <View style={styles.flexChild}>
          <TouchableOpacity onPress={onPressAvatar}>
            <AvatarCommon
              image={require('@/assets/mocks/nutthanon-avatar.jpg')}
              width={61}
              height={61}
              borderRadius={61 / 2}
            />
          </TouchableOpacity>
          <View>
            <TextStyle>Nutthanon</TextStyle>
            <SubHeading>How was your day?</SubHeading>
          </View>
        </View>
        <SwitchCommon />
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
  }
})

const TextStyle = styled.Text`
  font-family: ${themes.fonts.samiBold};
  font-size: 20px;
  line-height: 30px;
  color: ${themes.light.secondary.hex};
`

const SubHeading = styled.Text`
  font-family: ${themes.fonts.light};
  font-size: 14px;
  color: ${themes.light.secondary.hex};
`
