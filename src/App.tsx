import { Routes, Route } from 'react-router-dom'
import { Layout, PrivateRoute } from './components'
import {
  Characters,
  CharacterDetail,
  Episodes,
  EpisodeDetail,
  Home,
  Login,
  Logout,
  Locations,
  LocationDetail,
  NotFound,
} from './pages'
import { UserProvider } from './context/UserProvider'
import './App.css'

export const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path='/characters'>
              <Route index element={<Characters />} />
              <Route path=':id' element={<CharacterDetail />} />
            </Route>
            <Route path='/episodes'>
              <Route index element={<Episodes />} />
              <Route path=':id' element={<EpisodeDetail />} />
            </Route>
            <Route path='/locations'>
              <Route index element={<Locations />} />
              <Route path=':id' element={<LocationDetail />} />
            </Route>
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </UserProvider>
  )
}
