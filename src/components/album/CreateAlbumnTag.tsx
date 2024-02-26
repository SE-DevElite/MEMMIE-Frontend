import PlusIcon from '@/assets/svg/Plus'
import { themes } from '@/common/themes/themes'
import addAlbumStore from '@/stores/AddAlbumStore'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native'
import uuid from 'react-native-uuid'

type Tag = {
  id: string
  name: string
  state: boolean
}

const CreateAlbumnTag: React.FC = () => {
  const [writeTag, setWriteTag] = useState(false)
  const [tagInput, setTagInput] = useState('')
  const [tag, setTag] = useState<Tag[]>([])

  const handleDeleteTag = (id: string) => {
    const curr_tag = tag.find(item => item.id === id)

    if (curr_tag?.state) {
      setTag(tag.filter(item => item.id !== id))
    } else {
      setTag(
        tag.map(item => (item.id === id ? { ...item, state: true } : item))
      )
    }
  }

  const handleSaveTag = () => {
    setWriteTag(!writeTag)

    if (writeTag && tagInput !== '') {
      setTag([
        ...tag,
        {
          id: uuid.v4() as string,
          name: tagInput,
          state: false
        }
      ])

      addAlbumStore.tags = tag.map(item => item.name)
      setTagInput('')
    }
  }

  return (
    <View style={styles.tagBox}>
      <TouchableOpacity onPress={handleSaveTag}>
        <View style={styles.addTagBtn}>
          {writeTag ? (
            <>
              <TextInput
                style={{
                  fontSize: 12,
                  fontFamily: themes.fonts.medium,
                  paddingHorizontal: 5,
                  paddingVertical: 0
                }}
                placeholder="Add Tag"
                value={tagInput}
                onChangeText={text => setTagInput(text)}
              />
            </>
          ) : (
            <>
              <Text style={styles.addTagText}>Add Tag</Text>
              <PlusIcon
                color={themes.light.primary.hex}
                width={10}
                height={10}
              />
            </>
          )}
        </View>
      </TouchableOpacity>

      {tag.map(item => (
        <TouchableOpacity
          onPress={() => handleDeleteTag(item.id)}
          key={item.id}>
          <View
            style={[
              styles.badge,
              {
                backgroundColor: item.state
                  ? '#FF8F8F'
                  : themes.light.tertiary.hex
              }
            ]}>
            <Text
              style={[
                styles.badgeText,
                {
                  color: item.state ? '#7f1d1d' : themes.light.secondary.hex
                }
              ]}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default CreateAlbumnTag

const styles = StyleSheet.create({
  tagBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
    // backgroundColor: themes.light.primary.hex
  },
  addTagBtn: {
    minWidth: 90,
    height: 30,
    borderWidth: 1,
    borderColor: themes.light.primary.hex,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5
  },
  addTagText: {
    fontSize: 12,
    fontFamily: themes.fonts.medium,
    color: themes.light.primary.hex
  },
  badge: {
    // width: 10,
    height: 30,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.light.tertiary.hex,
    borderRadius: 100
  },
  badgeText: {
    fontSize: 12,
    fontFamily: themes.fonts.medium,
    color: themes.light.secondary.hex
  }
})
