import React, { useMemo } from 'react'
import { Text, StyleSheet, View, ImageSourcePropType } from 'react-native'
import { themes } from '@/common/themes/themes'
import SwitchCommon from '@/common/Switch.common'

export type PushNoti = {
  actionLabel?: string
  notificationPauseLabel?: string

  temporarilyPauseNotificatWidth?: number | string
  temporarilyPauseNotificatMarginTop?: number | string
  toggleWidth?: number | string
  toggleHeight?: number | string
  ellipseIconColor?: string
}

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return
  return { [key]: value === 'unset' ? undefined : value }
}
const PushNoti = ({
  actionLabel,
  notificationPauseLabel,
  temporarilyPauseNotificatWidth,
  temporarilyPauseNotificatMarginTop,
  toggleWidth,
  toggleHeight
}: PushNoti) => {
  const pauseAllStyle = useMemo(() => {
    return {
      ...getStyleValue('width', temporarilyPauseNotificatWidth),
      ...getStyleValue('marginTop', temporarilyPauseNotificatMarginTop)
    }
  }, [temporarilyPauseNotificatWidth, temporarilyPauseNotificatMarginTop])

  const titleStyle = useMemo(() => {
    return {
      ...getStyleValue('width', toggleWidth),
      ...getStyleValue('height', toggleHeight)
    }
  }, [toggleWidth, toggleHeight])

  return (
    <View style={[styles.pauseAll, pauseAllStyle]}>
      <View style={[styles.title, titleStyle]}>
        <Text style={[styles.pauseAll1, styles.pausePosition]}>
          {actionLabel}
        </Text>
        <Text
          style={[styles.temporarilyPauseNotification, styles.pausePosition]}>
          {notificationPauseLabel}
        </Text>
        <View style={[styles.toggle]}>
          <SwitchCommon />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  toggle: { marginLeft: 225 },
  pausePosition: {
    textAlign: 'left',
    left: 0,
    position: 'absolute'
  },
  pauseAll1: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    fontFamily: themes.fonts.medium,
    color: themes.light.primary.hex,
    top: 0,
    textAlign: 'left'
  },
  temporarilyPauseNotification: {
    top: 27,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '300',
    fontFamily: themes.fonts.light,
    color: themes.light.secondary.hex
  },
  title: {
    width: 188,
    height: 41
  },
  pauseAll: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default PushNoti
