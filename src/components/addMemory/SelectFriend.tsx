import SearchIcon from '@/assets/svg/Search'
import { themes } from '@/common/themes/themes'
import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native'
import SelectFriendList from './SelectFriendList'

const SelectFriend: React.FC = () => {
  const [friendName, setFriendName] = useState<string>('')

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Select Friend</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.layout}>
        <View style={styles.inputStyle}>
          <SearchIcon color={themes.light.primary.hex} />
          <TextInput
            placeholder="Search"
            onChangeText={setFriendName}
            value={friendName}
            style={styles.textInputStyle}
            placeholderTextColor={themes.light.primary.hex}
          />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              ...styles.layout,
              paddingTop: 20,
              gap: 15
            }}>
            <SelectFriendList
              image={require('@/assets/mocks/nutthanon-avatar.jpg')}
              name="__n.tc__"
              username="Nutthanon Thongcharoen"
            />
            <SelectFriendList
              image={require('@/assets/mocks/nutthanon-rb.png')}
              name="lnw nutthanon"
              username="Team0x0a"
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.doneButton}>
        <View style={styles.buttonBox}>
          <Text style={styles.buttonTextStyle}>Done</Text>
        </View>
      </View>
    </View>
  )
}

export default SelectFriend

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  layout: {
    paddingHorizontal: 20
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex
  },
  divider: {
    height: 1,
    backgroundColor: themes.light.primary.hex,
    marginVertical: 30
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#d5d5d5d5',
    borderRadius: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  textInputStyle: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 12,
    fontFamily: themes.fonts.light,
    color: themes.light.primary.hex
  },
  doneButton: {
    flex: 1,
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10
  },
  buttonBox: {
    width: '80%',
    height: 45,
    borderRadius: 30,
    backgroundColor: themes.light.tertiary.hex,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyle: {
    fontSize: 16,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex
  }
})