import * as React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation, ParamListBase } from '@react-navigation/native'
import { themes } from '@/common/themes/themes'
import Arrowback from '@/assets/svg/Arrowback'
import NavArrowRight from '@/assets/svg/NavArrowRight'
import { WindowScreen } from '@/common/consts/ConfigScreen'

const LinkAccount: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.linkAccount}>
      <View style={[styles.linkedAccountInfo, styles.search2IconLayout]}>
        <Text style={styles.linkedAccount}>Linked account</Text>
      </View>
      <View style={[styles.google, styles.ggLayout]}>
        <View style={[styles.gg, styles.ggLayout]}>
          <View style={[styles.gg, styles.ggLayout]}>
            <Text style={styles.google1}>Google</Text>
          </View>
        </View>
        <Text style={[styles.link, styles.linkTypo]}>Link</Text>
        <NavArrowRight style={styles.iconNavArrowRight} />
      </View>
      <View style={[styles.facebook, styles.ggLayout]}>
        <View style={[styles.fb, styles.ggLayout]}>
          <View style={[styles.fb, styles.ggLayout]}>
            <Text style={styles.google1}>Facebook</Text>
          </View>
        </View>
        <Text style={[styles.link, styles.linkTypo]}>Link</Text>
        <NavArrowRight style={styles.iconNavArrowRight} />
      </View>
      <View style={[styles.apple, styles.ggLayout]}>
        <View style={[styles.fb1, styles.ggLayout]}>
          <View style={[styles.fb1, styles.ggLayout]}>
            <Text style={styles.google1}>Apple</Text>
          </View>
        </View>
        <Text style={[styles.link2, styles.linkTypo]}>Link</Text>
        <NavArrowRight style={styles.iconNavArrowRight} />
      </View>
      <Pressable
        style={styles.backToSetting}
        onPress={() => navigation.navigate('SettingScreen' as never)}>
        <View style={styles.iconContainer}>
          <Arrowback />
        </View>
      </Pressable>
      <Image
        style={[styles.search2Icon, styles.search2IconLayout]}
        resizeMode="cover"
        source={require('../../assets/icons/google-logo.png')}
      />
      <Image
        style={styles.facebook2Icon}
        resizeMode="cover"
        source={require('../../assets/icons/facebook-logo.png')}
      />
      <Image
        style={styles.appleLogo2Icon}
        resizeMode="cover"
        source={require('../../assets/icons/apple-logo.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  search2IconLayout: {
    height: 23,
    position: 'absolute'
  },
  ggLayout: {
    height: 19,
    position: 'absolute'
  },
  linkTypo: {
    color: themes.light.secondary.hex,
    lineHeight: 16,
    fontSize: 14,
    left: 205,
    fontFamily: themes.fonts.light,
    fontWeight: '300',
    textAlign: 'left',
    position: 'absolute'
  },
  linkedAccount: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '600',
    fontFamily: themes.fonts.samiBold,
    textAlign: 'left',
    color: themes.light.primary.hex,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  linkedAccountInfo: {
    top: 152,
    width: 155,
    left: 35
  },
  google1: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: themes.fonts.light,
    fontWeight: '300',
    textAlign: 'left',
    color: themes.light.primary.hex,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  gg: {
    width: 58,
    height: 19,
    left: 0,
    top: 0
  },
  link: {
    top: 2
  },
  iconNavArrowRight: {
    height: '52.63%',
    width: '1.99%',
    top: '1%',
    right: '0%',
    bottom: '21.05%',
    left: '98.01%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  google: {
    top: 210,
    width: 251,
    left: 76,
    height: 19
  },
  fb: {
    width: 78,
    height: 19,
    left: 0,
    top: 0
  },
  facebook: {
    top: 251,
    width: 251,
    left: 76,
    height: 19
  },
  fb1: {
    width: 46,
    height: 19,
    left: 0,
    top: 0
  },
  link2: {
    top: 3
  },
  apple: {
    top: 292,
    width: 251,
    left: 76,
    height: 19
  },
  search2Icon: {
    top: 208,
    left: 36,
    width: 23
  },
  facebook2Icon: {
    top: 248,
    left: 34,
    width: 25,
    height: 25,
    position: 'absolute'
  },
  appleLogo2Icon: {
    top: 290,
    width: 24,
    height: 24,
    left: 35,
    position: 'absolute'
  },
  linkAccount: {
    flex: 1,
    height: 812,
    overflow: 'hidden',
    width: '100%'
  },
  backToSetting: {
    left: WindowScreen.Width / 23.2,
    top: WindowScreen.Height / 7.4 - WindowScreen.Height,
    width: 61,
    height: 61,
    borderRadius: 30.5,
    backgroundColor: themes.light.tertiary.hex
  },
  iconContainer: {
    width: 61,
    height: 61,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LinkAccount
