import React, { useRef, useState } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import BottomSheet from '@gorhom/bottom-sheet'
import { themes } from '@/common/themes/themes'
import UserHeading from '@/components/home/topContainer/UserHeading'
import MemoryContainer from '@/components/home/topContainer/MemoryContainer'
import Calendar from '@/components/home/bottomContainer/Calendar'
import DatePicker from '@/components/home/bottomContainer/DatePicker'
import BottomSheetPicker from '@/components/home/bottomContainer/BottomSheetPicker'
import { useNavigation } from '@react-navigation/native'

const HomeScreen: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const navigation = useNavigation()
  const handleOpenPress = () => bottomSheetRef.current?.expand()

  const [selectedMonth, setSelectedMonth] = useState<string>('October')
  const [selectedYear, setSelectedYear] = useState<string>('2023')

  const handleChangeMonth = (itemValue: string, itemIndex: number) => {
    console.log(`change month: ${itemValue}`)
    setSelectedMonth(itemValue)
  }

  const handleChangeYear = (itemValue: string, itemIndex: number) => {
    console.log(`change year: ${itemValue}`)
    setSelectedYear(itemValue)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topOutterContainer}>
          <View style={styles.topInnerContainer}>
            <UserHeading onPressAvatar={() => navigation.navigate('ProfileScreen' as never)} />
            <MemoryContainer />
          </View>
        </View>
        <View style={styles.bottomOutterContainer}>
          <View style={styles.bottomInnerContainer}>
            <DatePicker
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
              onOpenPress={handleOpenPress}
            />
            <Calendar />
          </View>
        </View>
      </ScrollView>

      <BottomSheetPicker
        ref={bottomSheetRef}
        handleChangeMonth={handleChangeMonth}
        handleChangeYear={handleChangeYear}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.light.tertiary.hex
  },

  topOutterContainer: {
    // height: hp('50%'),
    width: wp('100%'),
    backgroundColor: themes.light.tertiary.hex
  },

  topInnerContainer: {
    // height: hp('50%'),
    width: wp('100%'),
    backgroundColor: 'white',
    borderBottomLeftRadius: 40,
    paddingLeft: 16,
    paddingRight: 16
  },

  bottomOutterContainer: {
    // height: hp('60%'),
    width: wp('100%'),
    backgroundColor: 'white'
  },

  bottomInnerContainer: {
    // height: hp('70%'),
    width: wp('100%'),
    backgroundColor: themes.light.tertiary.hex,
    borderTopRightRadius: 40
  }
})
