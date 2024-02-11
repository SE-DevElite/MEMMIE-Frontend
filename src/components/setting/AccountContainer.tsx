import React, { useMemo } from 'react'
import {
  Text,
  View,
  Pressable,
  Image,
  ImageSourcePropType,
  StyleSheet
} from 'react-native'
import NavArrowRight from '@/assets/svg/NavArrowRight'
import { themes } from '@/common/themes/themes'

type AccountContainerProps = {
  onEmailPress?: () => void
  onDateOfBirthPress?: () => void
  onPasswordPress?: () => void
  onLinkedAccountPress?: () => void
  onFriendListPress?: () => void
}

const AccountContainer: React.FC<AccountContainerProps> = ({
  onEmailPress,
  onDateOfBirthPress,
  onPasswordPress,
  onLinkedAccountPress,
  onFriendListPress
}) => {
  return (
    <View style={styles.account}>
      <Text style={[styles.account1]}>Account</Text>
      <View style={styles.underline} />
      <View style={styles.list}>
        <View style={[styles.list1, styles.list1Position]}>
          <Pressable style={styles.email} onPress={onEmailPress}>
            <View style={[styles.flexBox, styles.parentFlexBox]}>
              <Text style={[styles.email1, styles.detailTypo]}>Email</Text>
              <View style={[styles.mailParent, styles.parentFlexBox]}>
                <Text style={[styles.exampleMail, styles.exampleTypo]}>
                  Lo**m@gmail.com
                </Text>
                <NavArrowRight width={5} height={10} marginLeft={8} />
              </View>
            </View>
          </Pressable>
          <Pressable
            style={[styles.dateOfBirth, styles.spaceBlock]}
            onPress={onDateOfBirthPress}>
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
          </Pressable>
          <Pressable
            style={[styles.password, styles.spaceBlock]}
            onPress={onPasswordPress}>
            <Text style={[styles.password1, styles.detailTypo]}>Password</Text>
            <NavArrowRight width={5} height={10} marginLeft={228} />
          </Pressable>
          <Pressable
            style={[styles.password, styles.spaceBlock]}
            onPress={onLinkedAccountPress}>
            <Text style={[styles.linkedAccounts, styles.detailTypo]}>
              Linked accounts
            </Text>
            <NavArrowRight width={5} height={10} marginLeft={183} />
          </Pressable>
          <Pressable
            style={[styles.password, styles.spaceBlock]}
            onPress={onFriendListPress}>
            <Text style={[styles.password1, styles.detailTypo]}>
              Friendlist
            </Text>
            <NavArrowRight width={5} height={10} marginLeft={228} />
          </Pressable>
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
    width: 44
  },
  exampleMail: {
    width: 95
  },
  mailParent: {
    marginLeft: 156
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