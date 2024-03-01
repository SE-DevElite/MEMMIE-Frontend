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
import { themes } from '@/common/themes/themes'
import Arrowback from '@/assets/svg/Arrowback'

const TermsScreen: React.FC = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.terms}>
          <View style={styles.termsPoliciesParent}>
            <Text style={styles.termsPolicies}>{`Terms & Policies`}</Text>
            <Text style={styles.termsOfServiceContainer}>
              <Text style={styles.termsOfServiceContainer1}>
                <Text style={styles.termsOfService}>Terms of service</Text>
                {'\n'}
                {'\n'}
                <Text style={styles.termsOfService}> </Text>
                <Text style={styles.termsOfService}>
                  1. Your Relationship With Us
                </Text>
                {'\n'}
                <Text style={styles.termsOfService}>
                  2. Accepting the Terms
                </Text>
                {'\n'}
                {'\n'}
                <Text style={styles.termsOfService}> </Text>
                <Text style={styles.termsOfService}>
                  1. Your Relationship With Us
                </Text>
                {'\n'}
                <Text style={styles.termsOfService}>
                  welcome to MEMMIE (the ”Platform”), which is provided by
                  MEMMIE. or one of its affiliates(“MEMMIE”,”we” or “us”).
                </Text>
                {'\n'}
                {'\n'}
                <Text style={styles.termsOfService}> </Text>
                <Text style={styles.termsOfService}>
                  You are reading the terms of service (the “Terms”), which
                  govern the relationship and serve as an agreement between you
                  and us and set forth terms and conditions by which you may
                  access and use the Platform and our related websites,
                  services, applications, product and content (collectively, the
                  “Services”). Our Services are provided for private,
                  noncommercial use. For purposes of these Terms, “you” and
                  “your” means you as the user of the Services.
                </Text>
                {'\n'}
                {'\n'}
                <Text style={styles.termsOfService}> </Text>
                <Text style={styles.termsOfService}>
                  The Terms form a legally binding agreement between you and us.
                  Please take the time to read them carefully.
                </Text>
                {'\n'}
                {'\n'}
                <Text style={styles.termsOfService}> </Text>
                <Text style={styles.termsOfService}> </Text>
                <Text style={styles.termsOfService}>
                  2. Accepting the Terms
                </Text>
                {'\n'}
                <Text>
                  <Text style={styles.termsOfService}>
                    By accessing or using our Services, you confirm that you can
                    form a binding contract with MEMMIE, that you accept these
                    Terms and that you agree to comply with them. Your access to
                    and use of our Services is also subject to our{' '}
                  </Text>
                  <Text style={styles.privacyPolicy}>Privacy Policy</Text>
                  <Text style={styles.termsOfService}>and</Text>
                  <Text style={styles.privacyPolicy}>
                    {' '}
                    Community Guidelines
                  </Text>
                  <Text style={styles.termsOfService}>
                    , the terms of which can be found directly on the Platform,
                    or where the Platform is made available for download, on
                    your mobile device’s applicable app store, and are
                    incorporated herein by reference. By using the Services, you
                    consent to the terms of the Privacy Policy.
                  </Text>
                </Text>
              </Text>
            </Text>
          </View>

          <Pressable
            style={styles.backToSetting}
            onPress={() => navigation.navigate('SettingScreen' as never)}>
            <View style={styles.iconContainer}>
              <Arrowback />
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  termsPolicies: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '600',
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex,
    textAlign: 'left'
  },
  termsOfService: {
    color: 'black'
  },
  privacyPolicy: {
    color: 'red'
  },
  termsOfServiceContainer1: {
    width: '100%'
  },
  termsOfServiceContainer: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '300',
    fontFamily: themes.fonts.light,
    display: 'flex',
    alignItems: 'center',
    width: 301,
    marginTop: 8,
    textAlign: 'left'
  },
  termsPoliciesParent: {
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
  terms: {
    flex: 1,
    height: 951,
    overflow: 'hidden',
    width: '100%'
  }
})

export default TermsScreen
