import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { themes } from '@/common/themes/themes'
import Xclose from '@/assets/svg/Xclose'
import Search from '@/assets/svg/Search'
import { Ionicons } from '@expo/vector-icons'

export type CreateListType = {
  onClose?: () => void
}

const CreateList = ({ onClose }: CreateListType) => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <View style={styles.createList}>
      <View style={[styles.createListChild, styles.parentPosition1]} />
      <View style={styles.underline} />
      <View style={[styles.createList1, styles.parentPosition1]}>
        <Text style={[styles.createList2, styles.listClr]}>Create list</Text>
        <View style={[styles.createListItem, styles.groupChildPosition]} />
      </View>
      <View style={[styles.name, styles.namePosition]}>
        <Text style={[styles.listNameOptional, styles.listFlexBox]}>
          List name (optional)
        </Text>
        <View style={[styles.lineParent, styles.parentPosition1]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.list, styles.listTypo]}>List</Text>
          {/* <Image
            style={[styles.deleteIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/icons/delete.png")}
          /> */}
          <Xclose />
        </View>
      </View>
      <View style={[styles.searchBar, styles.namePosition]}>
        <View style={[styles.searchBarChild, styles.childPosition]} />
        <View style={styles.searchIconParent}>
          {/* <Image
            style={styles.searchIcon}
            contentFit="cover"
            source={require("../assets/search-icon.png")}
          /> */}
          <Search />
          <Text style={[styles.search, styles.listTypo]}>Search</Text>
        </View>
      </View>
      <View style={[styles.create, styles.namePosition]}>
        <View style={[styles.createChild, styles.childPosition]} />
        <Text style={[styles.create1, styles.create1Typo]}>Create</Text>
      </View>
      <View style={[styles.ntcnutt, styles.ntcPosition]}>
        <View style={styles.iconParent}>
          {/* <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          /> */}
          <View style={styles.ntcnuttParent}>
            <Text style={[styles.ntcnutt1, styles.create1Typo]}>Ntc.nutt</Text>
            <Text style={[styles.nutthanonThongcharoen, styles.listTypo]}>
              Nutthanon Thongcharoen
            </Text>
          </View>
        </View>
        {/* <Image
          style={[styles.choiceIcon, styles.choiceIconLayout]}
          contentFit="cover"
          source={require("../assets/choice.png")}
        /> */}
        <Ionicons
          name={isClicked ? 'ellipse' : 'ellipse-outline'}
          size={24}
          color={
            isClicked ? themes.light.primary.hex : themes.light.primary.hex
          }
          onPress={() => {
            setIsClicked(!isClicked)
          }}
        />
      </View>
      <View style={[styles.sxxlr, styles.ntcPosition]}>
        <View style={styles.iconGroup}>
          {/* <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          /> */}
          <View style={styles.sxxlrParent}>
            <Text style={[styles.ntcnutt1, styles.create1Typo]}>Sxxlr.</Text>
            <Text style={[styles.helloWorld, styles.listTypo]}>
              Hello, world
            </Text>
          </View>
        </View>
        <Ionicons
          name={isClicked ? 'ellipse' : 'ellipse-outline'}
          size={24}
          color={
            isClicked ? themes.light.primary.hex : themes.light.primary.hex
          }
          onPress={() => {
            setIsClicked(!isClicked)
          }}
        />
      </View>
      <View style={[styles.puay, styles.ntcPosition]}>
        <View style={styles.iconContainer}>
          {/* <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          /> */}
          <View style={[styles.puayParent, styles.parentLayout]}>
            <Text style={[styles.ntcnutt1, styles.create1Typo]}>Puay</Text>
            <Text style={[styles.helloWorld, styles.listTypo]}>panapun</Text>
          </View>
        </View>
        <Ionicons
          name={isClicked ? 'ellipse' : 'ellipse-outline'}
          size={24}
          color={
            isClicked ? themes.light.primary.hex : themes.light.primary.hex
          }
          onPress={() => {
            setIsClicked(!isClicked)
          }}
        />
      </View>
      <View style={[styles.ppunyie, styles.ntcPosition]}>
        <View style={styles.groupView}>
          {/* <Image
            style={[styles.icon3, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon3.png")}
          /> */}
          <View style={[styles.ppunyieParent, styles.parentLayout]}>
            <Text style={[styles.ntcnutt1, styles.create1Typo]}>ppunyie</Text>
            <Text style={[styles.helloWorld, styles.listTypo]}>
              Punnapa Thianchai
            </Text>
          </View>
        </View>
        <Ionicons
          name={isClicked ? 'ellipse' : 'ellipse-outline'}
          size={24}
          color={
            isClicked ? themes.light.primary.hex : themes.light.primary.hex
          }
          onPress={() => {
            setIsClicked(!isClicked)
          }}
        />
      </View>
      <View style={[styles.ntc, styles.ntcPosition]}>
        <View style={styles.iconParent1}>
          {/* <Image
            style={[styles.icon4, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon4.png")}
          /> */}
          <View style={[styles.ntcParent, styles.parentLayout]}>
            <Text style={[styles.ntcnutt1, styles.create1Typo]}>n.tc_</Text>
            <Text style={[styles.helloWorld, styles.listTypo]}>NUTTHANON</Text>
          </View>
        </View>
        <Ionicons
          name={isClicked ? 'ellipse' : 'ellipse-outline'}
          size={24}
          color={
            isClicked ? themes.light.primary.hex : themes.light.primary.hex
          }
          onPress={() => {
            setIsClicked(!isClicked)
          }}
        />
      </View>
      <View style={[styles.aaachloprtw, styles.ntcPosition]}>
        <View style={styles.iconParent2}>
          {/* <Image
            style={[styles.icon5, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon5.png")}
          /> */}
          <View style={[styles.aaachloprtwParent, styles.parentPosition]}>
            <Text style={[styles.ntcnutt1, styles.create1Typo]}>
              aaachloprtw
            </Text>
            <Text style={[styles.helloWorld, styles.listTypo]}>
              Watcharapol Treesatthayasakul
            </Text>
          </View>
        </View>
        <Ionicons
          name={isClicked ? 'ellipse' : 'ellipse-outline'}
          size={24}
          color={
            isClicked ? themes.light.primary.hex : themes.light.primary.hex
          }
          onPress={() => {
            setIsClicked(!isClicked)
          }}
        />
      </View>
      <View style={[styles.xpyl, styles.ntcPosition]}>
        <View style={styles.iconParent3}>
          {/* <Image
            style={[styles.icon6, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon6.png")}
          /> */}
          <View style={[styles.xpylParent, styles.parentLayout]}>
            <Text style={[styles.ntcnutt1, styles.create1Typo]}>_xpyl</Text>
            <Text style={[styles.helloWorld, styles.listTypo]}>
              Kanokwan Rungruengchokchai
            </Text>
          </View>
        </View>
        <Ionicons
          name={isClicked ? 'ellipse' : 'ellipse-outline'}
          size={24}
          color={
            isClicked ? themes.light.primary.hex : themes.light.primary.hex
          }
          onPress={() => {
            setIsClicked(!isClicked)
          }}
        />
      </View>
      <View style={[styles.i2oninn, styles.ntcPosition]}>
        <View style={styles.iconParent2}>
          {/* <Image
            style={[styles.icon7, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icon7.png")}
          /> */}
          <View style={[styles.i2oninnParent, styles.parentPosition]}>
            <Text style={[styles.ntcnutt1, styles.create1Typo]}>
              {`__   `}i2oninn
            </Text>
            <Text style={[styles.chutphonKanokpannachot, styles.listTypo]}>
              Chutphon Kanokpannachot
            </Text>
          </View>
        </View>
        <Ionicons
          name={isClicked ? 'ellipse' : 'ellipse-outline'}
          size={24}
          color={
            isClicked ? themes.light.primary.hex : themes.light.primary.hex
          }
          onPress={() => {
            setIsClicked(!isClicked)
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  underline: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    top: 22,
    maxHeight: '100%',
    width: '100%',
    backgroundColor: themes.light.primary.hex
  },
  parentPosition1: {
    right: '0%',
    position: 'absolute'
  },
  iconLayout: {
    overflow: 'hidden',
    position: 'absolute',
    maxHeight: '100%',
    maxWidth: '100%'
  },
  listClr: {
    color: themes.light.primary.hex,
    top: '0%'
  },
  groupChildPosition: {
    borderTopWidth: 0.5,
    borderStyle: 'solid',
    position: 'absolute'
  },
  namePosition: {
    left: '8%',
    right: '8.8%',
    width: '83.2%',
    position: 'absolute'
  },
  listFlexBox: {
    display: 'flex',
    alignItems: 'center'
  },
  listTypo: {
    fontFamily: themes.fonts.light,
    fontWeight: '300',
    textAlign: 'left',
    color: themes.light.primary.hex
  },
  childPosition: {
    borderRadius: 20,
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  create1Typo: {
    textAlign: 'left',
    fontFamily: themes.fonts.regular,
    lineHeight: 16,
    fontSize: 14,
    position: 'absolute'
  },
  ntcPosition: {
    left: 30,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute'
  },
  parentLayout: {
    height: '97.14%',
    top: '2.86%'
  },
  iconPosition: {
    right: '85.54%',
    width: '14.46%',
    overflow: 'hidden',
    left: '0%',
    top: '0%',
    position: 'absolute',
    maxHeight: '100%',
    maxWidth: '100%'
  },
  parentPosition: {
    left: '21.07%',
    width: '78.93%',
    bottom: '0%',
    right: '0%',
    position: 'absolute'
  },
  createListChild: {
    // borderTopLeftRadius: Border.br_21xl,
    // borderTopRightRadius: Border.br_21xl,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    // backgroundColor: Color.colorWhite,
    left: '0%',
    bottom: '0%',
    top: '0%',
    width: '100%',
    height: '100%'
  },

  createList2: {
    left: '33.33%',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: themes.fonts.samiBold,
    textAlign: 'center',
    position: 'absolute'
  },
  createListItem: {
    height: '0.96%',
    width: '100.13%',
    top: '99.62%',
    right: '-0.08%',
    bottom: '-0.58%',
    left: '-0.05%',
    borderColor: themes.light.primary.hex
  },
  createList1: {
    height: '6.79%',
    top: '6.57%',
    bottom: '86.64%',
    left: '0%',
    width: '100%'
  },
  listNameOptional: {
    height: '28.63%',
    width: '45.83%',
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: themes.fonts.regular,
    lineHeight: 16,
    fontSize: 14,
    position: 'absolute',
    color: themes.light.primary.hex,
    top: '0%',
    left: '0%'
  },
  groupChild: {
    height: '2.01%',
    width: '100.16%',
    top: '98.8%',
    right: '-0.1%',
    bottom: '-0.8%',
    left: '-0.06%',
    borderColor: themes.light.primary.hex
  },
  list: {
    height: '52.21%',
    width: '8.33%',
    top: '20.08%',
    lineHeight: 14,
    fontSize: 14,
    fontWeight: '300',
    alignItems: 'center',
    display: 'flex',
    left: '0%',
    position: 'absolute'
  },
  deleteIcon: {
    height: '72.29%',
    width: '5.77%',
    right: '1.6%',
    bottom: '27.71%',
    left: '92.63%',
    top: '0%'
  },
  lineParent: {
    height: '50.92%',
    top: '49.08%',
    left: '0%',
    bottom: '0%',
    width: '100%'
  },
  name: {
    height: '6.38%',
    top: '16.84%',
    bottom: '76.78%'
  },
  searchBarChild: {
    // backgroundColor: Color.colorWhite,
  },
  searchIcon: {
    width: 12,
    height: 14
  },
  search: {
    width: 55,
    marginLeft: 16,
    lineHeight: 14,
    fontSize: 12,
    fontWeight: '300',
    alignItems: 'center',
    display: 'flex'
  },
  searchIconParent: {
    top: 12,
    left: 17,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute'
  },
  searchBar: {
    height: '4.96%',
    top: '25.63%',
    bottom: '69.41%'
  },
  createChild: {
    backgroundColor: themes.light.tertiary.hex
  },
  create1: {
    top: '30%',
    left: '42.31%',
    color: themes.light.secondary.hex
  },
  create: {
    height: '5.22%',
    top: '89.69%',
    bottom: '5.09%'
  },
  icon: {
    width: '19.44%',
    right: '80.56%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%'
  },
  ntcnutt1: {
    color: themes.light.primary.hex,
    left: '0%'
  },
  nutthanonThongcharoen: {
    top: '63.64%',
    fontSize: 10,
    lineHeight: 12,
    left: '0%',
    position: 'absolute'
  },
  ntcnuttParent: {
    height: '94.29%',
    width: '71.67%',
    bottom: '2.86%',
    left: '28.33%',
    top: '2.86%',
    right: '0%',
    position: 'absolute'
  },
  iconParent: {
    width: 180,
    height: 35
  },
  choiceIcon: {
    marginLeft: 111
  },
  ntcnutt: {
    top: 263
  },
  icon1: {
    width: 35,
    height: 35
  },
  helloWorld: {
    top: '58.82%',
    lineHeight: 14,
    fontSize: 12,
    fontWeight: '300',
    left: '0%',
    position: 'absolute'
  },
  sxxlrParent: {
    width: 67,
    height: 34,
    marginLeft: 16
  },
  iconGroup: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  choiceIcon1: {
    marginLeft: 173
  },
  sxxlr: {
    top: 314
  },
  icon2: {
    width: '32.71%',
    right: '67.29%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%'
  },
  puayParent: {
    width: '52.34%',
    left: '47.66%',
    bottom: '0%',
    right: '0%',
    position: 'absolute'
  },
  iconContainer: {
    width: 107,
    height: 35
  },
  choiceIcon2: {
    marginLeft: 184
  },
  puay: {
    top: 365
  },
  icon3: {
    width: '20.96%',
    right: '79.04%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%'
  },
  ppunyieParent: {
    width: '69.46%',
    left: '30.54%',
    bottom: '0%',
    right: '0%',
    position: 'absolute'
  },
  groupView: {
    width: 167,
    height: 35
  },
  choiceIcon3: {
    marginLeft: 124
  },
  ppunyie: {
    top: 416
  },
  icon4: {
    width: '28.69%',
    right: '71.31%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%'
  },
  ntcParent: {
    width: '58.2%',
    left: '41.8%',
    bottom: '0%',
    right: '0%',
    position: 'absolute'
  },
  iconParent1: {
    width: 122,
    height: 35
  },
  choiceIcon4: {
    marginLeft: 169
  },
  ntc: {
    top: 467
  },
  icon5: {
    bottom: '0%',
    height: '100%'
  },
  aaachloprtwParent: {
    height: '97.14%',
    top: '2.86%'
  },
  iconParent2: {
    width: 242,
    height: 35
  },
  choiceIcon5: {
    marginLeft: 49
  },
  aaachloprtw: {
    top: 518
  },
  icon6: {
    width: '14.83%',
    right: '85.17%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%'
  },
  xpylParent: {
    width: '78.39%',
    left: '21.61%',
    bottom: '0%',
    right: '0%',
    position: 'absolute'
  },
  iconParent3: {
    width: 236,
    height: 35
  },
  choiceIcon6: {
    marginLeft: 55
  },
  xpyl: {
    top: 569
  },
  icon7: {
    height: '99.15%',
    bottom: '0.85%'
  },
  chutphonKanokpannachot: {
    top: '59.18%',
    lineHeight: 14,
    fontSize: 12,
    fontWeight: '300',
    alignItems: 'center',
    display: 'flex',
    left: '0%',
    width: '100%',
    position: 'absolute'
  },
  i2oninnParent: {
    height: '97.17%',
    top: '2.83%'
  },
  i2oninn: {
    top: 620
  },
  createList: {
    width: 375,
    height: 766,
    maxHeight: '100%',
    maxWidth: '100%'
  }
})

export default CreateList
