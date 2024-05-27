import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, Text, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MemoryFeed from '@/components/search/MemoryFeed'
import SearchIcon from '@/assets/svg/Search'
import {
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListUserProfile from '@/components/search/ListUserProfile'
import useFeed from '@/hooks/useFeed'
import { getAccessToken } from '@/helpers/TokenHandler'
import { RequestWithToken } from '@/api/DefaultRequest'
import BottomNavigation from '@/common/BottomNavigation.common'
import { themes } from '@/common/themes/themes'
import { WindowScreen } from '@/common/consts/ConfigScreen'

type UserRoot = {
  user_id: string
  name: string
  username: string
  avatar: string
}

const SearchScreen: React.FC = () => {
  const { memoryFeed } = useFeed()
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const [userValue, setUserValue] = useState<UserRoot[]>([])

  const handleChange = async (value: string) => {
    setSearchValue(value)
    const token = await getAccessToken()

    const res = await RequestWithToken(token as string)
      .get(`search/users?query=${value}`)
      .then(res => res.data)

    console.log(res, `search/users?query=${value}`)

    setUserValue(res as UserRoot[])
  }

  const closeKeyBoard = () => {
    Keyboard.dismiss()
    setIsSearch(false)
  }

  return (
    <SafeAreaView edges={['right', 'top']}>
      <TouchableWithoutFeedback onPress={closeKeyBoard}>
        <View style={styles.container}>
          <View style={styles.searchBar}>
            <View
              style={[styles.inputStyle, { width: isSearch ? '85%' : '100%' }]}>
              <SearchIcon />
              <TextInput
                value={searchValue}
                onChangeText={handleChange}
                style={{
                  flexGrow: 1,
                  height: '100%'
                }}
                placeholder="Search"
                onFocus={() => setIsSearch(true)}
              />
            </View>
            {isSearch ? (
              <Text style={{ color: themes.light.primary.hex }}>cancel</Text>
            ) : (
              ''
            )}
          </View>
        </View>
        {isSearch ? (
          <View style={{ height: '100%' }}>
            <ScrollView>
              {userValue.map(item => (
                <ListUserProfile
                  key={item.user_id}
                  user_id={item.user_id}
                  name={item.name}
                  username={item.username}
                  avatar={item.avatar}
                />
              ))}
            </ScrollView>
          </View>
        ) : (
          <MemoryFeed feed={memoryFeed || []} />
        )}
      </TouchableWithoutFeedback>

      <View style={styles.bottomNavigation}>
        <BottomNavigation curr_idx={2} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  searchBar: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 16
  },
  inputStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 10,
    borderWidth: 1,
    borderColor: '#d5d5d5d5'
  },
  bottomNavigation: {
    position: 'absolute',
    width: '100%',
    height: 60,
    bottom: 100,
    paddingHorizontal: WindowScreen.Width / 23.2
  }
})

export default SearchScreen
