import { LocationCardLayout, Loader } from '../components'
import { useFetch } from '../hooks/useFetch'
import type { Location } from '../types'

export const Locations = () => {
  const [data, isLoading] = useFetch<Location[]>('/data/location.json')

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='flex flex-wrap justify-center gap-5'>
      {data.map((location) => (
        <LocationCardLayout key={location.id} locationData={location} />
      ))}
    </div>
  )
}
