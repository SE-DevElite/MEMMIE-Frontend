import { themes } from '@/common/themes/themes'
import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import PictureIcon from '@/assets/svg/Picture'
import XcloseIcon from '@/assets/svg/Xclose'
import uuid from 'react-native-uuid'
import addMemoryStore from '@/stores/AddMemoryStore'
import { observer } from 'mobx-react'
import editMemoryStore from '@/stores/EditMemoryStore'

const windowWidth = Dimensions.get('window').width

const EditMemoryUploadImage: React.FC = observer(() => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled && editMemoryStore.memory_lists.length < 10) {
      editMemoryStore.memory_lists = [
        {
          created_at: new Date().toString(),
          memory_url: result.assets[0].uri as string,
          memory_list_id: uuid.v4() as string
        },
        ...editMemoryStore.memory_lists
      ]
    }
  }

  const handleDelete = (id: string) => {
    editMemoryStore.memory_lists = editMemoryStore.memory_lists.filter(
      item => item.memory_list_id !== id
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled>
          {editMemoryStore.memory_lists.map(item => (
            <TouchableWithoutFeedback
              key={item.memory_list_id}
              style={styles.flexChild}>
              <View style={styles.closeIcon}>
                <TouchableWithoutFeedback
                  onPress={() => handleDelete(item.memory_list_id)}>
                  <XcloseIcon color={themes.light.primary.hex} />
                </TouchableWithoutFeedback>
              </View>
              {item.memory_url ? (
                <Image
                  source={{ uri: item.memory_url }}
                  style={styles.imageStyle}
                />
              ) : (
                <></>
              )}
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>

      <View style={styles.bottomStyle}>
        <TouchableOpacity onPress={pickImage} style={styles.iconContainer}>
          <PictureIcon />
        </TouchableOpacity>
      </View>
    </View>
  )
})

export default EditMemoryUploadImage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 320
  },
  imageContainer: {
    alignItems: 'center'
    // backgroundColor: 'red'
  },
  flexChild: {
    width: windowWidth - 60,
    height: 190,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: themes.light.tertiary.hex
    // marginHorizontal: 16
  },
  imageStyle: {
    minHeight: 190,
    backgroundColor: themes.light.tertiary.hex,
    resizeMode: 'cover',
    borderRadius: 30
  },
  closeIcon: {
    position: 'absolute',
    padding: 7,
    backgroundColor: themes.light.tertiary.hex,
    top: 15,
    right: 15,
    zIndex: 3,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomStyle: {
    borderTopWidth: 1,
    justifyContent: 'center',
    borderTopColor: themes.light.primary.hex,
    height: 40,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  iconContainer: {
    backgroundColor: themes.light.tertiary.hex,
    paddingVertical: 15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
