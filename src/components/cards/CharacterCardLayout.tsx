import { Link } from 'react-router-dom'
import type { Character } from '../../types'

export const CharacterCardLayout = ({ characterData }: { characterData: Character }) => {
  return (
    <Link
      to={`/characters/${characterData.id}`}
      className='hover:scale-102 hover:-translate-y-1 hover:opacity-80 duration-200 ease-in-out'
    >
      <div className='relative w-56 h-73 flex justify-center'>
        <img
          src={characterData.image}
          alt={characterData.name}
          className='absolute w-36 rounded-full z-10 shadow-xl/10'
        />
        <div className='absolute bottom-0 w-full h-55 pt-18 px-2 flex flex-col items-center justify-center rounded-2xl bg-[#192b3a] text-white text-sm shadow-2xl/5'>
          <p>Имя: {characterData.name}</p>
          <p>Статус: {characterData.status}</p>
          <p>Вид: {characterData.species}</p>
          {characterData.type && <p>Тип: {characterData.type}</p>}
          <p>Пол: {characterData.gender}</p>
        </div>
      </div>
    </Link>
  )
}
