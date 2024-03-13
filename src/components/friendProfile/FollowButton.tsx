import React from 'react'
import { themes } from '@/common/themes/themes'
import { View, Text, StyleSheet } from 'react-native'
import FollowFriendIcon from '@/assets/svg/FollowFriend'

const FollowButton: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.circle}>
          <FollowFriendIcon />
        </View>
      </View>
    </>
  )
}

export default FollowButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.light.tertiary.hex,
    height: 100,
    borderRadius: 100,
    padding: 6
  },
  circle: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
