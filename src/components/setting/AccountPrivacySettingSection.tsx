import * as React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { themes } from '@/common/themes/themes'

const AccountPrivacySettingSection: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={[styles.cardGsParent, styles.cardLayout]}>
      <View style={styles.cardGs}>
        <View style={[styles.cardGsChild, styles.cardLayout]} />
        <View style={[styles.heading, styles.headingPosition]}>
          <Text style={styles.accountAndPrivacy}>
            Account and privacy setting
          </Text>
        </View>
        <View style={[styles.heading1, styles.headingPosition]}>
          {/* <Pressable onPress={() => navigation.navigate("SupportAccPvInfo")}> */}
          <Text style={styles.accountTypo}>Account information</Text>
          {/* </Pressable>
          <Pressable
            style={styles.accountPrivacySettingContainer}
            onPress={() => navigation.navigate("SupportAccPvSetting")}
          > */}
          <Text style={[styles.accountPrivacySetting, styles.accountTypo]}>
            Account privacy setting
          </Text>
          {/* </Pressable> */}
        </View>
      </View>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require('../../assets/icons/privacy.png')}
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
  accountTypo: {
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
  accountAndPrivacy: {
    fontSize: 16,
    lineHeight: 19,
    width: 250,
    color: themes.light.primary.hex,
    textAlign: 'left',
    fontFamily: themes.fonts.regular
  },
  heading: {
    top: 16,
    width: 99,
    zIndex: 1
  },
  accountPrivacySetting: {
    display: 'flex',
    alignItems: 'center',
    width: 121,
    marginTop: 8
  },
  accountPrivacySettingContainer: {
    marginTop: 8
  },
  heading1: {
    top: 51,
    width: 118,
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

export default AccountPrivacySettingSection
