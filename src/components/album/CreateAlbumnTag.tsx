import PlusIcon from '@/assets/svg/Plus'
import { themes } from '@/common/themes/themes'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CreateAlbumnTag: React.FC = () => {
  return (
    <View style={styles.tagBox}>
      <TouchableOpacity onPress={() => console.log('add tag')}>
        <View style={styles.addTagBtn}>
          <Text style={styles.addTagText}>Add Tag</Text>
          <PlusIcon color={themes.light.primary.hex} width={10} height={10} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('best friend')}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Best Friend</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CreateAlbumnTag

const styles = StyleSheet.create({
  tagBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
    // backgroundColor: themes.light.primary.hex
  },
  addTagBtn: {
    width: 90,
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
