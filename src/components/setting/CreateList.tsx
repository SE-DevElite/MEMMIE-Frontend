import React, { useEffect, useState } from 'react'
import { themes } from '@/common/themes/themes'
import { View, Text, StyleSheet, Touchable, Dimensions } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import XcloseIcon from '@/assets/svg/Xclose'
import SearchIcon from '@/assets/svg/Search'
import ButtonLongCommon from '@/common/ButtonLong.common'
import FriendAccountList from './FriendAccountList'
import { User } from '@/interface/friend_response'

interface Props {
  friend: User[]
}

const CreateList: React.FC<Props> = props => {
  const { friend } = props

  const [friendVal, setFriendVal] = useState<User[]>(friend)
  const [listName, setListName] = useState('')
  const [searchListVal, setSearchListVal] = useState('')
  const [waiting, setWaiting] = useState(false)

  useEffect(() => {
    setFriendVal(friend)
  }, [friend])

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

        <View
          style={{
            flex: 1,
            paddingHorizontal: 24,
            paddingBottom: 50
          }}>
          <ScrollView>
            {/* map this component */}
            {friendVal.map(item => (
              <FriendAccountList
                key={item.user_id}
                image={item.avatar}
                name={item.name}
                username={item.username}
              />
            ))}
          </ScrollView>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 24,
            width: '100%',
            paddingHorizontal: Dimensions.get('window').width * 0.1
          }}>
          <ButtonLongCommon title="Create" onPress={() => {}} />
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
  }
})
