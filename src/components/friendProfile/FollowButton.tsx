import React from 'react'
import { themes } from '@/common/themes/themes'
import { View, StyleSheet } from 'react-native'
import FollowFriendIcon from '@/assets/svg/FollowFriend'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

interface Props {
  handlefollowPress: () => void
  follow: boolean
}

const FollowButton: React.FC<Props> = props => {
  const { handlefollowPress, follow } = props

  return (
    <>
      <TouchableWithoutFeedback onPress={handlefollowPress}>
        <View
          style={[
            styles.container,
            { justifyContent: follow ? 'flex-start' : 'flex-end' }
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
