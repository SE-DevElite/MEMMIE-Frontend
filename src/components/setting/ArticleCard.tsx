import React, { useMemo } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType
} from 'react-native'
import NavArrowRight from '@/assets/svg/NavArrowRight'
import { themes } from '@/common/themes/themes'

export type ArticleCardType = {
  actionButtonText?: ImageSourcePropType
  actionButtonLabel?: string
  actionButtonTitle?: string

  /** Style props */
  propTop?: number | string
  propLeft?: number | string
  propWidth?: number | string
  propWidth1?: number | string
  propWidth2?: number | string

  /** Action props */
  onCard1Press?: () => void
}

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return
  return { [key]: value === 'unset' ? undefined : value }
}
const ArticleCard = ({
  actionButtonText,
  actionButtonLabel,
  actionButtonTitle,
  propTop,
  propLeft,
  propWidth,
  propWidth1,
  propWidth2,
  onCard1Press
}: ArticleCardType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue('top', propTop),
      ...getStyleValue('left', propLeft)
    }
  }, [propTop, propLeft])

  const subheading1Style = useMemo(() => {
    return {
      ...getStyleValue('width', propWidth)
    }
  }, [propWidth])

  const subheading2Style = useMemo(() => {
    return {
      ...getStyleValue('width', propWidth1)
    }
  }, [propWidth1])

  const heading1Style = useMemo(() => {
    return {
      ...getStyleValue('width', propWidth2)
    }
  }, [propWidth2])

  return (
    <Pressable style={styles.card1} onPress={onCard1Press}>
      <View style={styles.card1Child} />
      <View style={[styles.frameParent, frameViewStyle]}>
        <View style={styles.subheading1Parent}>
          <View style={[styles.subheading1, subheading1Style]}>
            <Text
              style={[styles.gettingStarted, styles.gettingStartedPosition]}>
              Getting started
            </Text>
          </View>
          <NavArrowRight width={4} height={8} marginLeft={16} />
          <View style={[styles.subheading2, subheading2Style]}>
            <Text
              style={[styles.gettingStarted, styles.gettingStartedPosition]}>
              {actionButtonLabel}
            </Text>
          </View>
        </View>
        <View style={[styles.heading1, heading1Style]}>
          <Text
            style={[styles.creatingAnAccount1, styles.gettingStartedPosition]}>
            {actionButtonTitle}
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  gettingStartedPosition: {
    textAlign: 'left',
    left: 0,
    top: 0,
    position: 'absolute'
  },
  card1Child: {
    borderRadius: 20,
    backgroundColor: themes.light.tertiary.hex,
    left: 0,
    top: 0,
    position: 'absolute',
    height: 95,
    width: 342
  },
  gettingStarted: {
    fontSize: 13,
    lineHeight: 15,
    color: themes.light.secondary.hex,
    fontFamily: themes.fonts.regular
  },
  subheading1: {
    width: 99,
    height: 15
  },
  subheading2: {
    width: 136,
    marginLeft: 16,
    height: 15
  },
  subheading1Parent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  creatingAnAccount1: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '500',
    color: themes.light.primary.hex,
    fontFamily: themes.fonts.medium
  },
  heading1: {
    width: 157,
    height: 18,
    marginTop: 24
  },
  frameParent: {
    top: 16,
    left: 20,
    position: 'absolute'
  },
  card1: {
    marginTop: 16,
    height: 95,
    width: 342
  }
})

export default ArticleCard
