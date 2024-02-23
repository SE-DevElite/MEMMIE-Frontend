import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import UserHeading from '@/components/home/topContainer/UserHeading'
import MapViewStory from '@/components/mapStory/MapViewStory'
import { useNavigation } from '@react-navigation/native'
import MapSearchBar from '@/components/mapStory/MapSearchBar'

interface MapStoryScreenProps {
  avatar: string
  username: string
}

const MapStoryScreen: React.FC<MapStoryScreenProps> = props => {
  const { avatar, username } = props
  const navigation = useNavigation()

  return (
    <View>
      <View style={styles.userHeading}>
        <UserHeading
          onPressAvatar={() => navigation.navigate('ProfileScreen' as never)}
          avatar={
            'https://i.pinimg.com/564x/96/f4/eb/96f4eb050895ed555700f9ee77496c72.jpg'
          }
          username={username}
        />
      </View>
      <MapSearchBar />
      <MapViewStory />
    </View>
  )
}

export default MapStoryScreen

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userHeading: {
    paddingTop: 10,
    position: 'absolute',
    zIndex: 1,
    top: 30,
    left: windowWidth / 2 - 175
  }
})
