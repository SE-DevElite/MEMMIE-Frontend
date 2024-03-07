import * as React from 'react'
import Arrowback from '@/assets/svg/Arrowback'
import { StyleSheet, Pressable, Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { themes } from '@/common/themes/themes'

const ReportScreen: React.FC = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.report}>
      <Pressable
        style={styles.backToSetting}
        onPress={() => navigation.navigate('SettingScreen' as never)}>
        <View style={styles.iconContainer}>
          <Arrowback />
        </View>
      </Pressable>
      <View style={styles.reportAProblemParent}>
        <Text style={styles.reportAProblem}>Report a problem</Text>
        <View style={styles.tellUsYourFeedbackParent}>
          <Text style={styles.tellUsYour}>Tell us your feedback</Text>
          <Text style={styles.forYourSafety}>
            For your safety, do not include any personal information
          </Text>
        </View>
      </View>
      <View style={[styles.create, styles.createLayout]}>
        <View style={[styles.createChild, styles.createLayout]} />
        <Text style={styles.submit}>Submit</Text>
      </View>
      <Image
        style={[styles.videoIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require('../../assets/icons/video.png')}
      />
      <Image
        style={[styles.imageIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require('../../assets/icons/image.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  createLayout: {
    height: 38,
    width: 298,
    position: 'absolute'
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    bottom: '37.32%',
    top: '54.06%',
    width: '18.67%',
    height: '8.62%',
    position: 'absolute',
    overflow: 'hidden'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  backToSetting: {
    position: 'absolute',
    left: 16,
    top: 59,
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
  },
  reportAProblem: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '600',
    fontFamily: themes.fonts.samiBold,
    textAlign: 'left',
    color: themes.light.primary.hex
  },
  tellUsYour: {
    fontWeight: '500',
    fontFamily: themes.fonts.medium,
    lineHeight: 16,
    fontSize: 14,
    textAlign: 'left',
    color: themes.light.primary.hex
  },
  forYourSafety: {
    lineHeight: 17,
    fontWeight: '300',
    fontFamily: themes.fonts.light,
    color: themes.light.secondary.hex,
    height: 34,
    marginTop: 8,
    width: 298,
    alignItems: 'center',
    display: 'flex',
    fontSize: 14,
    textAlign: 'left'
  },
  tellUsYourFeedbackParent: {
    marginTop: 16
  },
  reportAProblemParent: {
    top: 152,
    left: 35,
    position: 'absolute'
  },
  createChild: {
    top: 0,
    left: 0,
    borderRadius: 20,
    height: 38,
    backgroundColor: themes.light.secondary.hex
  },
  submit: {
    top: 11,
    left: 126,
    fontFamily: themes.fonts.regular,
    width: 110,
    alignItems: 'center',
    display: 'flex',
    lineHeight: 16,
    fontSize: 14,
    textAlign: 'left',
    color: themes.light.primary.hex,
    position: 'absolute'
  },
  create: {
    top: 560,
    left: 35
  },
  videoIcon: {
    right: '49.07%',
    left: '32.27%'
  },
  imageIcon: {
    right: '72%',
    left: '9.33%'
  },
  report: {
    flex: 1,
    height: 812,
    overflow: 'hidden',
    width: '100%'
  }
})

export default ReportScreen
