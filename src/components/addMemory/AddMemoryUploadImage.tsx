import { themes } from '@/common/themes/themes'
import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import PictureIcon from '@/assets/svg/Picture'
import XcloseIcon from '@/assets/svg/Xclose'
import uuid from 'react-native-uuid'

type ImaegInfo = {
  uri: string
  id: string
}

const AddMemoryUploadImage: React.FC = () => {
  const [image, setImage] = useState<ImaegInfo[]>([])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    console.log(result)

    if (!result.canceled && image.length < 10) {
      setImage([
        { uri: result.assets[0].uri as string, id: uuid.v4() as string },
        ...image
      ])
    }
  }

  const handleDelete = (id: string) => {
    setImage(image.filter(item => item.id !== id))
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {image.map((item, index) => (
            <TouchableWithoutFeedback
              key={item.id}
              // onPress={pickImage}
              style={styles.flexChild}>
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
}

export default AddMemoryUploadImage

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
    width: 350,
    height: 190,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: themes.light.tertiary.hex,
    marginHorizontal: 16
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
