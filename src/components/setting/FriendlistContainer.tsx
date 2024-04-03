import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { themes } from '@/common/themes/themes'
import NavArrowRight from '@/assets/svg/NavArrowRight'
import Plus from '@/assets/svg/Plus'
import { useNavigation } from '@react-navigation/native'
import useFriendList from '@/hooks/useFriendList'
import { FriendList } from '@/interface/friendList_response'

interface Props {
  onCreateListPress: () => void
}

const FriendlistContainer: React.FC<Props> = props => {
  const { onCreateListPress } = props
  const navigation = useNavigation()
  const { friendList } = useFriendList()

  const [friendLists, setFriendLists] = useState<FriendList[]>([])

  useEffect(() => {
    setFriendLists(friendList)
  }, [friendList])

  return (
    <>
      <Pressable onPress={onCreateListPress} style={{ paddingHorizontal: 32 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.ellipseParent, styles.listParentFlexBox]}>
            <View style={styles.ellipseFrame}>
              <Plus color="white" width={17} height={17} />
            </View>
          </View>
          <View style={{ paddingLeft: 24, width: 240 }}>
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
          <NavArrowRight height={16} width={8} marginLeft={39} />
        </View>
      </Pressable>

      <View style={styles.divider} />

      {/* map this components */}
      {friendLists.map(item => (
        <View style={styles.listContainer} key={item.friend_list_id}>
          <Image
            style={styles.childLayout}
            resizeMode="cover"
            source={{
              uri: item.friend_id[
                Math.floor(Math.random() * item.friend_id.length)
              ].avatar
            }}
          />
          <View style={styles.peopleParent}>
            <Text style={styles.listHeading} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.listSubHeading}>{item.total} people</Text>
          </View>
          <NavArrowRight height={16} width={8} marginLeft={28} />
        </View>
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
