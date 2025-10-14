import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { BackButton, Loader } from '../components'
import type { Character } from '../types'

export const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [characterList, isLoading] = useFetch<Character[]>('/data/characters.json')

  const character = characterList.find((char) => char.id === parseInt(id || '0'))

  if (isLoading) return <Loader />

  return (
    <div>
      {!character ? (
        <p>Персонаж не найден</p>
      ) : (
        <div className='flex w-200 bg-[#192b3a] rounded-lg shadow-xl/10'>
          <div className='w-1/2'>
            <img
              src={character.image}
              alt={character.name}
              className='w-full h-full object-cover rounded-l-lg'
            />
          </div>
          <div className='flex flex-col justify-between w-1/2 p-8'>
            <h1 className='text-4xl font-bold mb-4'>{character.name}</h1>
            <div className='flex flex-col items-baseline'>
              <p>Статус: {character.status}</p>
              <p>Вид: {character.species}</p>
              <p>Пол: {character.gender}</p>
              {character.type && <p>Тип:{character.type}</p>}
            </div>

            <div className='border-t pt-6'>
              <h3 className='text-lg font-semibold text-gray-700 mb-2'>Дата создания</h3>
              <p className='text-gray-600'>
                {new Date(character.created).toLocaleString('ru-RU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        </div>
      )}
      <BackButton url='/characters' text='Вернуться к списку персонажей' />
    </div>
  )
}
