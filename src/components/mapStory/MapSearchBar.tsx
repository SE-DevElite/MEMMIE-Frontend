import React, { useState } from 'react'
import FilterIcon from '@/assets/svg/Filter'
import SearchIcon from '@/assets/svg/Search'
import { TextInput, StyleSheet, View, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { themes } from '@/common/themes/themes'
import { observer } from 'mobx-react'

interface Props {
  handleOpenFilter: () => void
  handleCloseBottomSheet: () => void
}

const windowWidth = Dimensions.get('window').width

const MapSearchBar: React.FC<Props> = (props) => {
  const { handleOpenFilter, handleCloseBottomSheet } = props
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
      <TouchableOpacity onPress={handleOpenFilter}>
        <View
          style={styles.filterButton}>
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
    borderColor: themes.light.primary.hex,
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})