import FilterIcon from '@/assets/svg/Filter'
import SearchIcon from '@/assets/svg/Search'
import { themes } from '@/common/themes/themes'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const CreateAlbumSearch: React.FC = () => {
  const [albumName, setAlbumName] = useState<string>('')

  return (
    <View style={{ flexDirection: 'row', gap: 10 }}>
      <View style={styles.inputStyle}>
        <SearchIcon color={themes.light.primary.hex} />
        <TextInput
          placeholder="Search"
          onChangeText={setAlbumName}
          value={albumName}
          style={styles.textInputStyle}
          placeholderTextColor={themes.light.primary.hex}
        />
      </View>
      <TouchableOpacity onPress={() => console.log('open filter album')}>
        <View style={styles.filterButton}>
          <FilterIcon />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CreateAlbumSearch

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: '#d5d5d5d5',
    borderRadius: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '85%'
  },
  textInputStyle: {
    paddingVertical: 10,
    fontSize: 12,
    fontFamily: themes.fonts.light,
    color: themes.light.primary.hex
    // backgroundColor: 'red'
  },
  filterButton: {
    width: 40,
    height: 40,
    backgroundColor: '#d5d5d5d5',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
