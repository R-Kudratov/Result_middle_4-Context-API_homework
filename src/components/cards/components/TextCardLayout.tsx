import { Link } from 'react-router-dom'

type TextCardProps = {
  url: string
  children: React.ReactNode
}

export const TextCardLayout = ({ url, children }: TextCardProps) => {
  return (
    <Link
      to={url}
      className='hover:scale-102 hover:-translate-y-1 hover:opacity-80 duration-200 ease-in-out'
    >
      <div className='relative w-75 h-30 px-2 flex flex-col items-center justify-center rounded-2xl bg-[#192b3a] text-white text-sm shadow-2xl/5'>
        {children}
      </div>
    </Link>
  )
}
