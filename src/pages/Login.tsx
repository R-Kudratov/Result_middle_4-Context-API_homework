import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

export const Login = () => {
  const user = useUser()
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState<string | null>(null)

  const from = location.state?.from || '/'

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username')?.toString().trim()

    if (!username) {
      setError('Необходимо заполнить логин')
      return
    }

    user.login(username, () => {
      setError(null)
      navigate(from, { replace: true })
    })
  }

  return (
    <div className='flex flex-col gap-10'>
      <h1>Введите логин</h1>
      <form onSubmit={handleSubmit}>
        {error && <p className='text-red-500 text-sm mb-1'>{error}</p>}
        <input
          type='text'
          name='username'
          className={`py-2 px-5 mr-2 border border-gray-300 rounded-full ${
            error ? 'border-red-500' : ''
          }`}
        />
        <button
          type='submit'
          className='py-2 px-6 text-bold bg-green-600 hover:bg-green-800 rounded-full duration-150 ease-in-out'
        >
          Войти
        </button>
      </form>
    </div>
  )
}
