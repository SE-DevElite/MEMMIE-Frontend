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
      require('@/assets/mocks/nut-ronan.png')
    ]
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.flexBox}>
          <View style={{ flex: 1 }}>
            {memories['image_group1'].map((memory, index) => (
              <TouchableOpacity key={index} style={styles.imageContainer}>
                <Image source={memory} style={styles.imageStyle} />
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ flex: 1 }}>
            {memories['image_group2'].map((memory, index) => (
              <TouchableOpacity style={styles.imageContainer} key={index}>
                <Image source={memory} style={styles.imageStyle} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
          style={{
            height: 80,
            backgroundColor: '#e5e5e5e5'
          }}></View>
      </ScrollView>
    </View>
  )
}

export default MemoryGroup

const styles = StyleSheet.create({
  container: {
    paddingTop: 16
  },
  scrollView: {
    height: hp('65%')
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
    borderRadius: 64
  },
  imageStyle: {
    flex: 1,
    width: wp('43.5%'),
    resizeMode: 'cover',
    borderRadius: 64
  }
})
