import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { themes } from '@/common/themes/themes'
import NavArrowRight from '@/assets/svg/NavArrowRight'
import Plus from '@/assets/svg/Plus'
import { useNavigation } from '@react-navigation/native'
import useFriendList from '@/hooks/useFriendList'
import { FriendList } from '@/interface/friendList_response'
import ListOfFriendList from './ListOfFriendList'

interface Props {
  onCreateListPress: () => void
  onFriendListPress: (friendList_id: FriendList) => void
}

const FriendlistContainer: React.FC<Props> = props => {
  const { onCreateListPress, onFriendListPress } = props
  const navigation = useNavigation()
  const { friendList } = useFriendList()

  const [friendLists, setFriendLists] = useState<FriendList[]>([])

  useEffect(() => {
    setFriendLists(friendList)
  }, [friendList])

  return (
    <>
      <Pressable onPress={onCreateListPress} style={{ paddingHorizontal: 32, paddingRight: 52 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.ellipseParent, styles.listParentFlexBox]}>
            <View style={styles.ellipseFrame}>
              <Plus color="white" width={17} height={17} />
            </View>
          </View>
          <View style={{ paddingLeft: 24, paddingRight: 16, width: 240, flexGrow: 1 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: themes.fonts.regular,
                color: themes.light.primary.hex
              }}>
              Create a new list
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontFamily: themes.fonts.regular,
                color: themes.light.secondary.hex
              }}>
              With lists, you choose who gets to see each memory you share.
            </Text>
          </View>
          <NavArrowRight height={16} width={16} marginLeft={39} />
        </View>
      </Pressable>

      <View style={styles.divider} />

      {/* map this components */}
      {friendLists.map(item => (
        <ListOfFriendList
          key={item.friend_list_id}
          friendList_id={item.friend_list_id}
          title={item.name}
          thumbnail={item.friend_id[0].avatar}
          amount={item.friend_id.length}
          onPress={() => onFriendListPress(item)}
        />
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listHeading: {
    fontSize: 16,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex
  },
  listSubHeading: {
    fontSize: 11,
    fontFamily: themes.fonts.light,
    color: themes.light.secondary.hex
  },
  listParentFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  childLayout: {
    height: 38,
    width: 38,
    borderRadius: 100
  },
  peopleParent: {
    width: 240,
    justifyContent: 'center',
    paddingLeft: 24
  },
  ellipseParent: {
    paddingHorizontal: 0
  },
  ellipseFrame: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: themes.light.secondary.hex,
    justifyContent: 'center',
    alignItems: 'center'
  },
  withListsYou: {
    marginTop: 4
  },
  createANewListParent: {
    marginLeft: 16
  },
  divider: {
    height: 1,
    backgroundColor: themes.light.secondary.hex,
    marginTop: 24
  }
})

export default FriendlistContainer
