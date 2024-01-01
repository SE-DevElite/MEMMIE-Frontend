/*

FIX:: Change StyleSheet to Styled Components if needed

*/

import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { themes } from '@/common/themes/themes'
import UserHeading from '@/components/home/topContainer/UserHeading'
import MemoryContainer from '@/components/home/topContainer/MemoryContainer'

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topOutterContainer}>
        <View style={styles.topInnerContainer}>
          <UserHeading />
          <MemoryContainer />
        </View>
      </View>
      <View style={styles.bottomOutterContainer}>
        <View style={styles.bottomInnerContainer}>
          {/* Add element herrerrrrrrr */}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.light.tertiary.hex
  },

  topOutterContainer: {
    height: hp('50%'),
    width: wp('100%'),
    backgroundColor: themes.light.tertiary.hex
  },

  topInnerContainer: {
    height: hp('50%'),
    width: wp('100%'),
    backgroundColor: 'white',
    borderBottomLeftRadius: hp('5%'),
    paddingLeft: 16,
    paddingRight: 16
  },

  bottomOutterContainer: {
    height: hp('50%'),
    width: wp('100%'),
    backgroundColor: 'white'
  },

  bottomInnerContainer: {
    height: hp('50%'),
    width: wp('100%'),
    backgroundColor: themes.light.tertiary.hex,
    borderTopRightRadius: hp('5%'),
    paddingLeft: 16,
    paddingRight: 16
  }
})
