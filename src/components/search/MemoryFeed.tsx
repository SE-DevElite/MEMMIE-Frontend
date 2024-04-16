import { MemoryFeedI } from '@/interface/feed_response'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

interface Props {
  feed: MemoryFeedI[]
}

const MemoryFeed: React.FC<Props> = props => {
  const { feed } = props
  const [feedVal, setFeedVal] = useState<MemoryFeedI[]>([])

  useEffect(() => {
    setFeedVal(feed)
  }, [feed])

  return (
    <View style={{ height: '100%', paddingBottom: 320 }}>
      <ScrollView>
        <View style={styles.container}>
          {feed.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: '48%',
                  height: 170,
                  backgroundColor: '#e5e5e5e5',
                  borderRadius: 50
                }}>
                <Image
                  source={{ uri: item.memory_lists[0].memory_url as string }}
                  style={{ width: '100%', height: 170, borderRadius: 50 }}
                />
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default MemoryFeed

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    paddingHorizontal: 16
    // flex: 1
  }
})
