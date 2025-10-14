import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { BackButton, Loader } from '../components'
import { DetailTextCardLayout } from './components/DetailTextCardLayout'
import type { Location } from '../types'

export const LocationDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [locationList, isLoading] = useFetch<Location[]>('/data/location.json')

  const location = locationList.find((loc) => loc.id === parseInt(id || '0'))

  if (isLoading) return <Loader />

  return (
    <div>
      {!location ? (
        <p>Локация не найдена</p>
      ) : (
        <DetailTextCardLayout name={location.name} creationDate={location.created}>
          <p>Тип: {location.type}</p>
          <p>Измерение: {location.dimension}</p>
        </DetailTextCardLayout>
      )}
      <BackButton url={'/locations'} text={'Вернуться к списку локаций'} />
    </div>
  )
}
