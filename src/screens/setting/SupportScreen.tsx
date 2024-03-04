import * as React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  SafeAreaView,
  ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PopularArticleSection from '@/components/setting/PopularArticleSection'
import GettingStartedSection from '@/components/setting/GettingStartedSection'
import AccountPrivacySettingSection from '@/components/setting/AccountPrivacySettingSection'
import SafetySection from '@/components/setting/SafetySection'
import Arrowback from '@/assets/svg/Arrowback'
import { themes } from '@/common/themes/themes'

const SupportScreen: React.FC = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.support}>
          <View style={styles.topic}>
            <View style={[styles.supportHeading, styles.supportPosition]}>
              <Text style={[styles.support1, styles.support1Clr]}>Support</Text>
            </View>
            <View style={[styles.howCanWeHelp, styles.supportPosition]}>
              <Text style={[styles.hiHowCan, styles.support1Clr]}>
                Hi, how can we help?
              </Text>
            </View>
          </View>
          <View style={[styles.topicsParent, styles.topicsPosition]}>
            <View style={styles.topics}>
              <Text style={[styles.contactSupport, styles.topics3Typo]}>
                Contact support
              </Text>
            </View>
            <View style={styles.topics1}>
              <Text style={[styles.supportmemmiescom, styles.support1Typo]}>
                support@memmies.com
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.backToSetting}
            onPress={() => navigation.navigate('SettingScreen' as never)}>
            <View style={styles.iconContainer}>
              <Arrowback />
            </View>
          </Pressable>
          <PopularArticleSection />
          <View style={[styles.topicsGroup, styles.topicsPosition]}>
            <View>
              <Text style={styles.topics3Typo}>Topics</Text>
            </View>
            <GettingStartedSection />
            <AccountPrivacySettingSection />
            <SafetySection />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  supportPosition: {
    left: 0,
    position: 'absolute'
  },
  support1Clr: {
    color: themes.light.primary.hex,
    textAlign: 'left'
  },
  topicsPosition: {
    left: 16,
    position: 'absolute'
  },
  topics3Typo: {
    lineHeight: 29,
    fontSize: 25,
    textAlign: 'left',
    color: themes.light.primary.hex,
    fontFamily: themes.fonts.samiBold,
    fontWeight: '600'
  },
  support1Typo: {
    fontFamily: themes.fonts.samiBold,
    fontWeight: '600'
  },
  support1: {
    fontSize: 20,
    lineHeight: 23,
    textAlign: 'left',
    fontFamily: themes.fonts.samiBold,
    fontWeight: '600'
  },
  supportHeading: {
    top: 0,
    left: 0
  },
  hiHowCan: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '300',
    fontFamily: themes.fonts.light,
    textAlign: 'left'
  },
  howCanWeHelp: {
    top: 31
  },
  topic: {
    top: 152,
    left: 35,
    width: 155,
    height: 49,
    position: 'absolute'
  },
  contactSupport: {
    left: 0,
    position: 'absolute',
    top: 0
  },
  topics: {
    width: 209,
    height: 29
  },
  supportmemmiescom: {
    fontSize: 14,
    lineHeight: 16,
    color: themes.light.secondary.hex,
    textAlign: 'left',
    left: 0,
    position: 'absolute',
    top: 0
  },
  topics1: {
    width: 180,
    height: 16,
    marginTop: 8
  },
  topicsParent: {
    top: 1001
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
  topicsGroup: {
    top: 516
  },
  support: {
    flex: 1,
    height: 1087,
    overflow: 'hidden',
    width: '100%'
  }
})

export default SupportScreen
