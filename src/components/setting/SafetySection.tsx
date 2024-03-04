import * as React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { themes } from '@/common/themes/themes'

const SafetySection = () => {
  return (
    <View style={[styles.cardGsParent, styles.cardLayout]}>
      <View style={styles.cardGs}>
        <View style={[styles.cardGsChild, styles.cardLayout]} />
        <View style={[styles.heading, styles.headingPosition]}>
          <Text style={styles.safety}>Safety</Text>
        </View>
        <View style={[styles.heading1, styles.headingPosition]}>
          <Text style={styles.reportAProblemTypo}>Report a problem</Text>
          <Text
            style={[
              styles.reportingSecurityVulnerabili,
              styles.reportAProblemTypo
            ]}>
            Reporting security vulnerabilities
          </Text>
        </View>
      </View>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require('../../assets/icons/safety.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cardLayout: {
    height: 127,
    width: 342
  },
  headingPosition: {
    left: 16,
    position: 'absolute'
  },
  reportAProblemTypo: {
    color: themes.light.secondary.hex,
    lineHeight: 12,
    fontSize: 10,
    textAlign: 'left',
    fontFamily: themes.fonts.regular
  },
  cardGsChild: {
    borderRadius: 20,
    backgroundColor: themes.light.tertiary.hex
  },
  safety: {
    fontSize: 16,
    lineHeight: 19,
    color: themes.light.primary.hex,
    textAlign: 'left',
    fontFamily: themes.fonts.regular
  },
  heading: {
    top: 16,
    width: 99,
    zIndex: 1
  },
  reportingSecurityVulnerabili: {
    display: 'flex',
    alignItems: 'center',
    width: 190,
    marginTop: 8
  },
  heading1: {
    top: 51,
    width: 162,
    zIndex: 2
  },
  cardGs: {
    top: 0,
    left: 0,
    position: 'absolute'
  },
  imageIcon: {
    top: 14,
    left: 300,
    width: 20,
    height: 21,
    position: 'absolute'
  },
  cardGsParent: {
    marginTop: 16
  }
})

export default SafetySection
