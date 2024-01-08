import React, { useState } from 'react'
import PlusIcon from '@/assets/svg/Plus'
import HomeIcon from '@/assets/svg/Home'
import SearchIcon from '@/assets/svg/Search'
import SettingIcon from '@/assets/svg/Setting'
import { View, StyleSheet, Touchable, TouchableOpacity } from 'react-native'

const BottomNavigationCommon: React.FC = () => {
  const [currentState, setCurrentState] = useState<number>(0)

  const icons = [
    {
      icon: <HomeIcon color={currentState === 0 ? '#fff' : '#A56073'} />,
      label: 'Home'
    },
    {
      icon: <PlusIcon color={currentState === 1 ? '#fff' : '#A56073'} />,
      label: 'Add'
    },
    {
      icon: <SearchIcon color={currentState === 2 ? '#fff' : '#A56073'} />,
      label: 'Search'
    },
    {
      icon: <SettingIcon color={currentState === 3 ? '#fff' : '#A56073'} />,
      label: 'Setting'
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.flexBox}>
        {icons.map((item, index) => (
          <View key={index} style={{ position: 'relative' }}>
            <View
              style={{
                position: 'absolute',
                flex: 1,
                backgroundColor: 'red',
                top: -10,
                left: 0,
                right: 0,
                bottom: 0
              }}
            />

            <View style={index === currentState ? styles.dot : {}}>
              <View />
            </View>

            <TouchableOpacity
              onPress={() => setCurrentState(index)}
              style={{
                ...styles.flexItem,
                backgroundColor:
                  currentState === index ? '#A56073' : 'transparent'
              }}>
              {item.icon}
            </TouchableOpacity>
          </View>
        ))}
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
  },
  dot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#A56073',
    left: '50%',
    marginLeft: -4,
    top: -15,
    zIndex: 1
  }
})
