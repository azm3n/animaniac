import {Outlet} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {AppWrapper} from './components/common'

const Root = () => {
  return (
    <AppWrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </AppWrapper>
  )
}

export default Root
