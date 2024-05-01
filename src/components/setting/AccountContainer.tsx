import React, { useEffect, useMemo } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import NavArrowRight from '@/assets/svg/NavArrowRight'
import { themes } from '@/common/themes/themes'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import profileStore from '@/stores/ProfileStore'
import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'

const AccountContainer: React.FC = () => {
  const [email, setEmail] = React.useState('')

  useEffect(() => {
    async function getEmail() {
      const token = await getAccessToken()
      const res = await RequestWithToken(token as string)
        .get('/auth/profile')
        .then(res => res.data)

      setEmail(res.email)
    }

    getEmail()
  }, [])

  const navigation = useNavigation()
  return (
    <View style={styles.account}>
      <Text style={[styles.account1]}>Account</Text>
      <View style={styles.underline} />
      <View style={styles.list}>
        <View style={[styles.list1, styles.list1Position]}>
          <TouchableOpacity
            style={styles.email}
            onPress={() => navigation.navigate('EmailScreen' as never)}>
            <View style={[styles.flexBox, styles.parentFlexBox]}>
              <Text style={[styles.email1, styles.detailTypo]}>Email</Text>
              <View style={[styles.mailParent, styles.parentFlexBox]}>
                <Text style={[styles.exampleMail, styles.exampleTypo]}>
                  {email}
                </Text>
                <NavArrowRight width={5} height={10} marginLeft={8} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.dateOfBirth, styles.spaceBlock]}
            onPress={() => navigation.navigate('DateOfBirthScreen' as never)}>
            <View style={[styles.flexBox, styles.parentFlexBox]}>
              <Text style={[styles.dateOfBirth1, styles.detailTypo]}>
                Date of birth
              </Text>
              <View style={[styles.dateParent, styles.parentFlexBox]}>
                <Text style={[styles.exampleDate, styles.exampleTypo]}>
                  15 Nov 2002
                </Text>
                <NavArrowRight width={5} height={10} marginLeft={8} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.password, styles.spaceBlock]}
            onPress={() => navigation.navigate('PasswordScreen' as never)}>
            <Text style={[styles.password1, styles.detailTypo]}>Password</Text>
            <NavArrowRight width={5} height={10} marginLeft={228} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.password, styles.spaceBlock]}
            onPress={() => navigation.navigate('LinkedAccountScreen' as never)}>
            <Text style={[styles.linkedAccounts, styles.detailTypo]}>
              Linked accounts
            </Text>
            <NavArrowRight width={5} height={10} marginLeft={183} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.password, styles.spaceBlock]}
            onPress={() => navigation.navigate('FriendlistScreen' as never)}>
            <Text style={[styles.password1, styles.detailTypo]}>
              Friendlist
            </Text>
            <NavArrowRight width={5} height={10} marginLeft={228} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  list1Position: {
    left: 0,
    position: 'absolute'
  },
  parentFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  underline: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    top: 22,
    maxHeight: '100%',
    width: 375,
    backgroundColor: themes.light.secondary.hex
  },
  detailTypo: {
    color: themes.light.primary.hex,
    lineHeight: 16,
    fontSize: 14,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    fontFamily: themes.fonts.regular
  },
  exampleTypo: {
    lineHeight: 12,
    fontSize: 10,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    color: themes.light.secondary.hex,
    fontFamily: themes.fonts.regular
  },
  spaceBlock: {
    marginTop: 16,
    width: 309
  },
  account1: {
    left: 13,
    fontSize: 12,
    lineHeight: 14,
    width: 56,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    color: themes.light.secondary.hex,
    fontFamily: themes.fonts.regular,
    position: 'absolute',
    top: 0
  },
  email1: {
    width: 40
  },
  exampleMail: {
    width: 150
  },
  mailParent: {
    marginLeft: 105
  },
  flexBox: {
    left: 0,
    position: 'absolute',
    top: 0
  },
  email: {
    width: 308,
    height: 16
  },
  dateOfBirth1: {
    width: 91
  },
  exampleDate: {
    width: 59
  },
  dateParent: {
    marginLeft: 146
  },
  dateOfBirth: {
    height: 16
  },
  password1: {
    width: 76
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  linkedAccounts: {
    width: 121
  },
  list1: {
    top: 0,
    left: 0
  },
  list: {
    top: 38,
    left: 33,
    height: 144,
    width: 309,
    position: 'absolute'
  },
  account: {
    height: 182,
    width: 375
  }
})
export default AccountContainer
