import ButtonLongCommon from '@/common/ButtonLong.common'
import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Dimensions
} from 'react-native'

const windowWidth = Dimensions.get('window').width

interface Props {
  handleUnfollowPress: () => void
  handleCancelPress: () => void
}

const UnFollowButton: React.FC<Props> = props => {
  const { handleUnfollowPress, handleCancelPress } = props
  const [wait, setWait] = useState(false)

  const handleUnfollow = () => {
    setWait(true)
    handleUnfollowPress()
    setWait(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <Text style={styles.header}>Delete</Text>
        <Text style={styles.description}>
          Are you sure to unfollow username?
        </Text>
        <Text style={styles.description}>
          if you change your mind, you'll have to request to follow{' '}
          <Text style={styles.boldText}>username</Text> agian.
        </Text>
        {wait ? (
          <View>
            <ActivityIndicator size="large" color="#66023C" />
          </View>
        ) : (
          <ButtonLongCommon
            onPress={handleUnfollow}
            title="Delete"
            background_color="#66023C"
            color="#ffffff"
            width={windowWidth - 64}
            font_size={16}
          />
        )}
        <ButtonLongCommon
          onPress={handleCancelPress}
          title="Cancel"
          width={windowWidth - 64}
          font_size={16}
          fonts="normal"
        />
      </View>
    </View>
  )
}

export default UnFollowButton

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layout: {
    paddingTop: 20,
    paddingHorizontal: 20,
    gap: 10,
    alignItems: 'center'
  },
  header: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#66023C'
  },
  description: {
    marginVertical: 8,
    marginBottom: 16,
    marginHorizontal: 16,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'normal',
    color: '#66023C'
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})
