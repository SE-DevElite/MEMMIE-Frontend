import AvatarCommon from '@/common/Avatar.common'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'
import SwitchCommon from '@/common/Switch.common'

const UserHeading: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexBox}>
        <AvatarCommon
          image={require('@/assets/mocks/nutthanon-avatar.jpg')}
          width={61}
          height={61}
          borderRadius={61 / 2}
        />
        <View>
          <TextStyle>Nutthanon</TextStyle>
          <SubHeading>How was your day?</SubHeading>
        </View>
        <SwitchCommon />
      </View>
    </View>
  )
}

export default UserHeading

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    paddingTop: 60,
    paddingLeft: 16,
    paddingRight: 16
  },
  flexBox: {
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
