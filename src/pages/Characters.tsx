import { CharacterCardLayout, Loader } from '../components'
import { useFetch } from '../hooks/useFetch'
import type { Character } from '../types'

export const Characters = () => {
  const [data, isLoading] = useFetch<Character[]>('/data/characters.json')

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='flex flex-wrap justify-center gap-5'>
      {data.map((character) => (
        <CharacterCardLayout key={character.id} characterData={character} />
      ))}
    </div>
  )
}
