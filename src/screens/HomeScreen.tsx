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
import { MONTH } from '@/common/consts/DateTime.consts'
import HomeBottomSheetProvider from '@/components/home/HomeBottomSheetProvider'

const HomeScreen: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const albumBottomSheetRef = useRef<BottomSheet>(null)
  const addMemoryBottomSheetRef = useRef<BottomSheet>(null)
  const handleOpenPress = () => bottomSheetRef.current?.expand()

  const [selectedMonth, setSelectedMonth] = useState<string>(
    MONTH[new Date().getMonth() as keyof typeof MONTH] as string
  )
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  )

  const handlePolygonPress = (type_case: number) => {
    const currentMonthIndex = MONTH.findIndex(
      month => month === selectedMonth
    ) as number

    switch (currentMonthIndex) {
      case 0:
        if (type_case === -1) {
          setSelectedMonth(MONTH[11])
          setSelectedYear((parseInt(selectedYear) - 1).toString())
        } else {
          setSelectedMonth(MONTH[currentMonthIndex + type_case])
        }
        return
      case 11:
        if (type_case === 1) {
          setSelectedMonth(MONTH[0])
          setSelectedYear((parseInt(selectedYear) + 1).toString())
        } else {
          setSelectedMonth(MONTH[currentMonthIndex + type_case])
        }
        return
      default:
        setSelectedMonth(MONTH[currentMonthIndex + type_case])
        return
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topOutterContainer}>
          <View style={styles.topInnerContainer}>
            <UserHeading />
            <MemoryContainer
              onAddAlbumPress={() => albumBottomSheetRef.current?.expand()}
              onAddMemoryPress={() => addMemoryBottomSheetRef.current?.expand()}
            />
          </View>
        </View>
        <View style={styles.bottomOutterContainer}>
          <View style={styles.bottomInnerContainer}>
            <DatePicker
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
              onOpenPress={handleOpenPress}
              handlePolygonPress={handlePolygonPress}
            />
            <Calendar />
          </View>
        </View>
      </ScrollView>

      <BottomSheetPicker
        ref={bottomSheetRef}
        handleChangeMonth={setSelectedMonth}
        handleChangeYear={setSelectedYear}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
      />

      <HomeBottomSheetProvider
        albumBottomSheetRef={albumBottomSheetRef}
        addMemoryBottomSheetRef={addMemoryBottomSheetRef}
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
