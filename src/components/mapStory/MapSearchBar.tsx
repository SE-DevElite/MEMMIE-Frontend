import React, { useState } from 'react'
import FilterIcon from '@/assets/svg/Filter'
import SearchIcon from '@/assets/svg/Search'
import { TextInput, StyleSheet, View, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { themes } from '@/common/themes/themes'

const windowWidth = Dimensions.get('window').width

const MapSearchBar: React.FC = () => {
  const [search, setSearch] = useState<string>('')

  return (
    <View
      style={{
        position: 'absolute',
        top: 180,
        zIndex: 2,
        width: windowWidth,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
      }}>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 100,
          backgroundColor: 'white',
          width: windowWidth - 85,
          flexDirection: 'row',
          gap: 5
        }}>
        <SearchIcon />
        <TextInput
          value={search}
          onChange={e => setSearch(e.nativeEvent.text)}
          style={{ width: '90%', color: themes.light.primary.hex }}
          placeholder="Search"
          placeholderTextColor={themes.light.primary.hex}
        />
      </View>
      <TouchableOpacity onPress={() => console.log('filter')}>
        <View
          style={{
            width: 35,
            height: 35,
            backgroundColor: 'white',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <FilterIcon />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default MapSearchBar
