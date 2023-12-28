import React from 'react'
import { TouchableWithoutFeedback, View, Dimensions } from 'react-native'
import { themes } from '@/common/themes/themes'
import styled from 'styled-components/native'
import AvatarCommon from '@/common/Avatar.common'
import EllipseCircle from './EllipseCircle'
import NavigationButton from './NavigationButton'

interface WelcomeProps {
  Title: string
  SubTitle: string
  Image: NodeRequire
  position: {
    top1: number
    top2: number
    right1: number
    right2: number
  }
  page: number

  handlePangeChange: (id: number) => void
  handleStage: (id: number) => void
}

const WelcomeTemplate: React.FC<WelcomeProps> = props => {
  const {
    Title,
    SubTitle,
    Image,
    position,
    page,
    handlePangeChange,
    handleStage
  } = props

  const handlePress = (event: any) => {
    const { pageX } = event.nativeEvent
    const screenWidth = Dimensions.get('window').width

    if (pageX < screenWidth / 2) {
      if (page > 0) handlePangeChange(page - 1)
    } else {
      if (page < 4) handlePangeChange(page + 1)

      if (page === 4) handleStage(2)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Center>
          <AvatarCommon image={Image} />
          <TextStyled>{Title}</TextStyled>

          <SubHeadingBox>
            <SubHeading>{SubTitle}</SubHeading>
          </SubHeadingBox>

          <EllipseCircle {...position} />

          <NavigationButton active={page} pageChange={handlePangeChange} />
        </Center>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default WelcomeTemplate

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* gap: 80px; */

  padding: 20px;

  /* border: 5px solid red; */
`

const TextStyled = styled.Text`
  padding: 64px 0;
  font-size: 20px;
  font-family: ${themes.fonts.samiBold};
  color: rgba(${themes.light.primary.rgb}, 1);
`

const SubHeadingBox = styled.View`
  height: 100px;

  /* border: 1px solid red; */
`

const SubHeading = styled.Text`
  font-size: 16px;
  font-family: ${themes.fonts.light};
  color: rgba(${themes.light.primary.rgb}, 1);
  z-index: 2;

  text-align: center;
`
