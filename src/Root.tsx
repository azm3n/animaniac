import {Outlet, useOutlet} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {AppWrapper} from './components/common'
import {HomePage, IndexPage} from './pages'
import {useAuth} from './hooks'

const Root = () => {
  const outlet = useOutlet()
  const {isUserLogged} = useAuth()

  return (
    <AppWrapper>
      <Navbar />
      {outlet ?
        <Outlet />
      : isUserLogged ?
        <HomePage />
      : <IndexPage />}
      <Footer />
    </AppWrapper>
  )
}

export default Root
