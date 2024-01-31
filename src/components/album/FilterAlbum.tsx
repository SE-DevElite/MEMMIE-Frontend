import React from 'react'
import { themes } from '@/common/themes/themes'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import ButtonCommon from '@/common/Button.common'
import { useState, useEffect } from 'react'
import WeatherClearskyIcon from '@/assets/svg/WeatherClearsky'
import WeatherSunnyIcon from '@/assets/svg/WeatherSunny'
import WeatherCloudIcon from '@/assets/svg/WeatherCloud'
import WeatherDownpourIcon from '@/assets/svg/WeatherDownpour'
import WeatherSnowflakeIcon from '@/assets/svg/WeatherSnowflake'
import WomanHappyIcon from '@/assets/svg/WomanHappy'
import WomanFunnyIcon from '@/assets/svg/WomanFunny'
import WomanNahIcon from '@/assets/svg/WomanNah'
import WomanSadIcon from '@/assets/svg/WomanSad'



interface Props {
  handleClose: () => void

}

const FilterAlbum: React.FC<Props> = props => {
  const { handleClose } = props
  const [currentDate, setCurrentDate] = useState('');

  
  useEffect(() => {
    updateCurrentDate();
  }, []);

  const updateCurrentDate = () => {
    const today = new Date();
    const formattedDate = `${today.getDate()} ${today.toLocaleString('default', { month: 'short' })} ${today.getFullYear()}`;

    setCurrentDate(formattedDate);
  };

  const weatherIcons = [
    WeatherSunnyIcon,
    WeatherCloudIcon,
    WeatherClearskyIcon,
    WeatherDownpourIcon,
    WeatherSnowflakeIcon,
  ];

  const moodIcons = [
    WomanHappyIcon,
    WomanFunnyIcon,
    WomanNahIcon,
    WomanSadIcon,
  ];


  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.headerGroup}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.buttonStyle}>Clear</Text>
          </TouchableOpacity>

          <Text style={styles.headingTextStyles}>Add Filter</Text>

          <TouchableOpacity onPress={() => console.log('Apply')}>
            <Text style={styles.buttonStyle}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={{ ...styles.layout, paddingHorizontal: 30 }}>
        <View style={{ paddingBottom: 20 }}>
          <Text style={styles.textTitle}>Date</Text>
          <View style={styles.dropDownGroup}>
            <ButtonCommon
              title={currentDate}
              onPress={() => console.log('Select date')}
              width={140}
              height={41}
              font_size={14}
            />
            <Text style={styles.textTitle}>to</Text>
            <ButtonCommon
              title={currentDate}
              onPress={() => console.log('Select date')}
              width={140}
              height={41}
              font_size={14}
            />
          </View>
        </View>

        <View style={{ paddingBottom: 20 }}>
          <Text style={styles.textTitle}>Mood</Text>
          <View style={styles.moodGroup}>
            {moodIcons.map((MoodIcons, index) => (
              <TouchableWithoutFeedback key={index} onPress={() => console.log(`Change mood ${index + 1}`)}>
                <View style={styles.moodContainer}>
                  <View style={styles.moodIcon}>
                    <MoodIcons width={40} height={40}/>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.textTitle}>Weather</Text>
          <View style={styles.weatherGroup}>
            {weatherIcons.map((WeatherIcon, index) => (
              <TouchableWithoutFeedback key={index} onPress={() => console.log(`Change weather ${index + 1}`)}>
                <WeatherIcon />
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>
      </View>
      
    </View>
  )
}

export default FilterAlbum

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layout: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  headerGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonStyle: {
    // backgroundColor: 'red',
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  headingTextStyles: {
    fontSize: 24,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex
  },
  divider: {
    height: 1,
    backgroundColor: themes.light.primary.hex,
    marginVertical: 20
  },
  textTitle: {
    fontSize: 14,
    fontFamily: themes.fonts.medium,
    color: themes.light.primary.hex,
    paddingBottom: 10
  },
  dropDownGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  moodGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  moodContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  moodIcon: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: themes.light.tertiary.hex,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden'
  },
  circleAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: themes.light.tertiary.hex,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  weatherGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25
  },
})
