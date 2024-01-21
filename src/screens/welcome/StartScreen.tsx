import React from 'react';
import styled from 'styled-components/native';
import { themes } from '@/common/themes/themes';
import AvatarCommon from '@/common/Avatar.common';
import ButtonCommon from '@/common/Button.common';
import EllipseCircle from '@/components/welcome/EllipseCircle';

interface StartScreenProps {
  onStartPress: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStartPress }) => {
  return (
    <Center>
      <AvatarCommon image={require('@/assets/welcome/ready.png')} />
      <TextStyled>You're ready!</TextStyled>

      <SubHeadingBox>
        <SubHeading>Click the button to start your journey</SubHeading>
      </SubHeadingBox>

      <ButtonCommon title="Start" onPress={onStartPress} />

      <EllipseCircle top1={-10} top2={0} right1={50} right2={-70} />
    </Center>
  );
};

export default StartScreen;

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const TextStyled = styled.Text`
  padding: 64px 0;
  font-size: 20px;
  font-family: ${themes.fonts.samiBold};
  color: rgba(${themes.light.primary.rgb}, 1);
`;

const SubHeadingBox = styled.View`
  height: 100px;
`;

const SubHeading = styled.Text`
  font-size: 16px;
  font-family: ${themes.fonts.light};
  color: rgba(${themes.light.primary.rgb}, 1);
  z-index: 2;
  text-align: center;
`;