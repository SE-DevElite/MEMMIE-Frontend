import * as React from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Arrowback from '@/assets/svg/Arrowback'
import { themes } from '@/common/themes/themes'
import WomanHappyIcon from '@/assets/svg/WomanHappy'
import WomanFunnyIcon from '@/assets/svg/WomanFunny'
import WomanNahIcon from '@/assets/svg/WomanNah'
import WomanSadIcon from '@/assets/svg/WomanSad'

const LockScreenWidget: React.FC = () => {
  const navigation = useNavigation()
  const MoodIcons = [
    WomanHappyIcon,
    WomanFunnyIcon,
    WomanNahIcon,
    WomanSadIcon
  ]
  return (
    <View style={styles.widget}>
      <View style={styles.title}>
        <View style={styles.createWidget}>
          <Text style={styles.createWidget1}>Create widget</Text>
        </View>
        <Text style={[styles.createYourWidget, styles.lockscreenTypo]}>
          Create your widget on lock and home screen, including photo memory,
          mood bubbles, streaks, and birthday count are also provided to help
          your phone screen unique and stand out!
        </Text>
      </View>
      <Pressable
        style={styles.backToSetting}
        onPress={() => navigation.navigate('SettingScreen' as never)}>
        <View style={styles.iconContainer}>
          <Arrowback />
        </View>
      </Pressable>
      <View style={styles.widgetGroup}>
        <View style={[styles.groupHomescreen, styles.homescreenPosition]}>
          <View style={styles.groupHomescreenChild} />
          <Text style={[styles.lockscreen, styles.homescreenPosition]}>
            Lockscreen
          </Text>
          <View style={[styles.homescreen, styles.homescreenPosition]}>
            <Text style={styles.lockscreenTypo}
            onPress={() => navigation.navigate('WidgetScreen' as never)}
            >Homescreen</Text>
          </View>
          <View style={styles.groupCard}>
            <View style={styles.cardContainer}>
              {/* <View style={styles.random}>
                <Image
                  style={[styles.randomChild, styles.childLayout]}
                  resizeMode="cover"
                  source={require('../../assets/mocks/widget1.png')}
                />
                <Text style={styles.random1}>Random</Text>
              </View>
              <View style={styles.todayMemory}>
                <Image
                  style={[styles.randomChild, styles.childLayout]}
                  resizeMode="cover"
                  source={require('../../assets/mocks/widget2.png')}
                />
                <Text style={styles.random1}>Today memory</Text>
              </View> */}
              {MoodIcons.map((MoodIcons) => (
                <View style={styles.moodIcon}>
                    <MoodIcons width={45} height={45} />
                </View>
              ))}
              
            </View>
            
            <View style={styles.cardContainer}>
              <View style={styles.todayMemory}>
              <Image
                style={[styles.radomChild, styles.childLayout]}
                resizeMode="cover"
                source={require('../../assets/mocks/widget3.png')}
              />
              <Text style={styles.random1}>Random</Text>
            </View>
            </View>
            

            <View style={styles.todayMemory}>
              <Image
                style={[styles.radomChild, styles.childLayout]}
                resizeMode="cover"
                source={require('../../assets/mocks/widget4.png')}
              />
              <Text style={styles.random1}>Today memory</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  lockscreenTypo: {
    fontFamily: themes.fonts.light,
    fontWeight: '300',
    lineHeight: 15,
    fontSize: 12,
    textAlign: 'left',
    color: themes.light.primary.hex
  },
  homescreenPosition: {
    top: '0%',
    position: 'absolute'
  },
  childLayout: {
    height: 129,
    borderRadius: 40
  },
  createWidget1: {
    top: 0,
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '600',
    fontFamily: themes.fonts.samiBold,
    textAlign: 'left',
    color: themes.light.primary.hex,
    left: 0,
    position: 'absolute'
  },
  createWidget: {
    width: 144,
    height: 23
  },
  createYourWidget: {
    display: 'flex',
    width: 301,
    marginTop: 8,
    alignItems: 'center'
  },
  title: {
    top: 152,
    left: 35,
    position: 'absolute'
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
  groupHomescreenChild: {
    height: '0.19%',
    width: '100.27%',
    top: '4.27%',
    right: '-0.13%',
    bottom: '95.54%',
    left: '-0.13%',
    borderStyle: 'solid',
    borderColor: themes.light.secondary.hex,
    borderTopWidth: 1,
    position: 'absolute'
  },
  lockscreen: {
    left: '38.13%',
    fontFamily: themes.fonts.light,
    fontWeight: '300',
    lineHeight: 15,
    fontSize: 12,
    textAlign: 'left',
    color: themes.light.primary.hex,
    
    
  },
  homescreen: {
    height: '4.36%',
    width: '20.27%',
    right: '70.4%',
    bottom: '95.64%',
    left: '9.33%',
    
  },
  randomChild: {
    width: 122
  },
  random1: {
    fontFamily: themes.fonts.regular,
    marginTop: 15,
    lineHeight: 15,
    fontSize: 12,
    textAlign: 'left',
    color: themes.light.primary.hex
  },
  random: {
    alignItems: 'center'
  },
  todayMemory: {
    marginLeft: 15,
    alignItems: 'center'
  },
  radomChild: {
    width: 260
  },
  groupCard: {
    height: '92.6%',
    width: '69.33%',
    top: '7.4%',
    right: '15.2%',
    bottom: '0%',
    left: '15.47%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute'
  },
  groupHomescreen: {
    height: '95.82%',
    right: '0%',
    bottom: '4.18%',
    left: '0%',
    width: '100%'
  },
  widgetGroup: {
    top: 266,
    width: 375,
    height: 550,
    left: 0,
    position: 'absolute'
  },
  widget: {
    flex: 1,
    height: 812,
    overflow: 'hidden',
    width: '100%'
  },
  cardContainer:{
    height: 170,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  moodContainer: {
    // Add any additional styles for the container if needed
  },
  moodIcon: {
    width: 60,
    height: 60,
    backgroundColor: themes.light.tertiary.hex,
    borderRadius: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    overflow: 'hidden'
  }
})

export default LockScreenWidget