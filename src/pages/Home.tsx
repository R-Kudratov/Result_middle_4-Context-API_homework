import Logo from '/images/Rick-And-Morty-Logo.png'

export const Home = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
      <img src={Logo} alt='Rick and Morty logo' className='w-120' />
      <p className='text-xl text-[#00b5cc] max-w-3xl mx-auto'>
        Исследуйте вселенную, полную безумных приключений, невероятных персонажей и
        удивительных локаций из культового мультсериала.
      </p>
    </div>
  )
}
