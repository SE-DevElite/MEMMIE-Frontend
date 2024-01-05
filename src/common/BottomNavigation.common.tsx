import HomeIcon from '@/assets/svg/Home'
import PlusIcon from '@/assets/svg/Plus'
import SearchIcon from '@/assets/svg/Search'
import SettingIcon from '@/assets/svg/Setting'
import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const BottomNavigationCommon: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexBox}>
        <View style={styles.flexItem}>
          <HomeIcon />
        </View>
        <View style={styles.flexItem}>
          <PlusIcon />
        </View>
        <View style={styles.flexItem}>
          <SearchIcon />
        </View>
        <View style={styles.flexItem}>
          <SettingIcon />
        </View>
      </View>
    </View>
  )
}

export default BottomNavigationCommon

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // backgroundColor: 'blue',
    width: '100%',
    height: 60,
    bottom: 24,
    paddingHorizontal: 16
  },
  flexBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 32,
    backgroundColor: '#e5e5e5e5'
  },
  flexItem: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 32
  }
})
