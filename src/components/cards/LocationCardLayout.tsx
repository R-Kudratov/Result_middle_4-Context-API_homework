import { TextCardLayout } from './components/TextCardLayout'
import type { Location } from '../../types'

export const LocationCardLayout = ({ locationData }: { locationData: Location }) => {
  return (
    <TextCardLayout url={`/locations/${locationData.id}`}>
      <p>Название: {locationData.name}</p>
      <p>Тип: {locationData.type}</p>
      <p>Измерение: {locationData.dimension}</p>
    </TextCardLayout>
  )
}
