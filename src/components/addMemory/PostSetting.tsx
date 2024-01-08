import { themes } from '@/common/themes/themes'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PostSettingList from './PostSettingList'

interface Setting {
  id: string
  title: string
  key: string
}

type ActiveProps = {
  everyone: boolean
  peopleYouFollow: boolean
  followersThatYouFollowBack: boolean
  onlyMe: boolean
}

const PostSetting: React.FC = () => {
  const [active, setActive] = useState<ActiveProps>({
    everyone: false,
    peopleYouFollow: false,
    followersThatYouFollowBack: false,
    onlyMe: false
  })

  const settings: Setting[] = [
    { id: '1', title: 'Everyone', key: 'everyone' },
    { id: '2', title: 'People you follow', key: 'peopleYouFollow' },
    {
      id: '3',
      title: 'Followers that you follow back',
      key: 'followersThatYouFollowBack'
    },
    { id: '4', title: 'Only me', key: 'onlyMe' }
  ]

  const setActiveSetting = (id: string) => {
    const newActive: ActiveProps = {
      everyone: id === '1',
      peopleYouFollow: id === '2',
      followersThatYouFollowBack: id === '3',
      onlyMe: id === '4'
    }
    setActive(newActive)
  }

  const handleActive = (id: string) => {
    setActiveSetting(id)
  }

  const handleFriendList = () => {}

  return (
    <View style={styles.container}>
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
            handleActive={() => handleActive(setting.id)}
            active={active[setting.key as keyof ActiveProps] as boolean}
          />
        ))}
      </View>
      <View style={{ paddingTop: 20, paddingHorizontal: 50 }}>
        <Text style={styles.friendTextStyle}>Friend list</Text>
      </View>

      <PostSettingList
        title={'My boo'}
        handleActive={handleFriendList}
        active={true}
      />
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
