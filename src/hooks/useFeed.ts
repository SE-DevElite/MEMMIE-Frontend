import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'
import { FeedResponse, MemoryFeedI } from '@/interface/feed_response'
import { useEffect, useState } from 'react'

const useFeed = () => {
  const [memoryFeed, setMemoryFeed] = useState<MemoryFeedI[] | null>([])

  useEffect(() => {
    async function getFeed() {
      const token = await getAccessToken()

      const res: FeedResponse = await RequestWithToken(token as string)
        .get('/memories/feed/users')
        .then(res => res.data)

      setMemoryFeed(res.memory)
    }

    getFeed()
  }, [])

  return { memoryFeed }
}

export default useFeed
