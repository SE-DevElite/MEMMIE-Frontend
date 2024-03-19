import React from 'react'
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native'
import { themes } from '@/common/themes/themes'
import { useNavigation } from '@react-navigation/native'
import BottomNavigationCommon from '@/common/BottomNavigation.common'
import ButtonLongCommon from '@/common/ButtonLong.common'
import Search from '@/assets/svg/Search'
import MemoryFeed from '@/components/search/MemoryFeed'
import FindFriendScreen from './FindFriendScreen'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const SearchScreen: React.FC = () => {
  const navigation = useNavigation()

  const handleButtonPress = () => {
    navigation.navigate('FindFriendScreen' as never)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <ButtonLongCommon
          title="Search"
          fonts={themes.fonts.regular}
          font_size={12}
          height={45}
          onPress={handleButtonPress}
          background_color="white"
          color={themes.light.primary.hex}
          prefix_icon={Search}
        />
      </View>
      <MemoryFeed />
      <BottomNavigationCommon navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  searchBar: {
    flex: 1,
    top: windowHeight / 11.88,
    paddingHorizontal: windowWidth / 11.88
  }
})

export default SearchScreen
