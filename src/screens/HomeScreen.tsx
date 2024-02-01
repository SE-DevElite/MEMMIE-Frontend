import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  RefreshControl
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import BottomSheet from '@gorhom/bottom-sheet'
import { themes } from '@/common/themes/themes'
import UserHeading from '@/components/home/topContainer/UserHeading'
import MemoryContainer from '@/components/home/topContainer/MemoryContainer'
import Calendar from '@/components/home/bottomContainer/Calendar'
import DatePicker from '@/components/home/bottomContainer/DatePicker'
import BottomSheetPicker from '@/components/home/bottomContainer/BottomSheetPicker'

import { useNavigation } from '@react-navigation/native'
import { MONTH, MONTH_TO_NUMBER } from '@/common/consts/DateTime.consts'
import HomeBottomSheetProvider from '@/components/home/HomeBottomSheetProvider'
import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'
import profileStore from '@/stores/ProfileStore'
import { observer } from 'mobx-react'
import { DailyResponse, ICalendar } from '@/interface/daily_response'
import useProfile from '@/hooks/useProfile'
import { getProfile } from '@/helpers/GetHomeScreen'

const HomeScreen: React.FC = observer(() => {
  useProfile()
  const [refreshing, setRefreshing] = useState(false)
  const navigation = useNavigation()
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  const bottomSheetRef = useRef<BottomSheet>(null)
  const albumBottomSheetRef = useRef<BottomSheet>(null)
  const addMemoryBottomSheetRef = useRef<BottomSheet>(null)
  const readMemoryBottomSheetRef = useRef<BottomSheet>(null)
  const handleOpenPress = () => bottomSheetRef.current?.expand()

  const [selectedMonth, setSelectedMonth] = useState<string>(
    MONTH[new Date().getMonth() as keyof typeof MONTH] as string
  )
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  )
  const [calendar, setCalendar] = useState<ICalendar[][]>([[]])

  async function getCalendar() {
    setCalendar([[]])
    const token = await getAccessToken()
    const monthNumber =
      MONTH_TO_NUMBER[selectedMonth as keyof typeof MONTH_TO_NUMBER]
    const dailyResponse: DailyResponse = await RequestWithToken(token as string)
      .get(`/daily-memory/${selectedYear}/${monthNumber}`)
      .then(res => res.data)

    setCalendar(dailyResponse.calendar)
  }

  useEffect(() => {
    getCalendar()
  }, [selectedMonth, selectedYear])

  const handleMemoryBottomSheet = () => {
    addMemoryBottomSheetRef.current?.expand()
    setCurrentDate(new Date())
  }

  const onRefresh = useCallback(async () => {
    setSelectedMonth(
      MONTH[new Date().getMonth() as keyof typeof MONTH] as string
    )
    setSelectedYear(new Date().getFullYear().toString())

    setRefreshing(true)
    await getProfile()
    await getCalendar()
    setRefreshing(false)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.topOutterContainer}>
          <View style={styles.topInnerContainer}>
            <UserHeading
              onPressAvatar={() =>
                navigation.navigate('ProfileScreen' as never)
              }
              avatar={profileStore.avatar}
              username={profileStore.username}
            />
            <MemoryContainer
              onAddAlbumPress={() => albumBottomSheetRef.current?.expand()}
              onAddMemoryPress={handleMemoryBottomSheet}
            />
          </View>
        </View>
        <View style={styles.bottomOutterContainer}>
          <View style={styles.bottomInnerContainer}>
            <DatePicker
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
              onOpenPress={handleOpenPress}
              setSelectedMonth={setSelectedMonth}
              setSelectedYear={setSelectedYear}
            />
            <Calendar
              calendar={calendar}
              onReadMemoryPress={() =>
                readMemoryBottomSheetRef.current?.expand()
              }
            />
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
        current_date={currentDate}
        albumBottomSheetRef={albumBottomSheetRef}
        addMemoryBottomSheetRef={addMemoryBottomSheetRef}
        readMemoryBottomSheetRef={readMemoryBottomSheetRef}
      />
    </SafeAreaView>
  )
})

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
