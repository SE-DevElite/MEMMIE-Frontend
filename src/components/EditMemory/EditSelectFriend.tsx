import SearchIcon from '@/assets/svg/Search'
import { themes } from '@/common/themes/themes'
import React, { useCallback, useEffect, useState } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native'
import SelectFriendList from './EditSelectFriendList'
import useFriend from '@/hooks/useFriend'
import { RefreshControl } from 'react-native-gesture-handler'
import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'
import { FriendResponse, User } from '@/interface/friend_response'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import addMemoryStore from '@/stores/AddMemoryStore'
import editMemoryStore from '@/stores/EditMemoryStore'
import { observer } from 'mobx-react'

interface Props {
  closeSheet: () => void
}

const EditSelectFriend: React.FC<Props> = observer(props => {
  const { closeSheet } = props

  const { friend } = useFriend()
  const [friendName, setFriendName] = useState<string>('')
  const [allFriend, setAllFriend] = useState<User[]>([])
  const [tempFilter, setTempFilter] = useState<User[]>([])
  const [refreshing, setRefreshing] = useState(false)

  const [selectFriendMention, setSelectFriendMention] = useState<string[]>([])

  const handleFriendMention = (id: string) => {
    if (selectFriendMention.includes(id)) {
      const temp = selectFriendMention.filter(item => item !== id)
      setSelectFriendMention(temp)
      editMemoryStore.mention = temp
    } else {
      const temp = [...selectFriendMention, id]
      setSelectFriendMention(temp)
      editMemoryStore.mention = temp
    }
  }

  const handleFilter = (friend: string) => {
    const temp = allFriend.filter(item =>
      item.name.toLowerCase().includes(friend.toLowerCase())
    )
    setTempFilter(temp)
    setFriendName(friend)
  }

  useEffect(() => {
    setAllFriend(friend?.user || [])
    setTempFilter(friend?.user || [])
  }, [friend])

  useEffect(() => {
    async function getMention() {
      if (editMemoryStore.memory_id) {
        const res = await editMemoryStore.getFriendMention()
        setSelectFriendMention(res.user.map(item => item.user_id))
      }
    }

    getMention()
  }, [editMemoryStore.memory_id])

  const onRefresh = useCallback(async () => {
    const token = await getAccessToken()

    const res: FriendResponse = await RequestWithToken(token as string)
      .get('/friendlists/friend')
      .then(res => res.data)

    setAllFriend(res.user)
    setRefreshing(false)
  }, [])

  const handleSubmit = () => {
    addMemoryStore.mention = selectFriendMention

    closeSheet()
  }

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Select Friend</Text>
          <Text style={styles.subTitleStyle}>(Pull to Refresh)</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.layout}>
        <View style={styles.inputStyle}>
          <SearchIcon color={themes.light.primary.hex} />
          <TextInput
            placeholder="Search"
            onChangeText={handleFilter}
            value={friendName}
            style={styles.textInputStyle}
            placeholderTextColor={themes.light.primary.hex}
          />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {tempFilter.map(friend => (
            <View
              key={friend.user_id}
              style={{
                ...styles.layout,
                paddingTop: 20,
                gap: 15
              }}>
              <SelectFriendList
                id={friend.user_id}
                image={friend.avatar}
                name={friend.name}
                username={friend.username}
                isActive={selectFriendMention.includes(friend.user_id)}
                onPress={handleFriendMention}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.doneButton}>
          <View style={styles.buttonBox}>
            <Text style={styles.buttonTextStyle}>Done</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
})

export default EditSelectFriend

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  layout: {
    paddingHorizontal: 20
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex
  },
  divider: {
    height: 1,
    backgroundColor: themes.light.primary.hex,
    marginVertical: 30
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#d5d5d5d5',
    borderRadius: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  textInputStyle: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 12,
    fontFamily: themes.fonts.light,
    color: themes.light.primary.hex
  },
  doneButton: {
    flex: 1,
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10
  },
  buttonBox: {
    width: '80%',
    height: 45,
    borderRadius: 30,
    backgroundColor: themes.light.tertiary.hex,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyle: {
    fontSize: 16,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex
  },
  subTitleStyle: {
    fontSize: 12,
    fontFamily: themes.fonts.light,
    color: themes.light.secondary.hex
  }
})
