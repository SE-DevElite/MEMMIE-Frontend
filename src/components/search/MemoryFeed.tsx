import React, { useState } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'

const MemoryGroup: React.FC = () => {
  const memories = {
    image_group1: [
      require('@/assets/mocks/nutthanon-avatar.jpg'),
      require('@/assets/mocks/nutthanon-rb.png'),
      require('@/assets/mocks/nut-riw-ronan.png')
    ],
    image_group2: [
      require('@/assets/mocks/nutthanon-rb.png'),
      require('@/assets/mocks/nut-ronan.png'),
      require('@/assets/mocks/nutthanon-avatar.jpg')
    ]
  }

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImagePress = (image: string) => {
    setSelectedImage(image)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.flexBox}>
          {memories['image_group1'].map((memory, index) => (
            <View key={index} style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.imageInnerContainer}
                onPress={() => handleImagePress(memory)}>
                <Image source={memory} style={styles.imageStyle} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.flexBox}>
          {memories['image_group2'].map((memory, index) => (
            <View key={index} style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.imageInnerContainer}
                onPress={() => handleImagePress(memory)}>
                <Image source={memory} style={styles.imageStyle} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {selectedImage && (
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Image source={selectedImage} style={styles.modalImage} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </Modal>
    </View>
  )
}

export default MemoryGroup

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 12
  },
  scrollView: {
    height: hp('84%')
  },
  flexBox: {
    flexDirection: 'row',
    gap: 8
  },
  imageContainer: {
    flex: 1,
    aspectRatio: 1,
    marginBottom: 8,
    overflow: 'hidden',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageInnerContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 40
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 20
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 20
  }
})
