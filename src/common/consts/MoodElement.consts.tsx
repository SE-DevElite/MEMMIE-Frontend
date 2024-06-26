import ManFunnyIcon from '@/assets/svg/ManFunny'
import ManHappyIcon from '@/assets/svg/ManHappy'
import ManNahIcon from '@/assets/svg/ManNah'
import ManSadIcon from '@/assets/svg/ManSad'
import WomanFunnyIcon from '@/assets/svg/WomanFunny'
import WomanHappyIcon from '@/assets/svg/WomanHappy'
import WomanNahIcon from '@/assets/svg/WomanNah'
import WomanSadIcon from '@/assets/svg/WomanSad'
import uuid from 'react-native-uuid'

export const MoodElement = {
  Male: [
    {
      label: 'Happy',
      icon: <ManHappyIcon width={40} height={40} key={uuid.v4() as string} />
    },
    {
      label: 'Sad',
      icon: <ManSadIcon width={40} height={40} key={uuid.v4() as string} />
    },
    {
      label: 'Nah',
      icon: <ManNahIcon width={40} height={40} key={uuid.v4() as string} />
    },
    {
      label: 'Funny',
      icon: <ManFunnyIcon width={40} height={40} key={uuid.v4() as string} />
    }
  ],
  Female: [
    {
      label: 'Happy',
      icon: <WomanHappyIcon width={40} height={40} />
    },
    {
      label: 'Sad',
      icon: <WomanSadIcon width={40} height={40} />
    },
    {
      label: 'Nah',
      icon: <WomanNahIcon width={40} height={40} />
    },
    {
      label: 'Funny',
      icon: <WomanFunnyIcon width={40} height={40} />
    }
  ]
}
