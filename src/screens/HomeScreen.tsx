import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { themes } from '@/common/themes/themes'
import UserHeading from '@/components/home/topContainer/UserHeading'

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topOutterContainer}>
        <View style={styles.topInnerContainer}>
          <UserHeading />
        </View>
      </View>
      <View style={styles.bottomOutterContainer}>
        <View style={styles.bottomInnerContainer}>
          {/* Add element herrerrrrrrr */}
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.light.tertiary.hex
  },
  topOutterContainer: {
    height: hp('60%'),
    width: wp('100%'),
    backgroundColor: themes.light.tertiary.hex
  },
  topInnerContainer: {
    height: hp('60%'),
    width: wp('100%'),
    backgroundColor: 'white',
    borderBottomLeftRadius: hp('5%')
  },

  bottomOutterContainer: {
    height: hp('40%'),
    width: wp('100%'),
    backgroundColor: 'white'
  },
  bottomInnerContainer: {
    height: hp('40%'),
    width: wp('100%'),
    backgroundColor: themes.light.tertiary.hex,
    borderTopRightRadius: hp('5%')
  }
})
