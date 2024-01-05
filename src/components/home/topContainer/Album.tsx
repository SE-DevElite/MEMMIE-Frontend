import React from 'react'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

const Album: React.FC = () => {
  return (
    <Box style={styles.box}>
      <View style={styles.flex}>
        <TextStyle style={styles.textStyle}>Albums</TextStyle>
        <TouchableOpacity
          style={styles.circleTouch}
          onPress={() => console.log('Add album')}>
          <Image
            style={styles.imageStyle}
            source={require('@/assets/icons/add.png')}
          />
        </TouchableOpacity>
      </View>
      {/* <ImageGroup></ImageGroup> */}
    </Box>
  )
}

export default Album

const styles = StyleSheet.create({
  box: {
    width: 180,
    height: 180,
    borderRadius: 30,
    padding: 13
  },
  flex: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textStyle: {
    fontSize: 16
  },
  circleTouch: {
    width: 32,
    height: 24,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'

    // backgroundColor: 'red'
  },
  imageStyle: {
    width: 11,
    height: 11
  }
})

const Box = styled.View`
  background-color: ${themes.light.tertiary.hex};
`

const TextStyle = styled.Text`
  color: ${themes.light.secondary.hex};
  font-family: ${themes.fonts.samiBold};
`
