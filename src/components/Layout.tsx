import { NavLink, Outlet } from 'react-router-dom'

const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
  `hover:bg-[#24475b] px-4 py-1 rounded-3xl duration-200 ease-in-out ${
    isActive ? 'text-gray-500' : ''
  }`

export const Layout = () => {
  return (
    <div className='relative flex flex-col items-center w-[800px]'>
      <nav className='fixed z-100 top-5 flex items-center justify-center gap-4 px-3 h-12 rounded-4xl bg-[#192b3a] shadow-xl/10'>
        <NavLink to='/' className={navLinkStyle}>
          Главная
        </NavLink>
        <NavLink to='/characters' className={navLinkStyle}>
          Персонажи
        </NavLink>
        <NavLink to='/locations' className={navLinkStyle}>
          Локации
        </NavLink>
        <NavLink to='/episodes' className={navLinkStyle}>
          Эпизоды
        </NavLink>
      </nav>
      <main className='w-full mt-15'>
        <Outlet />
      </main>
    </div>
  )
}
