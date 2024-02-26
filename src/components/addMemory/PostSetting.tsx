import { themes } from '@/common/themes/themes'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import PostSettingList from './PostSettingList'
import addMemoryStore from '@/stores/AddMemoryStore'

interface Setting {
  id: string
  title: string
}

const PostSetting: React.FC = () => {
  const [userFriendList, setUserFriendList] = useState<Setting[]>([])
  const [active, setActive] = useState<Setting>({
    id: '4c22ed6c-16a1-47dc-bf44-f1e2f8019e9d',
    title: 'Only me'
  })

  const settings: Setting[] = [
    {
      id: '5678129f-5032-4eb5-97ab-8ef0899f5749',
      title: 'Followers that you follow back'
    },
    {
      id: '4c22ed6c-16a1-47dc-bf44-f1e2f8019e9d',
      title: 'Only me'
    }
  ]

  useEffect(() => {
    setUserFriendList([
      { id: 'd356e1e4-afda-4035-8afa-48d8c309bb94', title: 'My boo' }
    ])
  }, [])

  const handleActive = (id: string, title: string) => {
    setActive({ id, title })
  }

  useEffect(() => {
    addMemoryStore.privacy = active.title
  }, [active])

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.layout}>
          <View style={{ alignItems: 'center', gap: 10 }}>
            <Text style={styles.textTitle}>Post Setting</Text>
            <Text style={styles.textSubTitle}>Who can see your post</Text>
          </View>
        </View>

        <View style={{ paddingTop: 30 }}>
          {settings.map(setting => (
            <PostSettingList
              key={setting.id}
              title={setting.title}
              handleActive={() => handleActive(setting.id, setting.title)}
              active={active.id === setting.id}
            />
          ))}
        </View>
        <View style={{ paddingTop: 20, paddingHorizontal: 50 }}>
          <Text style={styles.friendTextStyle}>Friend list</Text>
        </View>

        {userFriendList.map(item => (
          <PostSettingList
            key={item.id}
            title={item.title}
            handleActive={() => handleActive(item.id, item.title)}
            active={active.id === item.id}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default PostSetting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    paddingTop: 40
  },
  layout: {
    paddingHorizontal: 30,
    alignItems: 'center',
    gap: 20
  },
  textTitle: {
    fontSize: 24,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex
  },
  textSubTitle: {
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex
  },
  friendTextStyle: {
    fontSize: 16,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex
  }
})
