import React, { useMemo } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageSourcePropType
} from 'react-native'
import { themes } from '@/common/themes/themes'
import AtSign from '@/assets/svg/At-sign'
import NavArrowRight from '@/assets/svg/NavArrowRight'

type PrivacyContainerType = {
  onGroupPressablePress?: () => void
}

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return
  return { [key]: value === 'unset' ? undefined : value }
}
const PrivacyContainer = ({ onGroupPressablePress }: PrivacyContainerType) => {
  return (
    <View style={styles.privacy}>
      <Text style={[styles.privacy1]}>Privacy</Text>
      <View style={styles.underline} />
      <View style={[styles.mentions, styles.mentionsLayout]}>
        <Pressable
          style={[styles.mentionsInner, styles.mentionsLayout]}
          onPress={onGroupPressablePress}>
          <View style={[styles.frameParent, styles.parentFlexBox]}>
            <View style={styles.parentFlexBox}>
              <AtSign
                width={18}
                height={18}
                fill={themes.light.secondary.hex}
              />
              <Text style={[styles.mentions1, styles.everyoneFlexBox]}>
                Mentions
              </Text>
            </View>
            <View style={[styles.everyoneParent, styles.parentFlexBox]}>
              <Text style={[styles.everyone, styles.everyoneFlexBox]}>
                Everyone
              </Text>
              <NavArrowRight width={5} height={10} marginLeft={8} />
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mentionsLayout: {
    width: 309,
    position: 'absolute'
  },
  parentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  everyoneFlexBox: {
    display: 'flex',
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
  privacy1: {
    left: 12,
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'left',
    fontFamily: themes.fonts.regular,
    color: themes.light.secondary.hex,
    top: 0,
    position: 'absolute'
  },
  mentions1: {
    fontSize: 14,
    lineHeight: 16,
    color: themes.light.primary.hex,
    width: 68,
    marginLeft: 6
  },
  everyone: {
    fontSize: 10,
    lineHeight: 12,
    width: 49,
    color: themes.light.secondary.hex,
    display: 'flex'
  },
  everyoneParent: {
    marginLeft: 149
  },
  frameParent: {
    width: 309,
    position: 'absolute',
    left: 0,
    top: 0
  },
  mentionsInner: {
    height: 18,
    left: 0,
    top: 0,
    width: 309
  },
  mentions: {
    top: 38,
    left: 33,
    height: 18
  },
  privacy: {
    height: 56,
    marginTop: 32,
    width: 375
  }
})

export default PrivacyContainer
