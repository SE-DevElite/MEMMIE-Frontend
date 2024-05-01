import * as React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Svg, { G, Path, Circle, Defs } from 'react-native-svg'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import addMemoryStore from '@/stores/AddMemoryStore'

interface Props {
  curr_idx: number
}

const BottomNavigation: React.FC<Props> = props => {
  const { curr_idx } = props

  const navigation = useNavigation()
  const [currentIdx, setCurrentIdx] = React.useState<number>(curr_idx)

  const indexIcon = [
    {
      xaxis: 43,
      d: 'M0 18.0746C0 8.09227 8.09227 0 18.0746 0H18.8845C23.4198 0 27.7481 1.89788 30.8206 5.23375L31.7321 6.22346C37.9425 12.9662 48.6855 12.6436 54.4801 5.54047C57.3404 2.03436 61.6254 0 66.1502 0H313.5C329.792 0 343 13.2076 343 29.5C343 45.7924 329.792 59 313.5 59H29.5C13.2076 59 0 45.7924 0 29.5V18.0746Z',
      callBack: () => {
        navigation.navigate('HomeScreen' as never)
      }
    },
    {
      xaxis: 129,
      d: 'M0 29.5C0 13.2076 13.2076 0 29.5 0H104.715C109.351 0 113.767 1.97446 116.858 5.42902C123.334 12.6677 134.666 12.6677 141.142 5.42902C144.233 1.97446 148.649 0 153.285 0H313.5C329.792 0 343 13.2076 343 29.5C343 45.7924 329.792 59 313.5 59H29.5C13.2076 59 0 45.7924 0 29.5Z',
      callBack: () => {
        navigation.navigate('HomeScreen' as never)
        addMemoryStore.isAddMemory = true
      }
    },
    {
      xaxis: 214,
      d: 'M0 29.5C0 13.2076 13.2076 0 29.5 0H192.26C196.546 0 200.627 1.83675 203.469 5.04515C209.364 11.7012 219.727 11.783 225.727 5.22083L225.957 4.96924C228.851 1.8033 232.943 0 237.233 0H313.5C329.792 0 343 13.2076 343 29.5C343 45.7924 329.792 59 313.5 59H29.5C13.2076 59 0 45.7924 0 29.5Z',
      callBack: () => {
        navigation.navigate('SearchScreen' as never)
      }
    },
    {
      xaxis: 301,
      d: 'M0 29.5C0 13.2076 13.2076 0 29.5 0H280.044C284.149 0 288.056 1.76323 290.772 4.84132C296.467 11.2964 306.533 11.2964 312.228 4.84132C314.944 1.76323 318.851 0 322.956 0H324.74C334.825 0 343 8.17523 343 18.2599V29.5C343 45.7924 329.792 59 313.5 59H29.5C13.2076 59 0 45.7924 0 29.5Z',
      callBack: () => {
        navigation.navigate('SettingScreen' as never)
      }
    }
  ]

  const handlePress = (idx: number) => {
    indexIcon[idx].callBack()
  }

  return (
    <Svg width={360} height={59} viewBox="0 0 343 59" fill="none">
      <G>
        <Path d={indexIcon[currentIdx].d} fill="white" />
      </G>
      <G>
        <Circle
          cx={indexIcon[currentIdx].xaxis}
          cy={31}
          r={17}
          fill="#A56073"
        />
      </G>

      {/* dot */}
      <G>
        <Circle cx={indexIcon[currentIdx].xaxis} cy={3} r={3} fill="#A56073" />
      </G>

      {/* home icon */}
      <TouchableWithoutFeedback onPress={() => handlePress(0)}>
        <Path
          d="M47.5926 39.1905H38.5979C36.6108 39.1905 35 37.5166 35 35.4519V29.5708C35 28.2635 35.6572 27.0512 36.7331 26.3736L41.2304 23.5414C42.3767 22.8195 43.8138 22.8195 44.96 23.5414L49.4574 26.3736C50.5333 27.0512 51.1905 28.2635 51.1905 29.5708V35.4519C51.1905 37.5166 49.5796 39.1905 47.5926 39.1905Z"
          stroke={currentIdx === 0 ? '#fff' : '#A56073'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </TouchableWithoutFeedback>

      {/* add icon */}
      <TouchableWithoutFeedback onPress={() => handlePress(1)}>
        <Path
          d="M121 31.095H129.095M129.095 31.095H137.19M129.095 31.095V23M129.095 31.095V39.19"
          stroke={currentIdx === 1 ? '#fff' : '#A56073'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </TouchableWithoutFeedback>

      {/* search icon */}
      <TouchableWithoutFeedback onPress={() => handlePress(2)}>
        <G>
          <Path
            d="M219.143 35.1425L223.19 39.19"
            stroke={currentIdx === 2 ? '#fff' : '#A56073'}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M207 29.9386C207 33.7706 210.107 36.8771 213.939 36.8771C215.858 36.8771 217.595 36.0978 218.851 34.8384C220.103 33.5833 220.877 31.8513 220.877 29.9386C220.877 26.1065 217.771 23 213.939 23C210.107 23 207 26.1065 207 29.9386Z"
            stroke={currentIdx === 2 ? '#fff' : '#A56073'}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </TouchableWithoutFeedback>

      {/* setting */}
      <TouchableWithoutFeedback onPress={() => handlePress(3)}>
        <G>
          <Circle
            cx={300.757}
            cy={30.757}
            r={7.60924}
            stroke={currentIdx === 3 ? '#fff' : '#A56073'}
            strokeWidth={2}
          />
          <Path
            d="M303.627 23.1141C303.627 24.6153 302.342 23.4161 300.757 23.4161C299.172 23.4161 297.887 24.6153 297.887 23.1141C297.887 21.6129 299.172 21 300.757 21C302.342 21 303.627 21.6129 303.627 23.1141Z"
            fill={currentIdx === 3 ? '#fff' : '#A56073'}
          />
          <Path
            d="M297.887 38.4423C297.887 36.8574 299.172 38.1234 300.757 38.1234C302.342 38.1234 303.627 36.8574 303.627 38.4423C303.627 40.0272 302.342 40.5143 300.757 40.5143C299.172 40.5143 297.887 40.0272 297.887 38.4423Z"
            fill={currentIdx === 3 ? '#fff' : '#A56073'}
          />
          <Path
            d="M297.109 23.0505C298.207 24.1483 296.421 24.1799 295.301 25.3006C294.18 26.4213 294.148 28.2067 293.051 27.109C291.953 26.0112 292.482 24.7238 293.603 23.6031C294.724 22.4824 296.011 21.9528 297.109 23.0505Z"
            fill={currentIdx === 3 ? '#fff' : '#A56073'}
          />
          <Path
            d="M293.051 34.1793C294.148 33.0816 294.18 34.867 295.301 35.9877C296.421 37.1084 298.207 37.14 297.109 38.2378C296.011 39.3355 294.724 38.8059 293.603 37.6852C292.482 36.5645 291.953 35.2771 293.051 34.1793Z"
            fill={currentIdx === 3 ? '#fff' : '#A56073'}
          />
          <Path
            d="M308.226 27.1206C307.151 28.1954 307.101 26.4283 305.981 25.3076C304.86 24.1869 303.093 24.1369 304.168 23.0622C305.243 21.9874 306.565 22.4825 307.685 23.6032C308.806 24.7239 309.301 26.0459 308.226 27.1206Z"
            fill={currentIdx === 3 ? '#fff' : '#A56073'}
          />
          <Path
            d="M304.168 38.2261C303.093 37.1514 304.86 37.1014 305.981 35.9807C307.102 34.86 307.152 33.093 308.226 34.1677C309.301 35.2425 308.806 36.5645 307.685 37.6852C306.565 38.8059 305.243 39.3009 304.168 38.2261Z"
            fill={currentIdx === 3 ? '#fff' : '#A56073'}
          />
          <Path
            d="M293.114 27.8875C294.615 27.8875 293.416 29.1723 293.416 30.7572C293.416 32.3422 294.615 33.627 293.114 33.627C291.613 33.627 291 32.3422 291 30.7572C291 29.1723 291.613 27.8875 293.114 27.8875Z"
            fill={currentIdx === 3 ? '#fff' : '#A56073'}
          />
          <Path
            d="M309.016 33.6269C307.431 33.6269 308.697 32.3421 308.697 30.7572C308.697 29.1723 307.431 27.8875 309.016 27.8875C310.601 27.8875 311.088 29.1723 311.088 30.7572C311.088 32.3421 310.601 33.6269 309.016 33.6269Z"
            fill={currentIdx === 3 ? '#fff' : '#A56073'}
          />
        </G>
      </TouchableWithoutFeedback>
      <Defs></Defs>
    </Svg>
  )
}

export default BottomNavigation
