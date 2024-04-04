import React, { useState } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { observer } from 'mobx-react'
import { ScrollView } from 'react-native-gesture-handler'
import { themes } from '@/common/themes/themes'
import readMemoryStore from '@/stores/ReadMemoryStore'
import { WindowScreen } from '@/common/consts/ConfigScreen'

interface Props {}

const ReadMemoryImage: React.FC<Props> = observer(props => {
  return (
    <View>
      <View style={styles.imageContainer}>
        {readMemoryStore.memory_lists ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled>
            {readMemoryStore.memory_lists.map((item, index) => (
              <View key={item.memory_list_id} style={styles.flexChild}>
                {item.memory_url ? (
                  <ImageBackground
                    source={{ uri: item.memory_url }}
                    style={styles.imageStyle}
                  />
                ) : (
                  <></>
                )}
              </View>
            ))}
          </ScrollView>
        ) : (
          <></>
        )}
      </View>
    </View>
  )
})

export default ReadMemoryImage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 320
  },
  imageContainer: {
    alignItems: 'center',
    gap: 16
    // backgroundColor: 'red'
  },
  flexChild: {
    width: WindowScreen.Width - WindowScreen.Width / 5.8,
    height: 250,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: themes.light.tertiary.hex,
    marginHorizontal: 5
  },
  imageStyle: {
    minHeight: 250,
    backgroundColor: themes.light.tertiary.hex,
    resizeMode: 'center',
    borderRadius: 30,
    flex: 1
  }
})
