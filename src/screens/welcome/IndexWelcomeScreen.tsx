import React, { useState } from 'react'
import styled from 'styled-components/native'
import CoverScreen from './CoverScreen'
import WelcomeTemplate from '@/components/welcome/WelcomeTemplate'
import StartScreen from './StartScreen'

const welcomePages = [
  {
    Title: 'Welcome to MEMMIE',
    SubTitle:
      'Memmie is your constant companion, helping you capture memorable moments and everyday experiences.',
    Image: require('@/assets/welcome/welcome.png'),
    position: {
      top1: -15,
      top2: 3,
      right1: -30,
      right2: 47
    },
    page: 0
  },
  {
    Title: 'Memories & Sharing',
    SubTitle:
      'Get an overview of your memories and create new ones with the people you love.',
    Image: require('@/assets/welcome/memory-sharing.png'),
    position: {
      top1: -20,
      right1: 40,
      top2: 30,
      right2: -40
    },
    page: 1
  },
  {
    Title: 'Custom Friend list',
    SubTitle:
      'Create your own friend list freely to share your memories with those close to you.',
    Image: require('@/assets/welcome/custom-friend-list.png'),
    position: {
      top1: -15,
      right1: -30,
      top2: 20,
      right2: 47
    },
    page: 2
  },
  {
    Title: 'Notification',
    SubTitle:
      "Reminds you of past memories and suggests reviving memories that haven't been done in a long time.",
    Image: require('@/assets/welcome/notification.png'),
    position: {
      top1: -20,
      right1: 40,
      top2: 30,
      right2: -35
    },
    page: 3
  },
  {
    Title: 'Stay with a good habit',
    SubTitle: 'Encourage the creation of good memories every day with streak.',
    Image: require('@/assets/welcome/stay-with-good-habit.png'),
    position: {
      top1: 10,
      right1: -30,
      top2: -15,
      right2: 47
    },
    page: 4
  }
]

const IndexWelcomeScreen = () => {
  const [pageNumber, setPageNumber] = useState<number>(0)
  const [stage, setStage] = useState<number>(0)

  const handlePageChange = (id: number) => {
    // console.log(id);
    setPageNumber(id)

    setStageCollection([
      <CoverScreen handleStage={handleChangeState} />,
      <WelcomeTemplate
        {...welcomePages[id]}
        handlePageChange={handlePageChange}
        handleStage={handleChangeState}
      />,
      <StartScreen />
    ])
  }

  const handleChangeState = (id: number) => {
    setStage(id)
  }

  const [stageCollection, setStageCollection] = useState([
    <CoverScreen handleStage={handleChangeState} />,
    <WelcomeTemplate
      {...welcomePages[pageNumber]}
      handlePageChange={handlePageChange}
      handleStage={handleChangeState}
    />,
    <StartScreen />
  ])

  return <Box>{stageCollection[stage]}</Box>
}

export default IndexWelcomeScreen

const Box = styled.View`
  flex: 1;
`
