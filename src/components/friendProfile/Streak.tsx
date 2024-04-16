import StreakFireIcon from '@/assets/svg/StreakFire'
import { themes } from '@/common/themes/themes'
import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

interface Props {
  streak: number
}

const Streak: React.FC<Props> = props => {
  const { streak } = props

  return (
    <>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: themes.fonts.medium,
            color: themes.light.primary.hex
          }}>
          {streak}
        </Text>
        <StreakFireIcon width={13} />
      </View>
    </>
  )
}

export default Streak

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2
  }
})
