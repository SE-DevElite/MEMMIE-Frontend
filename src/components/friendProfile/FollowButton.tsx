import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import { View, Text, StyleSheet } from 'react-native'
import FollowFriendIcon from '@/assets/svg/FollowFriend'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const FollowButton: React.FC = () => {
  const [active, setActive] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setActive(!active)}>
        <View
          style={[
            styles.container,
            { justifyContent: active ? 'flex-end' : 'flex-start' }
          ]}>
          <View style={styles.circle}>
            <FollowFriendIcon />
          </View>
        </View>
      </TouchableWithoutFeedback>
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
