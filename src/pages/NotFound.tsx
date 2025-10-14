import { BackButton } from '../components'
import NotFoundImage from '/images/404.png'

export const NotFound = () => {
  return (
    <div className='text-center'>
      <img src={NotFoundImage} alt='404' className='w-120 mx-auto' />
      <h2 className='text-2xl font-semibold text-gray-600 mb-8'>
        Ой! Эта страница не существует в нашей вселенной
      </h2>
      <p className='text-lg text-gray-500 mb-8 max-w-2xl mx-auto'>
        Возможно, Рик переместил эту страницу в другое измерение, или она просто не была
        создана. Но не волнуйтесь - мы поможем вам вернуться домой!
      </p>
      <BackButton url={'/'} text={'Вернуться домой'}></BackButton>
    </div>
  )
}
