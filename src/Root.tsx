import {Outlet, useOutlet} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {AppWrapper} from './components/common'
import {HomePage} from './pages'

const Root = () => {
  const outlet = useOutlet()

  return (
    <AppWrapper>
      <Navbar />
      {outlet ?
        <Outlet />
      : <HomePage />}
      <Footer />
    </AppWrapper>
  )
}

export default Root
