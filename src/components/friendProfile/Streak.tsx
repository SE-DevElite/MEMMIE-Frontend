import StreakFireIcon from '@/assets/svg/StreakFire'
import { themes } from '@/common/themes/themes'
import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const Streak: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: themes.fonts.medium,
            color: themes.light.primary.hex
          }}>
          10
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
