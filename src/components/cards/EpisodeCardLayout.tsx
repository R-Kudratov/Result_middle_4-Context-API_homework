import { TextCardLayout } from './components/TextCardLayout'
import type { Episode } from '../../types'

export const EpisodeCardLayout = ({ episodeData }: { episodeData: Episode }) => {
  return (
    <TextCardLayout url={`/episodes/${episodeData.id}`}>
      <p>Название: {episodeData.name}</p>
      <p>Дата выхода: {episodeData.air_date}</p>
      <p>Номер эпизода: {episodeData.episode}</p>
    </TextCardLayout>
  )
}
