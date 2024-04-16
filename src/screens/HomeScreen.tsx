import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, StyleSheet, ScrollView, RefreshControl, Text } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import BottomSheet from '@gorhom/bottom-sheet'
import { themes } from '@/common/themes/themes'
import UserHeading from '@/components/home/topContainer/UserHeading'
import MemoryContainer from '@/components/home/topContainer/MemoryContainer'
import Calendar from '@/components/home/bottomContainer/Calendar'
import DatePicker from '@/components/home/bottomContainer/DatePicker'
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
import { SafeAreaView } from 'react-native-safe-area-context'
import addMemoryStore from '@/stores/AddMemoryStore'
import MonthYearPicker from '@/components/home/bottomContainer/MonthYearPicker'
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import BottomNavigation from '@/common/BottomNavigation.common'
// import { usePushNotofication } from '@/components/usePushNotification'
import registerNNPushToken from 'native-notify';
import { registerIndieID, unregisterIndieDevice } from 'native-notify';
import axios from 'axios';


const HomeScreen: React.FC = observer(() => {
  const userId = profileStore.user_id
  const username = profileStore.username
  // console.log(userId, username)
  registerNNPushToken(20526, 'UzNfb0MDlEd7kqdfePSyDU');
  registerIndieID(`${userId}`, 20526, 'UzNfb0MDlEd7kqdfePSyDU');
  
  useEffect(() => {
      axios.post(`https://app.nativenotify.com/api/indie/notification`, {
          subID: `${userId}`,
          appId: 20526,
          appToken: 'UzNfb0MDlEd7kqdfePSyDU',
          title: `Hello, ${username}!`, 
          message: 'now, you can receive your individual notification.'
      });

      
  }, []);

  useProfile()
  
  const [refreshing, setRefreshing] = useState(false)
  const navigation = useNavigation()

  const bottomSheetRef = useRef<BottomSheet>(null)
  const handleOpenPress = () => bottomSheetRef.current?.expand()

  const albumBottomSheetRef = useRef<BottomSheet>(null)
  const addMemoryBottomSheetRef = useRef<BottomSheet>(null)
  const readMemoryBottomSheetRef = useRef<BottomSheet>(null)
  const [calendar, setCalendar] = useState<ICalendar[][]>([[]])

  // const {expoPushToken, notification} = usePushNotofication();
  // const data = JSON.stringify(notification, undefined, 2);
   

  async function getCalendar() {
    setCalendar([[]])
    const token = await getAccessToken()
    const monthNumber =
      MONTH_TO_NUMBER[
        addMemoryStore.select_month as keyof typeof MONTH_TO_NUMBER
      ]
    const dailyResponse: DailyResponse = await RequestWithToken(token as string)
      .get(`/daily-memory/${addMemoryStore.select_year}/${monthNumber}`)
      .then(res => res.data)

    setCalendar(dailyResponse.calendar)
  }

  useEffect(() => {
    getCalendar()
  }, [addMemoryStore.select_month, addMemoryStore.select_month])

  const handleMemoryBottomSheet = () => {
    addMemoryBottomSheetRef.current?.expand()
    addMemoryStore.date_time = new Date()
  }

  const onRefresh = useCallback(async () => {
    addMemoryStore.select_month = MONTH[
      new Date().getMonth() as keyof typeof MONTH
    ] as string
    addMemoryStore.select_year = new Date().getFullYear().toString()

    setRefreshing(true)
    await getProfile()
    await getCalendar()
    setRefreshing(false)
  
  }, [])

  return (
    <SafeAreaView style={styles.container} edges={['right', 'top']}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        
        <View style={styles.topOutterContainer}>
          {/* <View>
            <Text>Token: {expoPushToken?.data ?? ""}</Text>
            <Text>{data}</Text>
          </View> */}
          
          <View style={styles.topInnerContainer}>
            <UserHeading
              onPressAvatar={() =>
                navigation.navigate('ProfileScreen' as never)
              }
              avatar={profileStore.avatar}
              username={profileStore.username}
              // currentScreen={currentScreen}
              // setCurrentScreen={setCurrentScreen}
            />
            <MemoryContainer
              onAddAlbumPress={() => albumBottomSheetRef.current?.expand()}
              onAddMemoryPress={handleMemoryBottomSheet}
            />
          </View>
        </View>
        <View style={styles.bottomOutterContainer}>
          <View style={styles.bottomInnerContainer}>
            <DatePicker onOpenPress={handleOpenPress} />
            <Calendar
              calendar={calendar}
              onReadMemoryPress={() =>
                readMemoryBottomSheetRef.current?.expand()
              }
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNavigation}>
        <BottomNavigation curr_idx={0} />
      </View>

      <LongBottomSheetCommon ref={bottomSheetRef} snapPoint={['40%']}>
        <MonthYearPicker />
      </LongBottomSheetCommon>

      <HomeBottomSheetProvider
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
    width: wp('100%'),
    backgroundColor: themes.light.tertiary.hex
  },

  topInnerContainer: {
    width: wp('100%'),
    backgroundColor: 'white',
    borderBottomLeftRadius: 40,
    paddingLeft: 16,
    paddingRight: 16
  },
  bottomOutterContainer: {
    width: wp('100%'),
    backgroundColor: 'white',
    marginBottom: 32
  },

  bottomInnerContainer: {
    width: wp('100%'),
    backgroundColor: themes.light.tertiary.hex,
    borderTopRightRadius: 40
  },
  bottomNavigation: {
    position: 'absolute',
    width: '100%',
    height: 60,
    bottom: 24,
    paddingHorizontal: 16
  }
})
