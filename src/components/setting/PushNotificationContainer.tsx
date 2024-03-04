import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PushNoti from './PushNoti'
import { themes } from '@/common/themes/themes'
import { Ionicons } from '@expo/vector-icons'
import SwitchCommon from '@/common/Switch.common'

const PushNotificationContainer: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <View style={styles.body}>
      <PushNoti
        actionLabel="Pause all"
        notificationPauseLabel="Temporarily pause notifications"
        toggleWidth={320}
      />
      <PushNoti
        actionLabel="Remind long time memory"
        notificationPauseLabel={`Remind memories haven't been
made in a long time`}
        temporarilyPauseNotificatWidth={304}
        temporarilyPauseNotificatMarginTop={32}
        toggleWidth={320}
        toggleHeight={50}
      />
      <View style={styles.bodyChild} />
      <View style={styles.remindMemoryWith}>
        <Text style={styles.remindMemoryWith1}>Remind memory with</Text>
        <View style={styles.checkboxList}>
          <View style={styles.peopleLayout}>
            <Text style={styles.peopleWhoTag}>People who tag you</Text>
            <Ionicons
              name={isClicked ? 'ellipse' : 'ellipse-outline'}
              size={24}
              color={
                isClicked ? themes.light.primary.hex : themes.light.primary.hex
              }
              style={{ marginLeft: 284 }}
              onPress={() => {
                setIsClicked(!isClicked)
              }}
            />
          </View>
          <View style={[styles.peopleWhoMentionYou, styles.peopleLayout]}>
            <Text style={styles.peopleWhoTag}>People who mention you</Text>
            <Ionicons
              name={isClicked ? 'ellipse' : 'ellipse-outline'}
              size={24}
              color={
                isClicked ? themes.light.primary.hex : themes.light.primary.hex
              }
              style={{ marginLeft: 284 }}
              onPress={() => {
                setIsClicked(!isClicked)
              }}
            />
          </View>
          <View style={[styles.peopleWhoMentionYou, styles.peopleLayout]}>
            <Text style={styles.peopleWhoTag}>People in your friend list</Text>
            <Ionicons
              name={isClicked ? 'ellipse' : 'ellipse-outline'}
              size={24}
              color={
                isClicked ? themes.light.primary.hex : themes.light.primary.hex
              }
              style={{ marginLeft: 284 }}
              onPress={() => {
                setIsClicked(!isClicked)
              }}
            />
          </View>
          <View style={[styles.peopleWhoMentionYou, styles.peopleLayout]}>
            <Text style={styles.peopleWhoTag}>Only me</Text>
            <Ionicons
              name={isClicked ? 'ellipse' : 'ellipse-outline'}
              size={24}
              color={
                isClicked ? themes.light.primary.hex : themes.light.primary.hex
              }
              style={{ marginLeft: 284 }}
              onPress={() => {
                setIsClicked(!isClicked)
              }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  peopleLayout: {
    height: 24,
    width: 308
  },
  bodyChild: {
    borderStyle: 'solid',
    borderColor: themes.light.secondary.hex,
    borderTopWidth: 1,
    width: 307,
    height: 1,
    marginTop: 32
  },
  remindMemoryWith1: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    fontFamily: themes.fonts.medium,
    color: themes.light.primary.hex,
    textAlign: 'left'
  },
  peopleWhoTag: {
    top: 3,
    left: 0,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '300',
    fontFamily: themes.fonts.light,
    textAlign: 'left',
    position: 'absolute',
    color: themes.light.secondary.hex
  },
  peopleWhoMentionYou: {
    marginTop: 16
  },
  checkboxList: {
    justifyContent: 'center',
    marginTop: 8,
    alignItems: 'center'
  },
  remindMemoryWith: {
    marginTop: 32
  },
  body: {
    top: 207,
    left: 33,
    alignItems: 'center',
    position: 'absolute'
  }
})

export default PushNotificationContainer
