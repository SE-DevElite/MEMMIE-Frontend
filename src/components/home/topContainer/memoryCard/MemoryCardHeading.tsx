import React, { useState } from 'react'
import styled from 'styled-components/native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { themes } from '@/common/themes/themes'
import { Image, StyleSheet, Text, View } from 'react-native'

const MemoryCardHeading: React.FC = () => {
  const [streak, setStreak] = useState<number>(10)

  return (
    <View style={styles.boxTitle}>
      <TitleText style={styles.titleText}>
        <TitleTextStyle>Bangkok</TitleTextStyle>
      </TitleText>
      <StreakBox style={styles.streakBox}>
        <View style={styles.streakBackground}>
          <StreakCircle
            style={styles.streakCircle}
            size={streak.toString().length}>
            <StreakTextStyle>{streak}</StreakTextStyle>
            <Image source={require('@/assets/icons/streak.png')} />
          </StreakCircle>
        </View>
      </StreakBox>
    </View>
  )
}

export default MemoryCardHeading

const styles = StyleSheet.create({
  boxTitle: {
    height: 50,
    flexDirection: 'row'
  },
  titleText: {
    flex: 1,
    justifyContent: 'center',
    fontWeight: 'bold',
    borderTopLeftRadius: 20,
    paddingLeft: 16,
    borderTopRightRadius: 20
  },
  streakBox: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  streakBackground: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  streakCircle: {
    height: 42,
    // width: 42,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  streakIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
})

const TitleText = styled.View`
  background-color: ${themes.light.tertiary.hex};
`

const StreakBox = styled.View`
  background-color: ${themes.light.tertiary.hex};
`

const StreakCircle = styled.View`
  padding: ${(props: { size: number }) => (props.size === 1 ? 20 : 7)}px;

  background-color: ${themes.light.tertiary.hex};
`

const TitleTextStyle = styled.Text`
  font-size: 16px;
  font-family: ${themes.fonts.samiBold};
  color: ${themes.light.secondary.hex};
`

const StreakTextStyle = styled.Text`
  font-size: 15px;
  font-family: ${themes.fonts.samiBold};
  color: ${themes.light.primary.hex};
`
