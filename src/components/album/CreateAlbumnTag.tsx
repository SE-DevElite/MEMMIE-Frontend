import PlusIcon from '@/assets/svg/Plus'
import { themes } from '@/common/themes/themes'
import addAlbumStore from '@/stores/AddAlbumStore'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import uuid from 'react-native-uuid'

const CreateAlbumnTag: React.FC = observer(() => {
  const [writeTag, setWriteTag] = useState(false)
  const [tagInput, setTagInput] = useState('')

  const handleDeleteTag = (id: string) => {
    const curr_tag = addAlbumStore.tags.find(item => item.id === id)

    if (curr_tag?.state) {
      addAlbumStore.tags = addAlbumStore.tags.filter(item => item.id !== id)
    } else {
      addAlbumStore.tags = addAlbumStore.tags.map(item =>
        item.id === id ? { ...item, state: true } : item
      )
    }
  }

  const handleSaveTag = () => {
    setWriteTag(!writeTag)

    if (writeTag && tagInput !== '') {
      addAlbumStore.tags = [
        {
          id: uuid.v4() as string,
          name: tagInput,
          state: false
        },
        ...addAlbumStore.tags
      ]

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
                  paddingVertical: 0,
                  color: themes.light.primary.hex
                }}
                placeholder="Add Tag"
                value={tagInput}
                onChangeText={text => setTagInput(text)}
                onSubmitEditing={handleSaveTag}
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

      {addAlbumStore.tags.map(item => (
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
})

export default CreateAlbumnTag

const styles = StyleSheet.create({
  tagBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
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
