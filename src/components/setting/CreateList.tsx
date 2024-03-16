import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import XcloseIcon from '@/assets/svg/Xclose'
import SearchIcon from '@/assets/svg/Search'
import AvatarCommon from '@/common/Avatar.common'
import CheckboxCommon from '@/common/Checkbox.common'

const CreateList: React.FC = () => {
  const [listName, setListName] = useState('')
  const [searchListVal, setSearchListVal] = useState('')

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', paddingTop: 16 }}>
          <Text style={styles.title}>Create list</Text>
        </View>

        <View style={styles.divider} />

        <View style={{ paddingHorizontal: 24 }}>
          <Text style={styles.listName}>List name (optional)</Text>
          <View>
            <TextInput
              value={listName}
              placeholder="List"
              placeholderTextColor={themes.light.primary.hex}
              style={styles.listNameInput}
              onChangeText={setListName}
            />
            {listName.length > 0 && (
              <View style={styles.clearIcon}>
                <XcloseIcon color="white" />
              </View>
            )}
          </View>

          <View style={{ paddingVertical: 16 }}>
            <View style={styles.searchBorder}>
              <SearchIcon color={themes.light.primary.hex} width={16} />
              <TextInput
                style={{ paddingRight: 16 }}
                value={searchListVal}
                onChangeText={setSearchListVal}
                placeholder="Search"
                placeholderTextColor={themes.light.primary.hex}
              />
            </View>
          </View>
        </View>

        <View style={{ flex: 1, paddingHorizontal: 24 }}>
          <ScrollView>
            <View style={styles.friendListContainer}>
              <View>
                <AvatarCommon
                  image={require('@/assets/mocks/nutthanon-avatar.jpg')}
                  borderRadius={100}
                  width={45}
                  height={45}
                />
              </View>
              <View style={styles.nameContainer}>
                <Text style={styles.nameTitle}>Nutthanon</Text>
                <Text style={styles.nameSubTitle}>Nutthanon Thongcharoen</Text>
              </View>
              <View>
                <CheckboxCommon active={false} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  )
}

export default CreateList

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex,
    paddingBottom: 8
  },
  divider: {
    borderBottomColor: themes.light.primary.hex,
    borderBottomWidth: 1,
    marginTop: 16,
    marginBottom: 16
  },
  listName: {
    fontSize: 14,
    color: themes.light.primary.hex,
    fontFamily: themes.fonts.regular
  },
  listNameInput: {
    fontSize: 12,
    color: themes.light.primary.hex,
    fontFamily: themes.fonts.regular,
    borderBottomWidth: 1,
    borderBottomColor: themes.light.primary.hex,
    paddingVertical: 8
  },
  clearIcon: {
    position: 'absolute',
    right: 0,
    top: 5,
    padding: 5,
    backgroundColor: themes.light.primary.hex,
    borderRadius: 100
  },
  searchBorder: {
    gap: 8,
    flexDirection: 'row',
    backgroundColor: '#e5e5e5e5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100
  },
  friendListContainer: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameContainer: {
    width: '75%',
    flexDirection: 'column',
    paddingLeft: 16
  },
  nameTitle: {
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex
  },
  nameSubTitle: {
    fontSize: 11,
    fontFamily: themes.fonts.light,
    color: themes.light.primary.hex
  }
})
