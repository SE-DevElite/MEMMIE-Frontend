import React, { useMemo } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageSourcePropType
} from 'react-native'
import NavArrowRight from '@/assets/svg/NavArrowRight'
import { themes } from '@/common/themes/themes'

type SupportAboutContainerType = {
  onReportAProblemPress?: () => void
  onSupportPress?: () => void
  onTermsPoliciesPress?: () => void
}

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return
  return { [key]: value === 'unset' ? undefined : value }
}
const SupportAboutContainer = ({
  onReportAProblemPress,
  onSupportPress,
  onTermsPoliciesPress
}: SupportAboutContainerType) => {
  return (
    <View style={styles.supportAbout}>
      <Text style={[styles.supportAbout1]}>{`Support & About`}</Text>
      <View style={styles.underline} />
      <View style={styles.list}>
        <Pressable
          style={[styles.reportAProblem, styles.supportLayout]}
          onPress={onReportAProblemPress}>
          <View style={styles.reportAProblemParent}>
            <Text style={[styles.reportAProblem1, styles.derailTypo]}>
              Report a problem
            </Text>
            <NavArrowRight width={5} height={10} marginLeft={181} />
          </View>
        </Pressable>
        <Pressable
          style={[styles.support, styles.supportLayout]}
          onPress={onSupportPress}>
          <View style={styles.reportAProblemParent}>
            <Text style={[styles.support1, styles.derailTypo]}>Support</Text>
            <NavArrowRight width={5} height={10} marginLeft={243} />
          </View>
        </Pressable>
        <Pressable
          style={[styles.termsPolicies, styles.supportLayout]}
          onPress={onTermsPoliciesPress}>
          <View style={styles.reportAProblemParent}>
            <Text
              style={[
                styles.termsPolicies1,
                styles.derailTypo
              ]}>{`Terms & Policies`}</Text>
            <NavArrowRight width={5} height={10} marginLeft={191} />
          </View>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  supportLayout: {
    height: 16,
    width: 309,
    left: 0,
    position: 'absolute'
  },
  derailTypo: {
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
  supportAbout1: {
    left: 12,
    fontSize: 12,
    lineHeight: 14,
    color: themes.light.secondary.hex,
    textAlign: 'left',
    fontFamily: themes.fonts.regular,
    position: 'absolute',
    top: 0
  },
  supportAboutChild: {
    top: 22,
    maxHeight: '100%',
    left: 0,
    position: 'absolute',
    width: 375
  },
  reportAProblem1: {
    width: 123
  },
  reportAProblemParent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 309,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  reportAProblem: {
    top: 0,
    height: 16
  },
  support1: {
    width: 61
  },
  support: {
    top: 32
  },
  termsPolicies1: {
    width: 113
  },
  termsPolicies: {
    top: 64
  },
  list: {
    top: 38,
    left: 33,
    height: 80,
    width: 309,
    position: 'absolute'
  },
  supportAbout: {
    height: 118,
    marginTop: 32,
    width: 375
  }
})

export default SupportAboutContainer
