import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity
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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.flexBox}>
          {memories['image_group1'].map((memory, index) => (
            <View key={index} style={styles.imageContainer}>
              <TouchableOpacity style={styles.imageInnerContainer}>
                <Image source={memory} style={styles.imageStyle} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.flexBox}>
          {memories['image_group2'].map((memory, index) => (
            <View key={index} style={styles.imageContainer}>
              <TouchableOpacity style={styles.imageInnerContainer}>
                <Image source={memory} style={styles.imageStyle} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.flexBox}>
          {memories['image_group1'].map((memory, index) => (
            <View key={index} style={styles.imageContainer}>
              <TouchableOpacity style={styles.imageInnerContainer}>
                <Image source={memory} style={styles.imageStyle} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.flexBox}>
          {memories['image_group2'].map((memory, index) => (
            <View key={index} style={styles.imageContainer}>
              <TouchableOpacity style={styles.imageInnerContainer}>
                <Image source={memory} style={styles.imageStyle} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.flexBox}>
          {memories['image_group1'].map((memory, index) => (
            <View key={index} style={styles.imageContainer}>
              <TouchableOpacity style={styles.imageInnerContainer}>
                <Image source={memory} style={styles.imageStyle} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.flexBox}>
          {memories['image_group2'].map((memory, index) => (
            <View key={index} style={styles.imageContainer}>
              <TouchableOpacity style={styles.imageInnerContainer}>
                <Image source={memory} style={styles.imageStyle} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View
          style={{
            height: 80,
            backgroundColor: '#e5e5e5e5'
          }}
        />
      </ScrollView>
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
  }
})
