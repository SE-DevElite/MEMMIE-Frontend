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

const windowWidth = Dimensions.get('window').width

const AddMemoryUploadImage: React.FC = observer(() => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled && addMemoryStore.image_info.length < 10) {
      addMemoryStore.image_info = [
        { uri: result.assets[0].uri as string, id: uuid.v4() as string },
        ...addMemoryStore.image_info
      ]
    }
  }

  const handleDelete = (id: string) => {
    addMemoryStore.image_info = addMemoryStore.image_info.filter(
      item => item.id !== id
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled>
          {addMemoryStore.image_info.map(item => (
            <TouchableWithoutFeedback key={item.id} style={styles.flexChild}>
              <View style={styles.closeIcon}>
                <TouchableWithoutFeedback onPress={() => handleDelete(item.id)}>
                  <XcloseIcon color={themes.light.primary.hex} />
                </TouchableWithoutFeedback>
              </View>
              <Image source={{ uri: item.uri }} style={styles.imageStyle} />
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

export default AddMemoryUploadImage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 320
  },
  imageContainer: {
    alignItems: 'center',
    gap: 16,
    marginHorizontal: 30
    // backgroundColor: 'red'
  },
  flexChild: {
    width: windowWidth - windowWidth / 5.8,
    height: 190,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: themes.light.tertiary.hex,
    marginHorizontal: 5
  },
  imageStyle: {
    minHeight: 190,
    backgroundColor: themes.light.tertiary.hex,
    resizeMode: 'cover',
    borderRadius: 30,
    flex: 1
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
