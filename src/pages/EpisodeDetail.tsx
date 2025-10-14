import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { BackButton, Loader } from '../components'
import { DetailTextCardLayout } from './components/DetailTextCardLayout'
import type { Episode } from '../types'

export const EpisodeDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [episodeList, isLoading] = useFetch<Episode[]>('/data/episode.json')

  const episode = episodeList.find((ep) => ep.id === parseInt(id || '0'))

  if (isLoading) return <Loader />

  return (
    <div>
      {!episode ? (
        <p>Эпизод не найден</p>
      ) : (
        <DetailTextCardLayout name={episode.name} creationDate={episode.created}>
          <p>Дата выхода: {episode.air_date}</p>
          <p>Номер эпизода: {episode.episode}</p>
        </DetailTextCardLayout>
      )}
      <BackButton url={'/episodes'} text={'Вернуться к списку эпизодов'} />
    </div>
  )
}
