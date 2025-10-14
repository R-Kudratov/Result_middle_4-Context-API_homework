import { Link } from 'react-router-dom'

export const BackButton = ({ url, text = '← Назад' }: { url: string; text?: string }) => {
  return (
    <Link
      to={url}
      className='inline-block px-6 py-4 text-bold bg-green-600 hover:bg-green-800 rounded-full mt-10 duration-200 ease-in-out'
    >
      {`← ${text}`}
    </Link>
  )
}
