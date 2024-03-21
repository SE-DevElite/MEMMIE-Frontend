import React, { useState } from 'react'
import FilterIcon from '@/assets/svg/Filter'
import SearchIcon from '@/assets/svg/Search'
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native'
import { themes } from '@/common/themes/themes'
import { WindowScreen } from '@/common/consts/ConfigScreen'
import axios, { AxiosResponse } from 'axios'
import { Feature, SearchResponse } from '@/interface/search_response'
import ButtonLongCommon from '@/common/ButtonLong.common'

interface Props {
  handleCloseBottomSheet: () => void
  handleOpenMapFilter: () => void
  handleCordinates: (cor: CordinatesType) => void
}
type CordinatesType = {
  latitude: number
  longitude: number
}
const MapSearchBar: React.FC<Props> = props => {
  const { handleCloseBottomSheet, handleOpenMapFilter, handleCordinates } =
    props
  const [search, setSearch] = useState<string>('')

  const [response, setResponse] = useState<SearchResponse>()
  const handleSearch = () => {
    if (search != '') {
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            search
          )}.json?access_token=pk.eyJ1IjoibnV0dGhhbm9uIiwiYSI6ImNsbnhqZ2VsZjBpZTAya254MTZhZXY5YW4ifQ.XxtFmdV73BErWvHD0NSIbg`
        )
        .then(res => {
          setResponse(res.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    }
  }

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
          onChangeText={() => {
            handleSearch()
            console.log('\n\n')
            console.log(response)
            console.log('\n\n')
            console.log(response?.features[4]?.place_name)
            console.log(response?.features[4]?.geometry.coordinates)
          }}
        />
      </View>

      <TouchableOpacity onPress={handleOpenMapFilter}>
        <View style={styles.filterButton}>
          <FilterIcon />
        </View>
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          width: WindowScreen.Width / 1.05 - WindowScreen.Width / 5.8,
          marginLeft: WindowScreen.Width / 174,
          top: WindowScreen.Height / 23.2
          // backgroundColor: 'red'
        }}>
        {search == '' ? (
          <></>
        ) : (
          response?.features?.map((feature: Feature, index: number) => (
            <View key={index} style={{ margin: 1 }}>
              <ButtonLongCommon
                paddingHorizontal={15}
                font_size={12}
                height={WindowScreen.Height / 23.2}
                width={WindowScreen.Width / 1.05 - WindowScreen.Width / 5.8}
                title={feature.place_name}
                prefix_icon={1}
                onPress={() => {
                  const cor: CordinatesType = {
                    latitude: feature.geometry.coordinates[0],
                    longitude: feature.geometry.coordinates[1]
                  }
                  handleCordinates(cor)
                  console.log(feature.geometry.coordinates)
                }}
              />
            </View>
          ))
        )}
      </View>
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
