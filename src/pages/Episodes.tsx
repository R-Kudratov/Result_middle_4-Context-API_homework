import { EpisodeCardLayout, Loader } from '../components'
import { useFetch } from '../hooks/useFetch'
import type { Episode } from '../types'

export const Episodes = () => {
  const [data, isLoading] = useFetch<Episode[]>('/data/episode.json')

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='flex flex-wrap justify-center gap-5'>
      {data.map((episode) => (
        <EpisodeCardLayout key={episode.id} episodeData={episode} />
      ))}
    </div>
  )
}
