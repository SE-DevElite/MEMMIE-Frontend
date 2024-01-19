import React from 'react'
import { themes } from '@/common/themes/themes'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
  badgeText?: string[]
}

const BestFriendForeverBadgeGroup: React.FC<Props> = props => {
  const { badgeText } = props

  return (
    <View style={styles.badgeGroup}>
      {badgeText?.map((text, index) => (
        <TouchableOpacity
          key={index}
          style={styles.badge}
          onPress={() => console.log(`Press on ${index}`)}>
          <Text style={styles.badgeText}>{text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default BestFriendForeverBadgeGroup

const styles = StyleSheet.create({
  badgeGroup: {
    flexDirection: 'row',
    gap: 10
  },
  badge: {
    height: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.light.tertiary.hex,
    borderRadius: 100
  },
  badgeText: {
    fontSize: 12,
    fontFamily: themes.fonts.medium,
    color: themes.light.primary.hex
  }
})
