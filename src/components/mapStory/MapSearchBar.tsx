import React, { useState } from 'react'
import FilterIcon from '@/assets/svg/Filter'
import SearchIcon from '@/assets/svg/Search'
import {
  TextInput,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { themes } from '@/common/themes/themes'
import { WindowScreen } from '@/common/consts/ConfigScreen'

interface Props {
  handleCloseBottomSheet: () => void
  handleOpenMapFilter: () => void
}

const MapSearchBar: React.FC<Props> = props => {
  const { handleCloseBottomSheet, handleOpenMapFilter } = props
  const [search, setSearch] = useState<string>('')

  const handlePress = () => {
    handleOpenMapFilter()
  }

  return (
    <View
      style={{
        position: 'absolute',
        top: 180,
        zIndex: 2,
        width: WindowScreen.Width,
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
          width: WindowScreen.Width / 1.05 - WindowScreen.Width / 5.8,
          flexDirection: 'row',
          gap: 5,
          borderColor: '#E5E5E5',
          borderWidth: 1
        }}>
        <SearchIcon />
        <TextInput
          value={search}
          onChange={e => setSearch(e.nativeEvent.text)}
          style={{
            width: '90%',
            color: themes.light.primary.hex
          }}
          placeholder="Search"
          placeholderTextColor={themes.light.secondary.hex}
        />
      </View>
      <TouchableOpacity onPress={handleOpenMapFilter}>
        <View style={styles.filterButton}>
          <FilterIcon />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default MapSearchBar

const styles = StyleSheet.create({
  filterButton: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
