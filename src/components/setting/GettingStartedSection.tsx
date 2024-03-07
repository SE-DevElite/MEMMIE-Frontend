import * as React from 'react'
import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { themes } from '@/common/themes/themes'

const GettingStartedSection: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={[styles.cardGsParent, styles.cardLayout]}>
      <View style={styles.cardGs}>
        <View style={[styles.cardGsChild, styles.cardLayout]} />
        <View style={[styles.heading, styles.headingPosition]}>
          <Text style={styles.gettingStarted}>Getting started</Text>
        </View>
        <View style={[styles.heading1, styles.headingPosition]}>
          <Pressable
          // onPress={() => navigation.navigate("SupportGettingstartedCreateaccount")}
          >
            <Text style={styles.creatingAndAccount}>Creating and account</Text>
          </Pressable>
          <Pressable
            style={styles.resetPassword}
            // onPress={() => navigation.navigate("SupportGettingstartedResetpw")}
          >
            <Text style={[styles.resetPassword1, styles.resetPassword1Typo]}>
              Reset password
            </Text>
          </Pressable>
          <Pressable
            style={styles.resetPassword}
            // onPress={() => navigation.navigate("SupportGettingstartedCreatememory")}
          >
            <Text
              style={[
                styles.creatingYourFirstMemory,
                styles.resetPassword1Typo
              ]}>
              Creating your first memory
            </Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require('../../assets/icons/jet.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cardLayout: {
    height: 122,
    width: 342
  },
  headingPosition: {
    left: 16,
    position: 'absolute'
  },
  resetPassword1Typo: {
    alignItems: 'center',
    display: 'flex',
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
  gettingStarted: {
    fontSize: 16,
    lineHeight: 19,
    color: themes.light.primary.hex,
    textAlign: 'left',
    fontFamily: themes.fonts.regular
  },
  heading: {
    top: 16,
    width: 121,
    zIndex: 1
  },
  creatingAndAccount: {
    color: themes.light.secondary.hex,
    lineHeight: 12,
    fontSize: 10,
    textAlign: 'left',
    fontFamily: themes.fonts.regular
  },
  resetPassword1: {
    width: 87,
    height: 13
  },
  resetPassword: {
    marginTop: 8
  },
  creatingYourFirstMemory: {
    width: 140
  },
  heading1: {
    top: 52,
    zIndex: 2,
    width: 140
  },
  cardGs: {
    top: 0,
    left: 0,
    position: 'absolute'
  },
  imageIcon: {
    top: 9,
    left: 300,
    width: 26,
    height: 29,
    position: 'absolute'
  },
  cardGsParent: {
    marginTop: 16
  }
})

export default GettingStartedSection
