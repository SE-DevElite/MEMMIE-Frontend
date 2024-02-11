import React, { useMemo } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageSourcePropType
} from 'react-native'
import { themes } from '@/common/themes/themes'
import NavArrowRight from '@/assets/svg/NavArrowRight'

type NotificationsContainerType = {
  onWidgetPress?: () => void
  onPushNotificationPress?: () => void
}

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return
  return { [key]: value === 'unset' ? undefined : value }
}
const NotificationsContainer = ({
  onWidgetPress,
  onPushNotificationPress
}: NotificationsContainerType) => {
  return (
    <View style={styles.notifications}>
      <Text style={[styles.notifications1]}>Notifications</Text>
      <View style={styles.underline} />
      <View style={styles.list}>
        <Pressable
          style={[styles.widget, styles.widgetLayout]}
          onPress={onWidgetPress}>
          <View style={styles.widgetParent}>
            <Text style={[styles.widget1, styles.widget1Typo]}>Widget</Text>
            <NavArrowRight width={5} height={10} marginLeft={242} />
          </View>
        </Pressable>
        <Pressable
          style={[styles.pushNotification, styles.widgetLayout]}
          onPress={onPushNotificationPress}>
          <View style={styles.widgetParent}>
            <Text style={[styles.pushNotifications, styles.widget1Typo]}>
              Push notifications
            </Text>
            <NavArrowRight width={5} height={10} marginLeft={176} />
          </View>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  widgetLayout: {
    height: 16,
    width: 309,
    left: 0,
    position: 'absolute'
  },
  widget1Typo: {
    display: 'flex',
    color: themes.light.primary.hex,
    lineHeight: 16,
    fontSize: 14,
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: themes.fonts.regular
  },
  underline: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    top: 22,
    maxHeight: '100%',
    width: 375,
    backgroundColor: themes.light.secondary.hex
  },
  notifications1: {
    left: 12,
    fontSize: 12,
    lineHeight: 14,
    color: themes.light.secondary.hex,
    textAlign: 'left',
    fontFamily: themes.fonts.regular,
    position: 'absolute',
    top: 0
  },
  notificationsChild: {
    top: 22,
    maxHeight: '100%',
    left: 0,
    position: 'absolute',
    width: 375
  },
  widget1: {
    width: 62
  },
  widgetParent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 309,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  widget: {
    top: 32
  },
  pushNotifications: {
    width: 128
  },
  pushNotification: {
    top: 0,
    height: 16
  },
  list: {
    top: 38,
    left: 33,
    height: 48,
    width: 309,
    position: 'absolute'
  },
  notifications: {
    height: 86,
    marginTop: 32,
    width: 375
  }
})

export default NotificationsContainer
